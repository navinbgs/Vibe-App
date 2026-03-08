"use client"

import { useEffect, useState } from "react"
import { TrendingUp, TrendingDown } from "lucide-react"

type Asset = {
    ticker: string
    name: string
    value: number
    shares: number
    changePercent: number
    type: string
}

export default function Portfolio() {
    const [assets, setAssets] = useState<Asset[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/portfolio')
            .then(res => res.json())
            .then(data => {
                setAssets(data.assets)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className="p-6 flex justify-center items-center h-full"><div className="animate-spin w-8 h-8 border-4 border-zinc-200 border-t-zinc-800 rounded-full" /></div>
    }

    return (
        <div className="p-4 sm:p-6 pb-24 space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <header className="mb-6">
                <h1 className="text-2xl font-bold tracking-tight">Your Portfolio</h1>
                <p className="text-zinc-500 text-sm">Detailed breakdown of your holdings</p>
            </header>

            <div className="space-y-4">
                {assets.map((asset) => (
                    <div key={asset.ticker} className="bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 p-4 rounded-2xl shadow-sm flex items-center justify-between group active:scale-[0.98] transition-all">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center font-bold text-lg text-zinc-700 dark:text-zinc-300">
                                {asset.ticker}
                            </div>
                            <div>
                                <p className="font-semibold text-sm sm:text-base">{asset.name}</p>
                                <p className="text-xs text-zinc-500">{asset.shares.toLocaleString()} shares • {asset.type}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold text-sm sm:text-base">${asset.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                            <p className={`text-xs flex items-center justify-end font-medium ${asset.changePercent >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                                {asset.changePercent >= 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                                {Math.abs(asset.changePercent)}%
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
