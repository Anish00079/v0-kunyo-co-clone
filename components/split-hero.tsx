"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SplitHero() {
  const [hoverLeft, setHoverLeft] = useState(false)
  const [hoverRight, setHoverRight] = useState(false)

  return (
    <div className="relative h-screen w-full flex overflow-hidden">
      {/* Left Panel - Mobile Games */}
      <div
        className={`relative w-1/2 transition-all duration-700 ease-in-out ${
          hoverLeft ? "w-3/5" : hoverRight ? "w-2/5" : "w-1/2"
        }`}
        onMouseEnter={() => setHoverLeft(true)}
        onMouseLeave={() => setHoverLeft(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-purple-900/70 z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zgEdrqUr44hUF8gihv2u4gbPFzpyBa.png"
          alt="Mobile Games"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8">
          <div className="text-center">
            <h2 className="text-orange-400 font-bold mb-4 tracking-wider">EXPLORE</h2>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
              <span className="inline-block text-stroke-white text-transparent">MOBILE</span>
              <br />
              <span className="inline-block">GAMES</span>
            </h1>
            <Link href="#mobile-games">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg">
                Discover
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Panel - Gift Cards */}
      <div
        className={`relative w-1/2 transition-all duration-700 ease-in-out ${
          hoverRight ? "w-3/5" : hoverLeft ? "w-2/5" : "w-1/2"
        }`}
        onMouseEnter={() => setHoverRight(true)}
        onMouseLeave={() => setHoverRight(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-blue-900/70 z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nJYW4qh8iDDLr5aCnbNYOqzRkMUnjg.png"
          alt="Gift Cards"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8">
          <div className="text-center">
            <h2 className="text-orange-400 font-bold mb-4 tracking-wider">DISCOVER</h2>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
              <span className="inline-block">GIFT</span>
              <br />
              <span className="inline-block text-stroke-white text-transparent">CARDS</span>
            </h1>
            <Link href="#gift-cards">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg">
                Explore
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Center Logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md rounded-full p-4">
        <div className="bg-white rounded-full p-4 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-12 w-12 text-purple-600"
          >
            <path d="M17 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
            <path d="m9 14 2 2 4-4" />
          </svg>
        </div>
      </div>
    </div>
  )
}
