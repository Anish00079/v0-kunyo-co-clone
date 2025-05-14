import Image from "next/image"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import UniverseLogo from "./universe-logo"
import Link from "next/link"

export default function CosmicCollection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-purple-950/80 to-gray-950/80 z-0"></div>

      {/* Stars background (static version) */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 flex flex-col items-center text-center">
          <UniverseLogo className="mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Cosmic Collection</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300">
            Explore our exclusive universe-themed gaming items and limited edition collectibles
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cosmicItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="relative rounded-lg bg-gray-900 p-6">
                <div className="mb-4 flex justify-between">
                  <Badge className="bg-purple-600">{item.category}</Badge>
                  {item.limited && <Badge className="bg-orange-600">Limited Edition</Badge>}
                </div>

                <div className="relative mb-6 aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">{item.name}</h3>

                <div className="mb-4 flex items-center">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < item.rating ? "fill-yellow-500 text-yellow-500" : "fill-gray-700 text-gray-700"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">({item.reviews} reviews)</span>
                </div>

                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-white">{item.price}</span>
                  </div>
                  {item.stock < 10 && <span className="text-sm text-red-400">Only {item.stock} left</span>}
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full py-6">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="#">
            <Button
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-950 hover:text-purple-300 rounded-full px-8 py-6 text-lg"
            >
              View All Cosmic Items
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

const cosmicItems = [
  {
    id: 1,
    name: "Galactic Guardian Skin Bundle",
    category: "Skins",
    image: "/placeholder.svg?height=300&width=300",
    price: "$24.99",
    rating: 5,
    reviews: 128,
    stock: 15,
    limited: true,
  },
  {
    id: 2,
    name: "Nebula Warrior Weapon Set",
    category: "Weapons",
    image: "/placeholder.svg?height=300&width=300",
    price: "$19.99",
    rating: 4,
    reviews: 86,
    stock: 8,
    limited: true,
  },
  {
    id: 3,
    name: "Celestial Premium Battle Pass",
    category: "Battle Pass",
    image: "/placeholder.svg?height=300&width=300",
    price: "$14.99",
    rating: 5,
    reviews: 214,
    stock: 999,
    limited: false,
  },
]
