import Image from "next/image"
import Link from "next/link"

interface GameCardProps {
  image: string
  title: string
}

export default function GameCard({ image, title }: GameCardProps) {
  return (
    <Link href="#" className="group">
      <div className="overflow-hidden rounded-lg bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-3 text-center">
          <h3 className="text-sm font-medium line-clamp-2">{title}</h3>
        </div>
      </div>
    </Link>
  )
}
