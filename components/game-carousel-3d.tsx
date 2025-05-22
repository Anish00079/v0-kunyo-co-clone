"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Game {
  id: number
  title: string
  description: string
  price: string
  imageUrl: string
  slug: string
}

export default function GameCarousel3D() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const games: Game[] = [
    {
      id: 1,
      title: "PUBG Mobile",
      description: "Battle royale game with intense multiplayer action. Top up UC for exclusive skins and items.",
      price: "$4.99",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vyHdPZWtddrvIKOKfh71AeOpVCsNMb.png",
      slug: "pubg",
    },
    {
      id: 2,
      title: "Free Fire",
      description: "Fast-paced battle royale optimized for mobile. Get diamonds for premium content.",
      price: "$2.99",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TglJ7e8n8nbqQEryxkT9IbnYBWfdJo.png",
      slug: "free-fire",
    },
    {
      id: 3,
      title: "Mobile Legends",
      description: "5v5 MOBA designed for mobile gaming. Purchase diamonds for heroes and skins.",
      price: "$3.49",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zgEdrqUr44hUF8gihv2u4gbPFzpyBa.png",
      slug: "mobile-legends",
    },
    {
      id: 4,
      title: "Call of Duty Mobile",
      description: "First-person shooter with multiplayer and battle royale modes. Buy CP for battle pass and items.",
      price: "$9.99",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HL6Vx2bzZGR4LdX2XikagLSocERafy.png",
      slug: "call-of-duty",
    },
    {
      id: 5,
      title: "Steam Gift Card",
      description: "Add funds to your Steam Wallet to purchase games, software, hardware, and more.",
      price: "$10.00",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nJYW4qh8iDDLr5aCnbNYOqzRkMUnjg.png",
      slug: "steam-gift-card",
    },
  ]

  const nextSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === games.length - 1 ? 0 : prevIndex + 1))

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 1000)
  }

  const prevSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? games.length - 1 : prevIndex - 1))

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 1000)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return

    setIsTransitioning(true)
    setCurrentIndex(index)

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 1000)
  }

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds
  }

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }

    return () => {
      stopAutoPlay()
    }
  }, [isAutoPlaying])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <div
      className="relative h-[80vh] w-full overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* Game Slides */}
      <div className="absolute inset-0">
        {games.map((game, index) => (
          <div
            key={game.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10 transform-none" : "opacity-0 z-0 scale-105"
            }`}
          >
            {/* Game Image with Overlay */}
            <div className="relative h-full w-full">
              <Image
                src={game.imageUrl || "/placeholder.svg"}
                alt={game.title}
                fill
                className="object-cover"
                priority={index === currentIndex}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
            </div>

            {/* Game Info */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-10">
              <div className="container mx-auto">
                <div className="max-w-2xl">
                  <h2 className="text-orange-400 font-bold mb-2 tracking-wider">FEATURED GAME</h2>
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">{game.title}</h1>
                  <p className="text-xl text-gray-300 mb-8 max-w-xl">{game.description}</p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg">
                      Buy Now - {game.price}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all disabled:opacity-50"
          aria-label="Previous game"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="flex gap-2">
          {games.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`h-2 w-8 rounded-full transition-all ${
                index === currentIndex ? "bg-orange-500" : "bg-white/30 hover:bg-white/50"
              } disabled:opacity-50`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all disabled:opacity-50"
          aria-label="Next game"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Side Navigation Buttons (larger hit area) */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-4 rounded-full backdrop-blur-sm transition-all disabled:opacity-50"
        aria-label="Previous game"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-4 rounded-full backdrop-blur-sm transition-all disabled:opacity-50"
        aria-label="Next game"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  )
}
