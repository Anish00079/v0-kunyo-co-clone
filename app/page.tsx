import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingCart, User, Menu, ChevronRight, Gift, Zap, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import CategoryCard from "@/components/category-card"
import Footer from "@/components/footer"
import SpaceBackground from "@/components/space-background"
import TikTokCoinsSection from "@/components/tiktok-coins-section"
import EpicGamesSection from "@/components/epic-games-section"
import AmazonStyleShowcase from "@/components/amazon-style-showcase"
import FullScreenSlider from "@/components/full-screen-slider"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Space Background */}
      <SpaceBackground />

      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <button className="mr-4 block md:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=150"
                alt="GameZone Logo"
                width={150}
                height={40}
                className="mr-2"
              />
            </Link>
          </div>

          <div className="hidden md:flex relative mx-4 flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search for games, gift cards, and more..."
              className="w-full rounded-lg border border-gray-700 bg-gray-800 py-2 pl-4 pr-10 text-sm focus:border-purple-500 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
              <Search className="h-4 w-4" />
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">
              FreeFire Top UP
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">
              TikTok Coins
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">
              Gift Card
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">
              Mobile Games
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">
              Subscription
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="relative text-gray-300 hover:text-white">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -right-2 -top-2 h-4 w-4 p-0 flex items-center justify-center bg-orange-600 text-[10px]">
                3
              </Badge>
            </button>
            <button className="text-gray-300 hover:text-white md:hidden">
              <Search className="h-5 w-5" />
            </button>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <User className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Full Screen Slider */}
      <FullScreenSlider />

      {/* Epic Games Style Section */}
      <EpicGamesSection />

      {/* Amazon Style Showcase */}
      <AmazonStyleShowcase />

      {/* Categories Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Categories <span className="text-orange-500">→</span>
          </h2>
          <Link href="#" className="text-sm text-gray-300 hover:text-white flex items-center">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <CategoryCard icon={<Gift className="h-8 w-8" />} title="Gift Cards" count={24} />
          <CategoryCard icon={<Zap className="h-8 w-8" />} title="Game Top-ups" count={42} />
          <CategoryCard icon={<Award className="h-8 w-8" />} title="Game Points" count={18} />
          <CategoryCard icon={<Clock className="h-8 w-8" />} title="Subscriptions" count={15} />
          <CategoryCard icon={<ShoppingCart className="h-8 w-8" />} title="Gaming Gear" count={36} />
          <CategoryCard icon={<User className="h-8 w-8" />} title="Accounts" count={9} />
        </div>
      </section>

      {/* TikTok Coins Section */}
      <TikTokCoinsSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
