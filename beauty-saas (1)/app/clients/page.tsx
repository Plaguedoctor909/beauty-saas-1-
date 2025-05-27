import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ClientList } from "@/components/client-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Clients | BeautyPro",
  description: "Manage your beauty salon clients",
}

export default function ClientsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Clients" text="Manage your client database and history.">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Client
        </Button>
      </DashboardHeader>
      <div className="grid gap-4">
        <ClientList />
      </div>
    </DashboardShell>
  )
}
