import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface InventoryStatusProps {
  className?: string
}

export function InventoryStatus({ className }: InventoryStatusProps) {
  return (
    <Card className={`${className} border border-beauty-yellow/20 shadow-lg`}>
      <CardHeader className="bg-gradient-to-r from-beauty-yellow/10 to-beauty-orange/10 rounded-t-lg">
        <CardTitle className="text-beauty-orange">Inventory Status</CardTitle>
        <CardDescription>Monitor your product inventory levels</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {inventoryItems.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                </div>
                <div className="text-sm text-right">
                  <p className="font-medium">{item.inStock} in stock</p>
                  <p className="text-xs text-muted-foreground">{item.reorderPoint} reorder point</p>
                </div>
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
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const inventoryItems = [
  {
    id: "1",
    name: "Shampoo - Hydrating Formula",
    category: "Hair Care",
    inStock: 24,
    reorderPoint: 10,
    capacity: 50,
  },
  {
    id: "2",
    name: "Styling Gel - Strong Hold",
    category: "Hair Care",
    inStock: 8,
    reorderPoint: 10,
    capacity: 30,
  },
  {
    id: "3",
    name: "Facial Cleanser - All Skin Types",
    category: "Skin Care",
    inStock: 32,
    reorderPoint: 15,
    capacity: 40,
  },
  {
    id: "4",
    name: "Nail Polish - Ruby Red",
    category: "Nail Care",
    inStock: 5,
    reorderPoint: 8,
    capacity: 25,
  },
  {
    id: "5",
    name: "Hair Dye - Blonde",
    category: "Hair Color",
    inStock: 18,
    reorderPoint: 12,
    capacity: 35,
  },
]
