import { Settings, Lock, FileText, HelpCircle, LogOut, ChevronRight } from "lucide-react";

export default function Profile() {
    return (
        <div className="p-4 sm:p-6 pb-24 space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <header className="mb-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
            </header>

            <div className="flex flex-col items-center bg-white dark:bg-zinc-950 rounded-3xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
                <div className="w-24 h-24 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden border-4 border-white dark:border-zinc-950 shadow-md mb-4 relative group cursor-pointer hover:border-zinc-100 dark:hover:border-zinc-800 transition-colors">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=transparent`} alt="Profile" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs font-semibold">Edit</span>
                    </div>
                </div>
                <h2 className="text-xl font-bold">Alex Johnson</h2>
                <p className="text-zinc-500 text-sm">alex.johnson@example.com</p>
                <div className="mt-4 bg-zinc-100 dark:bg-zinc-900 px-4 py-1.5 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Pro Member
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3 px-2">Account Settings</h3>

                {[
                    { icon: Settings, label: "Preferences" },
                    { icon: Lock, label: "Security" },
                    { icon: FileText, label: "Tax Documents" },
                    { icon: HelpCircle, label: "Help Center" },
                ].map((item, i) => (
                    <button key={i} className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-100 dark:border-zinc-800 active:scale-[0.98] transition-all group">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center mr-4 text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 transition-colors">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-zinc-900 dark:text-zinc-100">{item.label}</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-zinc-400" />
                    </button>
                ))}
            </div>

            <button className="w-full flex items-center justify-center p-4 mt-6 bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 rounded-2xl font-medium active:scale-[0.98] transition-all">
                <LogOut className="w-5 h-5 mr-2" />
                Log Out
            </button>
        </div>
    )
}
