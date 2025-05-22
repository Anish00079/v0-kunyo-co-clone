"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductImage {
  id: number
  url: string
  alt: string
}

export default function AmazonStyleShowcase() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const productImages: ProductImage[] = [
    {
      id: 1,
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vyHdPZWtddrvIKOKfh71AeOpVCsNMb.png",
      alt: "PUBG Mobile UC - Front view",
    },
    {
      id: 2,
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TglJ7e8n8nbqQEryxkT9IbnYBWfdJo.png",
      alt: "Free Fire Diamonds - Front view",
    },
    {
      id: 3,
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zgEdrqUr44hUF8gihv2u4gbPFzpyBa.png",
      alt: "Mobile Legends - Front view",
    },
    {
      id: 4,
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HL6Vx2bzZGR4LdX2XikagLSocERafy.png",
      alt: "Call of Duty Mobile - Front view",
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev === productImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? productImages.length - 1 : prev - 1))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Featured Product <span className="text-orange-500">→</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-800">
              <div className="absolute inset-0 flex items-center justify-center">
                {productImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.url || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === currentImage}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows - Only visible on hover */}
              <div
                className={`absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-4 transition-opacity duration-300 ${
                  isHovering ? "opacity-100" : "opacity-0"
                }`}
              >
                <button
                  onClick={prevImage}
                  className="rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-transform hover:bg-black/70 hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-transform hover:bg-black/70 hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-green-500 text-white px-2 py-1 text-sm">33% OFF</Badge>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-4 flex justify-center gap-2">
              {productImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentImage(index)}
                  className={`relative h-16 w-16 overflow-hidden rounded-md border-2 transition-all ${
                    index === currentImage
                      ? "border-orange-500 scale-110"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View ${image.alt}`}
                >
                  <Image src={image.url || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-white mb-2">PUBG Mobile UC - Instant Delivery</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              </div>
              <span className="ml-2 text-gray-300">4.9 (1,245 reviews)</span>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-white">$19.99</span>
                <span className="text-xl text-gray-400 line-through">$29.99</span>
                <Badge className="bg-green-500 text-white">Save $10.00</Badge>
              </div>
              <p className="text-green-400 mt-1">In Stock - Instant Digital Delivery</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">About this item</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Instant delivery to your PUBG Mobile account
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Use UC to purchase the Royale Pass, crates, and exclusive items
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Secure payment methods with 24/7 customer support
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Compatible with all devices: iOS, Android, and emulators
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  No account information required, just your Player ID
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-lg bg-gray-800 p-4">
                <h4 className="font-semibold mb-2">60 UC</h4>
                <p className="text-orange-500 font-bold">$0.99</p>
              </div>
              <div className="rounded-lg bg-gray-800 p-4">
                <h4 className="font-semibold mb-2">300 UC</h4>
                <p className="text-orange-500 font-bold">$4.99</p>
              </div>
              <div className="rounded-lg bg-gray-800 p-4">
                <h4 className="font-semibold mb-2">600 UC</h4>
                <p className="text-orange-500 font-bold">$9.99</p>
              </div>
              <div className="rounded-lg bg-gray-800 border-2 border-orange-500 p-4">
                <h4 className="font-semibold mb-2">1500 UC</h4>
                <p className="text-orange-500 font-bold">$19.99</p>
                <Badge className="bg-orange-500 text-white mt-1">Best Value</Badge>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-full text-lg flex-1">
                Buy Now
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-white/10 py-6 rounded-full text-lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-600 text-white hover:bg-white/10 rounded-full h-14 w-14"
              >
                <Heart className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
