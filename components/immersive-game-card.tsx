import Link from "next/link"
import { Star } from "lucide-react"
import GameImage from "./game-image"

interface ImmersiveGameCardProps {
  image: string
  gameSlug?: string
  title: string
  price: string
  rating?: number
  reviews?: number
  isNew?: boolean
}

export default function ImmersiveGameCard({
  image,
  gameSlug,
  title,
  price,
  rating = 4.5,
  reviews = 128,
  isNew = false,
}: ImmersiveGameCardProps) {
  return (
    <Link href="#" className="group block">
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="relative aspect-square overflow-hidden">
          {gameSlug ? <GameImage game={gameSlug} fill /> : <GameImage game="pubg" fill />}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />

          {isNew && (
            <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              NEW
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{title}</h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span className="ml-1 text-sm text-gray-300">{rating}</span>
              </div>
              <span className="mx-2 text-xs text-gray-500">|</span>
              <span className="text-xs text-gray-400">{reviews} reviews</span>
            </div>
            <span className="font-bold text-white">{price}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
