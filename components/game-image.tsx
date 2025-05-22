import Image from "next/image"

interface GameImageProps {
  game: string
  className?: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
}

export default function GameImage({ game, className, width, height, fill = false, priority = false }: GameImageProps) {
  const gameImages: Record<string, string> = {
    "call-of-duty": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HL6Vx2bzZGR4LdX2XikagLSocERafy.png",
    "free-fire": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TglJ7e8n8nbqQEryxkT9IbnYBWfdJo.png",
    pubg: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vyHdPZWtddrvIKOKfh71AeOpVCsNMb.png",
    "mobile-legends":
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zgEdrqUr44hUF8gihv2u4gbPFzpyBa.png",
    "steam-gift-card":
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nJYW4qh8iDDLr5aCnbNYOqzRkMUnjg.png",
    "google-play-gift-card":
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WWOJuBaTYUwqvQjJIPhjjTzsQzb4NV.png",
    "valorant-gift-card":
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bsxwK1Gblxl4Ugoham7siHq3kSfzpT.png",
  }

  const imageUrl = gameImages[game] || "/placeholder.svg"

  if (fill) {
    return (
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={game.replace(/-/g, " ")}
        fill
        className={className || "object-cover"}
        priority={priority}
      />
    )
  }

  return (
    <Image
      src={imageUrl || "/placeholder.svg"}
      alt={game.replace(/-/g, " ")}
      width={width || 300}
      height={height || 300}
      className={className || ""}
      priority={priority}
    />
  )
}
