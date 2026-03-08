"use client"

import { useEffect, useState } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

type TimeSeriesData = {
    date: string
    portfolio: number
    sp500: number
}

export default function Performance() {
    const [data, setData] = useState<{ ytdReturn: number, timeSeries: TimeSeriesData[] }>({ ytdReturn: 0, timeSeries: [] })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/performance')
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
                <h1 className="text-2xl font-bold tracking-tight">Performance</h1>
                <p className="text-zinc-500 text-sm">Your returns over time</p>
            </header>

            <div className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-100 rounded-3xl p-6 border border-emerald-100 dark:border-emerald-900">
                <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-1">Year to Date (YTD)</p>
                <h2 className="text-4xl font-bold tracking-tight">+{data.ytdReturn}%</h2>
                <p className="text-emerald-700/70 dark:text-emerald-300/70 text-sm mt-2">
                    Outperforming S&P 500 by +4.3%
                </p>
            </div>

            <div className="bg-white dark:bg-zinc-950 rounded-3xl p-4 sm:p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
                <h2 className="text-lg font-semibold mb-6">Growth of $100k</h2>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data.timeSeries} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorSp500" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#94a3b8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                            <YAxis hide domain={['dataMin - 5000', 'auto']} />
                            <Tooltip
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                formatter={(value: any) => [`$${Number(value).toLocaleString()}`, undefined]}
                            />
                            <Area type="monotone" dataKey="sp500" name="S&P 500" stroke="#94a3b8" strokeWidth={2} fillOpacity={1} fill="url(#colorSp500)" />
                            <Area type="monotone" dataKey="portfolio" name="Portfolio" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorPortfolio)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-center mt-6 space-x-6 text-sm">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                        <span className="text-zinc-600 dark:text-zinc-400">Your Portfolio</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-slate-400 mr-2"></div>
                        <span className="text-zinc-600 dark:text-zinc-400">S&P 500</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
