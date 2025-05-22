"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideContent {
  id: number
  imageUrl: string
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
}

export default function FullScreenSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const slides: SlideContent[] = [
    {
      id: 1,
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vyHdPZWtddrvIKOKfh71AeOpVCsNMb.png",
      title: "PUBG MOBILE",
      subtitle: "Battle Royale at its finest. Top up your UC now!",
      buttonText: "Get UC",
      buttonLink: "#",
    },
    {
      id: 2,
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TglJ7e8n8nbqQEryxkT9IbnYBWfdJo.png",
      title: "FREE FIRE",
      subtitle: "Fast-paced survival shooter. Get diamonds today!",
      buttonText: "Buy Diamonds",
      buttonLink: "#",
    },
    {
      id: 3,
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zgEdrqUr44hUF8gihv2u4gbPFzpyBa.png",
      title: "MOBILE LEGENDS",
      subtitle: "5v5 MOBA action. Power up with diamonds!",
      buttonText: "Get Diamonds",
      buttonLink: "#",
    },
    {
      id: 4,
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HL6Vx2bzZGR4LdX2XikagLSocERafy.png",
      title: "CALL OF DUTY MOBILE",
      subtitle: "First-person shooter action. Buy CP now!",
      buttonText: "Get CP",
      buttonLink: "#",
    },
  ]

  const nextSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 1000)
  }

  const prevSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 1000)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return

    setIsTransitioning(true)
    setCurrentSlide(index)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 1000)
  }

  // Auto-play functionality
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide()
    }, 6000) // Change slide every 6 seconds

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [currentSlide])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.imageUrl || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === currentSlide}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h2 className="text-orange-400 font-bold mb-4 tracking-wider text-xl">FEATURED GAME</h2>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">{slide.title}</h1>
                <p className="text-xl text-gray-300 mb-8">{slide.subtitle}</p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg">
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`h-3 w-12 rounded-full transition-all ${
              index === currentSlide ? "bg-orange-500" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  )
}
