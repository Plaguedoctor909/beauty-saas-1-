"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function AppointmentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Tabs defaultValue="calendar" className="w-full">
      <div className="flex justify-between items-center mb-4">
        <TabsList>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="calendar" className="space-y-4">
        <div className="grid md:grid-cols-7 gap-4">
          <Card className="md:col-span-2">
            <CardContent className="p-4">
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            </CardContent>
          </Card>

          <Card className="md:col-span-5">
            <CardContent className="p-4">
              <h3 className="text-lg font-medium mb-4">
                {date?.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h3>

              <div className="space-y-4">
                {dailyAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="text-center min-w-[60px]">
                        <div className="text-sm font-medium">{appointment.time}</div>
                        <Badge variant="outline" className="mt-1">
                          {appointment.duration}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={appointment.client.avatar || "/placeholder.svg"}
                            alt={appointment.client.name}
                          />
                          <AvatarFallback>{appointment.client.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{appointment.client.name}</p>
                          <p className="text-sm text-muted-foreground">{appointment.service}</p>
                        </div>
                      </div>
                    </div>

                    <Badge
                      variant={
                        appointment.status === "Confirmed"
                          ? "default"
                          : appointment.status === "Pending"
                            ? "outline"
                            : "secondary"
                      }
                    >
                      {appointment.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="list">
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              {dailyAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={appointment.client.avatar || "/placeholder.svg"}
                        alt={appointment.client.name}
                      />
                      <AvatarFallback>{appointment.client.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{appointment.client.name}</p>
                      <p className="text-sm text-muted-foreground">{appointment.service}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">{appointment.time}</p>
                      <p className="text-xs text-muted-foreground">{appointment.duration}</p>
                    </div>

                    <Badge
                      variant={
                        appointment.status === "Confirmed"
                          ? "default"
                          : appointment.status === "Pending"
                            ? "outline"
                            : "secondary"
                      }
                    >
                      {appointment.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

const dailyAppointments = [
  {
    id: "1",
    time: "9:00 AM",
    duration: "45 min",
    client: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    service: "Haircut & Styling",
    status: "Confirmed",
  },
  {
    id: "2",
    time: "10:30 AM",
    duration: "60 min",
    client: {
      name: "Emily Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ED",
    },
    service: "Manicure & Pedicure",
    status: "Confirmed",
  },
  {
    id: "3",
    time: "12:00 PM",
    duration: "30 min",
    client: {
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MB",
    },
    service: "Beard Trim",
    status: "Pending",
  },
  {
    id: "4",
    time: "2:00 PM",
    duration: "90 min",
    client: {
      name: "Jessica Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JW",
    },
    service: "Full Facial",
    status: "Confirmed",
  },
  {
    id: "5",
    time: "4:00 PM",
    duration: "120 min",
    client: {
      name: "David Miller",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DM",
    },
    service: "Hair Coloring",
    status: "Confirmed",
  },
]
