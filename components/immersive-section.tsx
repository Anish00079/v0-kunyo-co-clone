import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ImmersiveSectionProps {
  title: string
  subtitle: string
  description: string
  image: string
  buttonText: string
  buttonLink: string
  align?: "left" | "right"
}

export default function ImmersiveSection({
  title,
  subtitle,
  description,
  image,
  buttonText,
  buttonLink,
  align = "left",
}: ImmersiveSectionProps) {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/30" />
      </div>

      <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
        <div className={`max-w-xl ${align === "right" ? "ml-auto text-right" : "mr-auto text-left"}`}>
          <h3 className="text-orange-400 font-bold mb-2 tracking-wider">{subtitle}</h3>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">{title}</h2>
          <p className="text-gray-200 mb-8 text-lg">{description}</p>
          <Link href={buttonLink}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
