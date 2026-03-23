import React, { useState } from 'react'
import BtnHero1 from '../assets/ui/btn-hero-1'
import BtnHero2 from '../assets/ui/btn-hero-2'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = ['Home', 'About', 'Products', 'Services', 'FAQ']
  const sections =[
    {id: "home", label: "Home"},
    {id: "about", label: "About"},
    {id: "products", label: "Products"},
    {id: "services", label: "Services"},
    {id: "faq", label: "FAQ"}
  ]

  return (
    <nav className="w-full h-auto md:h-[80px] flex items-center justify-between px-4 md:px-6 py-4 md:py-0 bg-white/80 fixed  z-50">
      <div className="text-lg md:text-2xl font-extrabold bg-gradient-to-t from-yellow-500 to-gray-500 text-transparent bg-clip-text">UNTITLED</div>
      

      <div className="hidden md:flex absolute justify-center items-center right-1/2 left-1/2 transform translate-x-1/2 gap-5
      hover:">
        {sections.map((item) => (
        <a key={item.id} href={`#${item.id}`} className="text-gray-700 hover:text-green-900 px-3 py-2 text-sm lg:text-base transition-colors">
          {item.label}
        </a>
        ))}
      </div>

      
      <div className="hidden md:flex gap-4">
        <BtnHero2/>
        <BtnHero1/>
      </div>

    
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1 justify-center items-center"
      >
        <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

    
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="flex flex-col p-4 gap-2">
            {sections.map((item) => (
              <a
                key={item.id} 
                href={`#${item.id}`} 
                className="text-gray-700 hover:text-green-900 px-4 py-2 text-sm transition-colors border-b border-gray-100 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 mt-2 pt-2 border-t border-gray-100">
              <BtnHero2/>
              <BtnHero1/>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

