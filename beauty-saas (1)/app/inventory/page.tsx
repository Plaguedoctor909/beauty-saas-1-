import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { InventoryList } from "@/components/inventory-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Inventory | BeautyPro",
  description: "Manage your beauty salon inventory",
}

export default function InventoryPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Inventory" text="Manage your product inventory and stock levels.">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </DashboardHeader>
      <div className="grid gap-4">
        <InventoryList />
      </div>
    </DashboardShell>
  )
}
