import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Truck } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Trust badges */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-center justify-center rounded-lg bg-gray-800 p-4 md:justify-start">
            <CreditCard className="mr-4 h-8 w-8 text-purple-400" />
            <div>
              <h4 className="font-medium">Secure Payment</h4>
              <p className="text-sm text-gray-400">100% secure payment</p>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg bg-gray-800 p-4 md:justify-start">
            <Shield className="mr-4 h-8 w-8 text-purple-400" />
            <div>
              <h4 className="font-medium">Trusted Platform</h4>
              <p className="text-sm text-gray-400">100% authentic products</p>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg bg-gray-800 p-4 md:justify-start">
            <Truck className="mr-4 h-8 w-8 text-purple-400" />
            <div>
              <h4 className="font-medium">Instant Delivery</h4>
              <p className="text-sm text-gray-400">Receive code instantly</p>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">About GameZone</h3>
            <p className="mb-4 text-sm text-gray-400">
              GameZone is your one-stop shop for game top-ups, gift cards, and digital goods. We offer the best prices
              and instant delivery.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-gray-400">123 Gaming Street, Digital City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-400" />
                <span className="text-gray-400">support@gamezone.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="mb-2 text-sm font-medium">Payment Methods</h4>
              <div className="flex space-x-2">
                <div className="h-8 w-12 rounded bg-white p-1">
                  <Image src="/placeholder.svg?height=30&width=40" alt="Visa" width={40} height={30} />
                </div>
                <div className="h-8 w-12 rounded bg-white p-1">
                  <Image src="/placeholder.svg?height=30&width=40" alt="Mastercard" width={40} height={30} />
                </div>
                <div className="h-8 w-12 rounded bg-white p-1">
                  <Image src="/placeholder.svg?height=30&width=40" alt="PayPal" width={40} height={30} />
                </div>
                <div className="h-8 w-12 rounded bg-white p-1">
                  <Image src="/placeholder.svg?height=30&width=40" alt="Apple Pay" width={40} height={30} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-gray-500 md:mb-0">
              &copy; {new Date().getFullYear()} GameZone. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <Link href="#" className="hover:text-gray-400">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gray-400">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-gray-400">
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
