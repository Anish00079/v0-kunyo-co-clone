export default function UniverseLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="relative h-12 w-12 rounded-full border-2 border-white flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
          <path d="M50 10L90 30V70L50 90L10 70V30L50 10Z" stroke="white" strokeWidth="2" fill="none" />
          <path
            d="M50 10L10 70M50 10L90 70M10 30L90 30M10 70L90 70M50 10L50 90M10 30L50 90M90 30L50 90"
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
        </svg>
      </div>
    </div>
  )
}
