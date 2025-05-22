"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface EpicGameCardProps {
  image: string
  title: string
  price: string
  originalPrice?: string
  discount?: number
  rating?: number
  reviews?: number
  isNew?: boolean
  isFeatured?: boolean
}

export default function EpicGameCard({
  image,
  title,
  price,
  originalPrice,
  discount,
  rating = 4.5,
  reviews = 128,
  isNew = false,
  isFeatured = false,
}: EpicGameCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative ${
        isFeatured ? "col-span-2 row-span-2" : ""
      } h-full w-full perspective-[1000px] cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative h-full w-full rounded-lg overflow-hidden transition-all duration-500 transform-style-preserve-3d ${
          isHovered ? "shadow-2xl shadow-orange-500/20" : "shadow-lg"
        }`}
        style={{
          transform: isHovered ? "scale(1.03) translateY(-8px)" : "scale(1) translateY(0)",
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-all duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-opacity duration-500 ${
              isHovered ? "opacity-70" : "opacity-90"
            }`}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-end p-6">
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isNew && <Badge className="bg-orange-500 text-white px-2 py-1">NEW</Badge>}
            {discount && <Badge className="bg-green-500 text-white px-2 py-1">{discount}% OFF</Badge>}
          </div>

          {/* Game Info */}
          <div>
            <h3
              className={`font-bold text-white mb-2 transition-all duration-300 ${
                isFeatured ? "text-2xl" : "text-xl"
              } ${isHovered ? "text-orange-400" : ""}`}
            >
              {title}
            </h3>

            <div className="flex items-center mb-3">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="ml-1 text-sm text-gray-300">{rating}</span>
              </div>
              <span className="mx-2 text-xs text-gray-500">|</span>
              <span className="text-xs text-gray-400">{reviews} reviews</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">{price}</span>
                {originalPrice && <span className="text-sm text-gray-400 line-through">{originalPrice}</span>}
              </div>
            </div>

            {/* Action Buttons - Only show on hover */}
            <div
              className={`flex gap-2 transition-all duration-300 ${
                isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md w-full">Buy Now</Button>
              <Button variant="outline" size="icon" className="border-gray-600 text-white hover:bg-white/10">
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div
          className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(45deg, rgba(249, 115, 22, 0.1) 0%, rgba(249, 115, 22, 0) 100%)",
            boxShadow: isHovered ? "inset 0 0 0 1px rgba(249, 115, 22, 0.2)" : "none",
          }}
        />
      </div>
    </div>
  )
}
