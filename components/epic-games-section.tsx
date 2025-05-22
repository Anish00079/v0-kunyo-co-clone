import { ChevronRight } from "lucide-react"
import Link from "next/link"
import EpicGameCard from "./epic-game-card"

export default function EpicGamesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Epic Deals <span className="text-orange-500">→</span>
          </h2>
          <Link href="#" className="text-sm text-gray-300 hover:text-white flex items-center">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {/* Featured Game (2x2) */}
          <div className="col-span-1 md:col-span-2 row-span-2 h-full">
            <EpicGameCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vyHdPZWtddrvIKOKfh71AeOpVCsNMb.png"
              title="PUBG Mobile - Season Pass"
              price="$19.99"
              originalPrice="$29.99"
              discount={33}
              rating={4.9}
              reviews={1245}
              isFeatured={true}
            />
          </div>

          {/* Regular Games */}
          <div className="h-full">
            <EpicGameCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TglJ7e8n8nbqQEryxkT9IbnYBWfdJo.png"
              title="Free Fire Diamonds"
              price="$9.99"
              rating={4.7}
              reviews={876}
            />
          </div>
          <div className="h-full">
            <EpicGameCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zgEdrqUr44hUF8gihv2u4gbPFzpyBa.png"
              title="Mobile Legends"
              price="$4.99"
              rating={4.6}
              reviews={542}
              isNew={true}
            />
          </div>
          <div className="h-full">
            <EpicGameCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HL6Vx2bzZGR4LdX2XikagLSocERafy.png"
              title="Call of Duty Mobile"
              price="$14.99"
              originalPrice="$19.99"
              discount={25}
              rating={4.8}
              reviews={932}
            />
          </div>
          <div className="h-full">
            <EpicGameCard
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nJYW4qh8iDDLr5aCnbNYOqzRkMUnjg.png"
              title="Steam Gift Card"
              price="$25.00"
              rating={4.9}
              reviews={1532}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
