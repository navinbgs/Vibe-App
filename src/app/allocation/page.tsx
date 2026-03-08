"use client"

import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts"

type AllocationItem = {
    name: string
    percent: number
}

const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ec4899']

export default function Allocation() {
    const [data, setData] = useState<{ target: AllocationItem[], actual: AllocationItem[] }>({ target: [], actual: [] })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/allocation')
            .then(res => res.json())
            .then(fetchedData => {
                setData(fetchedData)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className="p-6 flex justify-center items-center h-full"><div className="animate-spin w-8 h-8 border-4 border-zinc-200 border-t-zinc-800 rounded-full" /></div>
    }

    return (
        <div className="p-4 sm:p-6 pb-24 space-y-6 animate-in slide-in-from-right-8 duration-500">
            <header className="mb-6">
                <h1 className="text-2xl font-bold tracking-tight">Asset Allocation</h1>
                <p className="text-zinc-500 text-sm">Target vs Actual spread</p>
            </header>

            <div className="bg-white dark:bg-zinc-950 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
                <h2 className="text-lg font-semibold text-center mb-4">Current Allocation</h2>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data.actual}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="percent"
                            >
                                {data.actual.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <RechartsTooltip formatter={(value) => `${value}%`} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2">
                    <div className="flex-1">Asset Class</div>
                    <div className="w-16 text-right">Actual</div>
                    <div className="w-16 text-right">Target</div>
                </div>
                {data.actual.map((item, idx) => {
                    const targetItem = data.target.find(t => t.name === item.name)
                    const targetPercent = targetItem ? targetItem.percent : 0
                    const diff = (item.percent - targetPercent).toFixed(1)
                    const isOff = Math.abs(item.percent - targetPercent) > 2.0

                    return (
                        <div key={item.name} className="flex items-center justify-between p-3 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-100 dark:border-zinc-800">
                            <div className="flex items-center flex-1">
                                <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></div>
                                <span className="font-medium text-sm text-zinc-800 dark:text-zinc-200">{item.name}</span>
                            </div>
                            <div className={`w-16 text-right text-sm font-semibold ${isOff ? 'text-amber-500' : ''}`}>
                                {item.percent}%
                            </div>
                            <div className="w-16 text-right text-sm text-zinc-500">
                                {targetPercent}%
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
