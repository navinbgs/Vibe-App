"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Briefcase, PieChart, TrendingUp, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Allocation", href: "/allocation", icon: PieChart },
  { name: "Performance", href: "/performance", icon: TrendingUp },
  { name: "Rebalance", href: "/rebalance", icon: RefreshCw },
  { name: "Profile", href: "/profile", icon: User },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pb-safe">
      <div className="flex justify-around items-center h-16 sm:h-20 max-w-md mx-auto px-2">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href || (pathname === '/' && tab.href === '/dashboard')
          const Icon = tab.icon
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors",
                isActive && "text-emerald-600 dark:text-emerald-500"
              )}
            >
              <Icon className={cn("w-6 h-6 sm:w-7 sm:h-7", isActive && "stroke-[2.5px]")} />
              <span className="text-[10px] sm:text-xs font-medium">{tab.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
