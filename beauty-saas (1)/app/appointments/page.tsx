import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { AppointmentCalendar } from "@/components/appointment-calendar"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Appointments | BeautyPro",
  description: "Manage your beauty salon appointments",
}

export default function AppointmentsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Appointments" text="Schedule and manage client appointments.">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Appointment
        </Button>
      </DashboardHeader>
      <div className="grid gap-4">
        <AppointmentCalendar />
      </div>
    </DashboardShell>
  )
}
