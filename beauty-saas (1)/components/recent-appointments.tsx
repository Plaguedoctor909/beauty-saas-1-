import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentAppointments() {
  return (
    <Card className="border border-beauty-teal/20 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-beauty-teal/10 to-beauty-purple/10 rounded-t-lg">
        <CardTitle className="text-beauty-teal">Recent Appointments</CardTitle>
        <CardDescription>Your upcoming and recent appointments</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-beauty-teal/5">
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id} className="hover:bg-beauty-teal/5">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 ring-2 ring-beauty-teal/20">
                      <AvatarImage
                        src={appointment.client.avatar || "/placeholder.svg"}
                        alt={appointment.client.name}
                      />
                      <AvatarFallback className="bg-beauty-teal/20 text-beauty-teal">
                        {appointment.client.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{appointment.client.name}</p>
                      <p className="text-xs text-muted-foreground">{appointment.client.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{appointment.service}</TableCell>
                <TableCell>{appointment.dateTime}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      appointment.status === "Completed"
                        ? "bg-beauty-green/20 text-beauty-green border-beauty-green/30"
                        : appointment.status === "Upcoming"
                          ? "bg-beauty-purple/20 text-beauty-purple border-beauty-purple/30"
                          : "bg-beauty-yellow/20 text-beauty-yellow border-beauty-yellow/30"
                    }
                  >
                    {appointment.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium">₦{appointment.amount * 1000}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

const appointments = [
  {
    id: "1",
    client: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SJ",
    },
    service: "Haircut & Styling",
    dateTime: "Today, 10:00 AM",
    status: "Completed",
    amount: 85,
  },
  {
    id: "2",
    client: {
      name: "Emily Davis",
      email: "emily@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "ED",
    },
    service: "Manicure & Pedicure",
    dateTime: "Today, 2:30 PM",
    status: "Upcoming",
    amount: 65,
  },
  {
    id: "3",
    client: {
      name: "Michael Brown",
      email: "michael@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MB",
    },
    service: "Beard Trim",
    dateTime: "Tomorrow, 11:00 AM",
    status: "Upcoming",
    amount: 35,
  },
  {
    id: "4",
    client: {
      name: "Jessica Wilson",
      email: "jessica@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JW",
    },
    service: "Full Facial",
    dateTime: "Yesterday, 3:00 PM",
    status: "Completed",
    amount: 120,
  },
  {
    id: "5",
    client: {
      name: "David Miller",
      email: "david@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "DM",
    },
    service: "Hair Coloring",
    dateTime: "Tomorrow, 1:00 PM",
    status: "Upcoming",
    amount: 150,
  },
]
