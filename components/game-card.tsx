import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface GameCardProps {
  image: string
  title: string
  price?: string
  originalPrice?: string
  discount?: number
  rating?: number
  reviews?: number
  isNew?: boolean
}

export default function GameCard({
  image,
  title,
  price = "$9.99",
  originalPrice,
  discount,
  rating = 4.5,
  reviews = 128,
  isNew = false,
}: GameCardProps) {
  return (
    <Link href="#" className="group">
      <div className="overflow-hidden rounded-lg bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {discount && <Badge className="absolute right-2 top-2 bg-red-600">-{discount}%</Badge>}
          {isNew && <Badge className="absolute left-2 top-2 bg-green-600">New</Badge>}
        </div>
        <div className="p-3">
          <h3 className="text-sm font-medium line-clamp-2">{title}</h3>
          <div className="mt-1 flex items-center">
            <div className="flex items-center">
              <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
              <span className="ml-1 text-xs text-gray-300">{rating}</span>
            </div>
            <span className="mx-1 text-xs text-gray-500">|</span>
            <span className="text-xs text-gray-400">{reviews} reviews</span>
          </div>
          <div className="mt-2 flex items-center">
            <span className="font-medium text-white">{price}</span>
            {originalPrice && <span className="ml-2 text-xs text-gray-400 line-through">{originalPrice}</span>}
          </div>
        </div>
      </div>
    </Link>
  )
}
