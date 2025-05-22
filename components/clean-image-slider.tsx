"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface SliderImage {
  id: number
  url: string
  alt: string
}

export default function CleanImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const images: SliderImage[] = [
    {
      id: 1,
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vyHdPZWtddrvIKOKfh71AeOpVCsNMb.png",
      alt: "PUBG Mobile",
    },
    {
      id: 2,
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TglJ7e8n8nbqQEryxkT9IbnYBWfdJo.png",
      alt: "Free Fire",
    },
    {
      id: 3,
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zgEdrqUr44hUF8gihv2u4gbPFzpyBa.png",
      alt: "Mobile Legends",
    },
    {
      id: 4,
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HL6Vx2bzZGR4LdX2XikagLSocERafy.png",
      alt: "Call of Duty Mobile",
    },
    {
      id: 5,
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nJYW4qh8iDDLr5aCnbNYOqzRkMUnjg.png",
      alt: "Steam Gift Card",
    },
  ]

  const nextSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 800)
  }

  const prevSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 800)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return

    setIsTransitioning(true)
    setCurrentIndex(index)

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 800)
  }

  // Auto-play functionality
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide()
    }, 4000) // Change slide every 4 seconds

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [currentIndex])

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gray-900">
      {/* Main Image Slider */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === currentIndex}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex ? "bg-orange-500 scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
