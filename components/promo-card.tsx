import { Button } from "@/components/ui/button"

interface PromoCardProps {
  title: string
  description: string
  buttonText: string
  bgColor: string
}

export default function PromoCard({ title, description, buttonText, bgColor }: PromoCardProps) {
  return (
    <div className={`rounded-lg bg-gradient-to-r ${bgColor} p-8 shadow-lg border border-white/10`}>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="mt-2 text-lg text-gray-200 mb-6">{description}</p>
      <Button className="bg-white text-gray-900 hover:bg-gray-200 rounded-full px-6 py-5 text-lg">{buttonText}</Button>
    </div>
  )
}
