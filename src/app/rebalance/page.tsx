import { RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Rebalance() {
    return (
        <div className="p-4 sm:p-6 pb-24 space-y-6 animate-in slide-in-from-bottom-8 duration-500">
            <header className="mb-6">
                <h1 className="text-2xl font-bold tracking-tight">Rebalance</h1>
                <p className="text-zinc-500 text-sm">Keep your portfolio aligned</p>
            </header>

            <div className="bg-indigo-50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-100 rounded-3xl p-6 border border-indigo-100 dark:border-indigo-900 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                    <RefreshCw className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-bold mb-2">Portfolio Drift Detected</h2>
                <p className="text-indigo-700/80 dark:text-indigo-300/80 text-sm mb-6">
                    Your US Equity allocation has drifted 2.2% above target. Rebalancing will sell some US Equity and buy Emerging Markets to restore your target allocation.
                </p>
                <button className="bg-indigo-600 text-white w-full py-3 rounded-xl font-semibold shadow-md active:scale-95 transition-all">
                    Execute Rebalance
                </button>
            </div>

            <div className="space-y-4 pt-4">
                <h3 className="text-lg font-semibold">Proposed Trades</h3>

                <div className="bg-white dark:bg-zinc-950 rounded-2xl p-4 border border-zinc-100 dark:border-zinc-800 flex items-center shadow-sm">
                    <div className="bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-3 py-1 rounded-lg font-bold text-sm mr-4">
                        SELL
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold">US Equity (VTI)</p>
                        <p className="text-xs text-zinc-500">2.2% ($2,740.38)</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-400" />
                </div>

                <div className="bg-white dark:bg-zinc-950 rounded-2xl p-4 border border-zinc-100 dark:border-zinc-800 flex items-center shadow-sm">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-lg font-bold text-sm mr-4">
                        BUY
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold">Emerging Mkts (VWO)</p>
                        <p className="text-xs text-zinc-500">2.0% ($2,491.25)</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-zinc-200 dark:text-zinc-800" />
                </div>

                <div className="bg-white dark:bg-zinc-950 rounded-2xl p-4 border border-zinc-100 dark:border-zinc-800 flex items-center shadow-sm">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-lg font-bold text-sm mr-4">
                        BUY
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold">Real Estate (VNQ)</p>
                        <p className="text-xs text-zinc-500">0.2% ($249.13)</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-zinc-200 dark:text-zinc-800" />
                </div>
            </div>
        </div>
    )
}
