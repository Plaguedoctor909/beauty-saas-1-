import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, TrendingUp, Scissors } from "lucide-react"

export function ClientStats() {
  return (
    <>
      <Card className="border-t-4 border-beauty-pink">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
          <Users className="h-4 w-4 text-beauty-pink" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">248</div>
          <p className="text-xs text-beauty-pink">+12% from last month</p>
        </CardContent>
      </Card>
      <Card className="border-t-4 border-beauty-purple">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
          <Calendar className="h-4 w-4 text-beauty-purple" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-beauty-purple">3 more than yesterday</p>
        </CardContent>
      </Card>
      <Card className="border-t-4 border-beauty-teal">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
          <TrendingUp className="h-4 w-4 text-beauty-teal" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₦485,000</div>
          <p className="text-xs text-beauty-teal">+18.2% from last month</p>
        </CardContent>
      </Card>
      <Card className="border-t-4 border-beauty-yellow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Popular Services</CardTitle>
          <Scissors className="h-4 w-4 text-beauty-yellow" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Haircut & Color</div>
          <p className="text-xs text-beauty-yellow">42 bookings this month</p>
        </CardContent>
      </Card>
    </>
  )
}
