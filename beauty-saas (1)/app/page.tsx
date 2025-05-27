import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Overview } from "@/components/overview"
import { RecentAppointments } from "@/components/recent-appointments"
import { InventoryStatus } from "@/components/inventory-status"
import { ClientStats } from "@/components/client-stats"

export const metadata: Metadata = {
  title: "Dashboard | BeautyPro",
  description: "Manage your beauty business with ease",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Get an overview of your beauty business performance." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ClientStats />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Overview className="col-span-4" />
        <InventoryStatus className="col-span-3" />
      </div>
      <div className="mt-4">
        <RecentAppointments />
      </div>
    </DashboardShell>
  )
}
