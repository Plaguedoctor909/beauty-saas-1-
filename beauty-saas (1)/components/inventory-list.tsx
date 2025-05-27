"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Search, Filter, Plus, Minus } from "lucide-react"

export function InventoryList() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = inventoryItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card className="border border-beauty-yellow/20 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-beauty-orange" />
            <Input
              placeholder="Search inventory..."
              className="pl-8 border-beauty-yellow/20 focus-visible:ring-beauty-orange/30"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-beauty-yellow/20 text-beauty-orange hover:bg-beauty-yellow/10"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <Table>
          <TableHeader className="bg-beauty-yellow/5">
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((item) => (
              <TableRow key={item.id} className="hover:bg-beauty-yellow/5">
                <TableCell>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.sku}</p>
                  </div>
                </TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell className="font-medium">₦{item.price * 1000}</TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{item.inStock} in stock</span>
                      <span className="text-muted-foreground">{Math.round((item.inStock / item.capacity) * 100)}%</span>
                    </div>
                    <Progress
                      value={(item.inStock / item.capacity) * 100}
                      className={
                        item.inStock <= item.reorderPoint
                          ? "h-2 bg-red-100"
                          : item.inStock < item.capacity * 0.5
                            ? "h-2 bg-beauty-yellow/20"
                            : "h-2 bg-beauty-green/20"
                      }
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      item.inStock <= item.reorderPoint
                        ? "bg-red-100 text-red-600 border-red-200"
                        : item.inStock < item.capacity * 0.5
                          ? "bg-beauty-yellow/20 text-beauty-orange border-beauty-yellow/30"
                          : "bg-beauty-green/20 text-beauty-green border-beauty-green/30"
                    }
                  >
                    {item.inStock <= item.reorderPoint
                      ? "Low Stock"
                      : item.inStock < item.capacity * 0.5
                        ? "Medium"
                        : "Good"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-beauty-green/20 text-beauty-green hover:bg-beauty-green/10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-red-200 text-red-600 hover:bg-red-50">
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

const inventoryItems = [
  {
    id: "1",
    name: "Shampoo - Hydrating Formula",
    sku: "SH-HYD-001",
    category: "Hair Care",
    price: 24.99,
    inStock: 24,
    reorderPoint: 10,
    capacity: 50,
  },
  {
    id: "2",
    name: "Styling Gel - Strong Hold",
    sku: "SG-STR-002",
    category: "Hair Care",
    price: 18.99,
    inStock: 8,
    reorderPoint: 10,
    capacity: 30,
  },
  {
    id: "3",
    name: "Facial Cleanser - All Skin Types",
    sku: "FC-ALL-003",
    category: "Skin Care",
    price: 32.5,
    inStock: 32,
    reorderPoint: 15,
    capacity: 40,
  },
  {
    id: "4",
    name: "Nail Polish - Ruby Red",
    sku: "NP-RED-004",
    category: "Nail Care",
    price: 12.99,
    inStock: 5,
    reorderPoint: 8,
    capacity: 25,
  },
  {
    id: "5",
    name: "Hair Dye - Blonde",
    sku: "HD-BLN-005",
    category: "Hair Color",
    price: 45.99,
    inStock: 18,
    reorderPoint: 12,
    capacity: 35,
  },
  {
    id: "6",
    name: "Moisturizer - Anti-Aging",
    sku: "MO-AGE-006",
    category: "Skin Care",
    price: 54.99,
    inStock: 7,
    reorderPoint: 10,
    capacity: 30,
  },
]
