"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import UniverseLogo from "./universe-logo"

export default function UniverseHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Explore the Gaming Universe",
      subtitle: "Discover limitless possibilities with our cosmic collection",
      image: "/placeholder.svg?height=600&width=1200",
      alt: "Space themed gaming",
    },
    {
      id: 2,
      title: "Stellar Deals on Game Top-ups",
      subtitle: "Power up your gameplay with our exclusive offers",
      image: "/placeholder.svg?height=600&width=1200",
      alt: "Game top-ups promotion",
    },
    {
      id: 3,
      title: "Limited Edition Cosmic Items",
      subtitle: "Rare collectibles from across the gaming universe",
      image: "/placeholder.svg?height=600&width=1200",
      alt: "Limited edition items",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
      {/* Stars background (static version) */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 200 }).map((_, i) => (
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

      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-purple-950/60 to-indigo-950/80 z-10"
        aria-hidden="true"
      />

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container px-4 text-center">
          <UniverseLogo className="mx-auto mb-6" />
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {slides[currentSlide].title}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">{slides[currentSlide].subtitle}</p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button className="min-w-[150px] bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Explore Now
            </Button>
            <Button variant="outline" className="min-w-[150px] border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/30"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
