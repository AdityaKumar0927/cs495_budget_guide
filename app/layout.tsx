import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Budget Guide',
  description: 'Plan and build your budget for studying at IIT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-pink-50`}>
        <Header/>
        <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">
          {children}
        </main>
        <footer className="bg-[#8B3A3D] text-white py-8">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-light tracking-tight mb-4 md:mb-0">BUDGET GUIDE</div>
            <nav>
              <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8">
                <li><a href="#" className="hover:text-pink-200 transition-colors font-light tracking-tight">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-pink-200 transition-colors font-light tracking-tight">Terms of Service</a></li>
                <li><a href="#" className="hover:text-pink-200 transition-colors font-light tracking-tight">Contact Us</a></li>
              </ul>
            </nav>
          </div>
          <div className="text-center mt-8 text-pink-200 font-light tracking-tight">
            © 2024 Budget Guide. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
