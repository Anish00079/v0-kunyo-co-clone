import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import GameCard from "@/components/game-card"
import HeroSlider from "@/components/hero-slider"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=150"
              alt="GameZone Logo"
              width={150}
              height={40}
              className="mr-2"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium hover:text-purple-400 transition-colors">
              FreeFire Top UP
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-purple-400 transition-colors">
              TikTok Coins
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-purple-400 transition-colors">
              Gift Card
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-purple-400 transition-colors">
              Mobile Games Top Up
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-purple-400 transition-colors">
              Subscription
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-purple-400 transition-colors">
              Gaming Gears
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Search className="h-5 w-5" />
            </button>
            <Button className="bg-red-600 hover:bg-red-700">Login</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <HeroSlider />
      </section>

      {/* Top Ups Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">
            Top Ups <span className="text-red-500">→</span>
          </h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 text-gray-400 hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 text-gray-400 hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <GameCard image="/placeholder.svg?height=200&width=200" title="Clash Royale" />
          <GameCard image="/placeholder.svg?height=200&width=200" title="Clash Of Clans" />
          <GameCard image="/placeholder.svg?height=200&width=200" title="PUBG Mobile Lite BattleCoins" />
          <GameCard image="/placeholder.svg?height=200&width=200" title="Pubg UC Mobile (No KR Version)" />
          <GameCard image="/placeholder.svg?height=200&width=200" title="Call of Duty Mobile (Activision)" />
        </div>
      </section>

      {/* Gift Cards Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">
            Gift Cards <span className="text-red-500">→</span>
          </h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 text-gray-400 hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 text-gray-400 hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <GameCard image="/placeholder.svg?height=200&width=200" title="Steam Gift Card" />
          <GameCard image="/placeholder.svg?height=200&width=200" title="Google Play Gift Card" />
          <GameCard image="/placeholder.svg?height=200&width=200" title="PlayStation Store" />
          <GameCard image="/placeholder.svg?height=200&width=200" title="Xbox Gift Card" />
          <GameCard image="/placeholder.svg?height=200&width=200" title="Nintendo eShop" />
        </div>
      </section>
    </main>
  )
}
