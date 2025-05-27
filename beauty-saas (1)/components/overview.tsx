"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface OverviewProps {
  className?: string
}

const data = [
  {
    name: "Jan",
    total: 120000,
  },
  {
    name: "Feb",
    total: 190000,
  },
  {
    name: "Mar",
    total: 230000,
  },
  {
    name: "Apr",
    total: 280000,
  },
  {
    name: "May",
    total: 350000,
  },
  {
    name: "Jun",
    total: 420000,
  },
  {
    name: "Jul",
    total: 480000,
  },
]

export function Overview({ className }: OverviewProps) {
  return (
    <Card className={className}>
      <CardHeader className="bg-gradient-to-r from-beauty-pink/10 to-beauty-purple/10 rounded-t-lg">
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>Monthly revenue for your beauty business</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `₦${value / 1000}K`}
            />
            <Bar dataKey="total" radius={[4, 4, 0, 0]} fill="url(#colorGradient)" />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff6b9d" stopOpacity={1} />
                <stop offset="100%" stopColor="#7c4dff" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
