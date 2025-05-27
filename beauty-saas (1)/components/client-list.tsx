"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"

export function ClientList() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card className="border border-beauty-purple/20 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-beauty-purple" />
            <Input
              placeholder="Search clients..."
              className="pl-8 border-beauty-purple/20 focus-visible:ring-beauty-purple/30"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-beauty-purple/20 text-beauty-purple hover:bg-beauty-purple/10"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <Table>
          <TableHeader className="bg-beauty-purple/5">
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Spent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.map((client) => (
              <TableRow key={client.id} className="hover:bg-beauty-purple/5">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 ring-2 ring-beauty-purple/20">
                      <AvatarImage src={client.avatar || "/placeholder.svg"} alt={client.name} />
                      <AvatarFallback className="bg-beauty-purple/20 text-beauty-purple">
                        {client.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{client.name}</p>
                      <p className="text-xs text-muted-foreground">{client.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>{client.lastVisit}</TableCell>
                <TableCell className="font-medium">₦{client.totalSpent * 1000}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      client.status === "VIP"
                        ? "bg-beauty-pink/20 text-beauty-pink border-beauty-pink/30"
                        : client.status === "Regular"
                          ? "bg-beauty-purple/20 text-beauty-purple border-beauty-purple/30"
                          : "bg-beauty-teal/20 text-beauty-teal border-beauty-teal/30"
                    }
                  >
                    {client.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-beauty-purple hover:bg-beauty-purple/10 hover:text-beauty-purple"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

const clients = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "(555) 123-4567",
    avatar: "/placeholder.svg?height=36&width=36",
    initials: "SJ",
    lastVisit: "2 days ago",
    totalSpent: 485,
    status: "Regular",
  },
  {
    id: "2",
    name: "Emily Davis",
    email: "emily@example.com",
    phone: "(555) 234-5678",
    avatar: "/placeholder.svg?height=36&width=36",
    initials: "ED",
    lastVisit: "1 week ago",
    totalSpent: 320,
    status: "Regular",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael@example.com",
    phone: "(555) 345-6789",
    avatar: "/placeholder.svg?height=36&width=36",
    initials: "MB",
    lastVisit: "Today",
    totalSpent: 35,
    status: "Regular",
  },
  {
    id: "4",
    name: "Jessica Wilson",
    email: "jessica@example.com",
    phone: "(555) 456-7890",
    avatar: "/placeholder.svg?height=36&width=36",
    initials: "JW",
    lastVisit: "3 days ago",
    totalSpent: 650,
    status: "VIP",
  },
  {
    id: "5",
    name: "David Miller",
    email: "david@example.com",
    phone: "(555) 567-8901",
    avatar: "/placeholder.svg?height=36&width=36",
    initials: "DM",
    lastVisit: "2 weeks ago",
    totalSpent: 150,
    status: "Regular",
  },
  {
    id: "6",
    name: "Amanda Taylor",
    email: "amanda@example.com",
    phone: "(555) 678-9012",
    avatar: "/placeholder.svg?height=36&width=36",
    initials: "AT",
    lastVisit: "Never",
    totalSpent: 0,
    status: "New",
  },
]
