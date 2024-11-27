'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-pink-50 font-sans">   
      <main className="max-w-6xl mx-auto px-4 space-y-32">
        <section className="text-center space-y-8 py-20">
          <h1 className="text-5xl sm:text-6xl font-light leading-tight text-[#8B3A3D] tracking-tighter">
            Plan and build your budget
          </h1>
          
          <p className="text-xl leading-relaxed max-w-2xl mx-auto text-[#8B3A3D] font-light tracking-tight">
            A user-friendly platform where international students can review, compare, and share insights on expenses, resources, and services for navigating life abroad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <button 
              onClick={() => router.push('/expense-chart')}
              className="w-full py-6 text-lg bg-[#8B3A3D] hover:bg-[#7A2F32] text-white transition-colors font-light tracking-tight rounded"
            >
              CHECK AVERAGE
            </button>
            <button className="w-full py-6 text-lg bg-[#8B3A3D] hover:bg-[#7A2F32] text-white transition-colors font-light tracking-tight rounded">
              RESOURCES
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

