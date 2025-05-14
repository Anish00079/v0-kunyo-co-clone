import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TikTokCoinsSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/30 to-purple-900/30 z-0"></div>

      {/* Stars background (static version) */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-10 w-10 mr-4 fill-pink-500">
              <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
            </svg>
            TikTok Coins <span className="text-pink-500 ml-2">→</span>
          </h2>
          <Link href="#" className="text-lg text-gray-300 hover:text-white flex items-center">
            View All <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-1 overflow-hidden">
            <div className="bg-gray-900 rounded-lg p-8 h-full">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-8 md:mb-0 md:mr-8 flex-shrink-0">
                  <div className="relative h-40 w-40 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 p-1">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="h-full w-full p-8 fill-white"
                      >
                        <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4">TikTok Coins Packages</h3>
                  <p className="text-gray-400 mb-6 text-lg">
                    Purchase TikTok coins to support your favorite creators and unlock exclusive content.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="rounded bg-gray-800 p-3 text-center border border-gray-700">
                      <span className="block text-pink-400 font-bold text-xl">70</span>
                      <span className="text-sm text-gray-400">$0.99</span>
                    </div>
                    <div className="rounded bg-gray-800 p-3 text-center border border-gray-700">
                      <span className="block text-pink-400 font-bold text-xl">350</span>
                      <span className="text-sm text-gray-400">$4.99</span>
                    </div>
                    <div className="rounded bg-gray-800 p-3 text-center border border-gray-700">
                      <span className="block text-pink-400 font-bold text-xl">700</span>
                      <span className="text-sm text-gray-400">$9.99</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-full py-6 text-lg">
                    Buy TikTok Coins
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-1 overflow-hidden">
            <div className="bg-gray-900 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Popular TikTok Gifts</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-pink-900/30 flex items-center justify-center mb-3">
                    <span className="text-3xl">🌟</span>
                  </div>
                  <span className="block text-base font-medium">Galaxy</span>
                  <span className="text-sm text-pink-400">1000 coins</span>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-pink-900/30 flex items-center justify-center mb-3">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <span className="block text-base font-medium">Rocket</span>
                  <span className="text-sm text-pink-400">500 coins</span>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-pink-900/30 flex items-center justify-center mb-3">
                    <span className="text-3xl">💖</span>
                  </div>
                  <span className="block text-base font-medium">Hearts</span>
                  <span className="text-sm text-pink-400">200 coins</span>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-pink-900/30 flex items-center justify-center mb-3">
                    <span className="text-3xl">🎁</span>
                  </div>
                  <span className="block text-base font-medium">Gift Box</span>
                  <span className="text-sm text-pink-400">100 coins</span>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-pink-900/30 flex items-center justify-center mb-3">
                    <span className="text-3xl">👑</span>
                  </div>
                  <span className="block text-base font-medium">Crown</span>
                  <span className="text-sm text-pink-400">300 coins</span>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-pink-900/30 flex items-center justify-center mb-3">
                    <span className="text-3xl">🔥</span>
                  </div>
                  <span className="block text-base font-medium">Fire</span>
                  <span className="text-sm text-pink-400">50 coins</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full border-pink-500 text-pink-400 hover:bg-pink-950 hover:text-pink-300 rounded-full py-6 text-lg"
              >
                View All Gifts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
