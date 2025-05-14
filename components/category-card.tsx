import type { ReactNode } from "react"
import Link from "next/link"

interface CategoryCardProps {
  icon: ReactNode
  title: string
  count: number
}

export default function CategoryCard({ icon, title, count }: CategoryCardProps) {
  return (
    <Link href="#" className="group">
      <div className="flex flex-col items-center rounded-lg bg-gray-800/50 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:bg-gray-700/50 border border-gray-700/50">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-purple-500/20 text-orange-400 group-hover:from-orange-500/30 group-hover:to-purple-500/30 group-hover:text-orange-300">
          {icon}
        </div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="mt-1 text-xs text-gray-400">{count} items</p>
      </div>
    </Link>
  )
}
