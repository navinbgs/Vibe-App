import { ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="p-4 sm:p-6 pb-24 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
                    <p className="text-zinc-500 text-sm">Welcome back, Alex</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-200 dark:border-zinc-700">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=transparent`} alt="Profile" className="w-full h-full object-cover" />
                </div>
            </header>

            <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-800 dark:to-zinc-950 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
                <p className="text-zinc-300 text-sm font-medium mb-1">Total Balance</p>
                <h2 className="text-4xl font-bold tracking-tight mb-2">$124,562.80</h2>
                <div className="flex items-center text-emerald-400 text-sm font-medium">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    <span>+$3,240.50 (2.6%)</span>
                    <span className="text-zinc-400 ml-2 font-normal">Today</span>
                </div>
            </section>

            <div className="grid grid-cols-2 gap-4">
                <Link href="/portfolio" className="bg-white dark:bg-zinc-950 rounded-2xl p-4 shadow-sm border border-zinc-100 dark:border-zinc-800 active:scale-95 transition-transform">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                        <Activity className="w-4 h-4" />
                    </div>
                    <p className="text-sm font-medium text-zinc-500 mb-1">Portfolio Health</p>
                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Optimal</p>
                </Link>
                <Link href="/performance" className="bg-white dark:bg-zinc-950 rounded-2xl p-4 shadow-sm border border-zinc-100 dark:border-zinc-800 active:scale-95 transition-transform">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <p className="text-sm font-medium text-zinc-500 mb-1">YTD Return</p>
                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">+12.4%</p>
                </Link>
            </div>

            <section className="pt-4">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                    {[
                        { title: "Monthly Deposit", date: "Today", amount: "+$500.00", type: "deposit" },
                        { title: "Dividend Reinvestment", date: "Yesterday", amount: "+$24.50", type: "dividend" },
                        { title: "Auto-Rebalance", date: "Last week", amount: "Completed", type: "rebalance" },
                    ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center p-4 bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mr-3 text-zinc-500 shadow-inner">
                                    {item.type === "deposit" ? <ArrowDownRight className="w-5 h-5 text-emerald-500" /> : <Activity className="w-5 h-5" />}
                                </div>
                                <div>
                                    <p className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{item.title}</p>
                                    <p className="text-xs text-zinc-500">{item.date}</p>
                                </div>
                            </div>
                            <p className={`text-sm font-medium ${item.type === "deposit" || item.type === "dividend" ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-700 dark:text-zinc-300"}`}>
                                {item.amount}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
