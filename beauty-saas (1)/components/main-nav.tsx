"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Scissors } from "lucide-react"

import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex items-center">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Scissors className="h-6 w-6 text-beauty-pink" />
        <span className="hidden font-bold sm:inline-block bg-gradient-to-r from-beauty-pink to-beauty-purple bg-clip-text text-transparent">
          BeautyPro
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-beauty-pink",
            pathname === "/" ? "text-beauty-pink" : "text-foreground/60",
          )}
        >
          Dashboard
        </Link>
        <Link
          href="/appointments"
          className={cn(
            "transition-colors hover:text-beauty-purple",
            pathname?.startsWith("/appointments") ? "text-beauty-purple" : "text-foreground/60",
          )}
        >
          Appointments
        </Link>
        <Link
          href="/clients"
          className={cn(
            "transition-colors hover:text-beauty-teal",
            pathname?.startsWith("/clients") ? "text-beauty-teal" : "text-foreground/60",
          )}
        >
          Clients
        </Link>
        <Link
          href="/inventory"
          className={cn(
            "transition-colors hover:text-beauty-yellow",
            pathname?.startsWith("/inventory") ? "text-beauty-yellow" : "text-foreground/60",
          )}
        >
          Inventory
        </Link>
        <Link
          href="/reports"
          className={cn(
            "transition-colors hover:text-beauty-orange",
            pathname?.startsWith("/reports") ? "text-beauty-orange" : "text-foreground/60",
          )}
        >
          Reports
        </Link>
      </nav>
    </div>
  )
}
