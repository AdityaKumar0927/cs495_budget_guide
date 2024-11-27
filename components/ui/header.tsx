'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Check Average', href: '/expense-chart' },
    { name: 'Resources', href: '/resources' },
    { name: 'About Us', href: '/about' },
  ]

  return (
    <header className="fixed w-full bg-white shadow-md z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-light tracking-tight text-[#8B3A3D]">
          BUDGET GUIDE
        </div>
        <button onClick={toggleMenu} className="lg:hidden text-[#8B3A3D]">
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-[#8B3A3D] hover:text-[#7A2F32] transition-colors font-light tracking-tight ${
                pathname === item.href ? 'font-medium' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      {isMenuOpen && (
        <nav className="lg:hidden bg-white px-4 py-2 shadow-md">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block py-2 text-[#8B3A3D] hover:text-[#7A2F32] transition-colors font-light tracking-tight ${
                    pathname === item.href ? 'font-medium' : ''
                  }`}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

