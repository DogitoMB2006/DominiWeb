import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (hash: string) => {
    if (hash === 'home') {
      window.location.hash = ''
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.location.hash = hash
      // Small delay to ensure navigation happens first
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    }
    setIsOpen(false)
  }

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
              <h1 className={`text-2xl font-bold transition-all duration-300 ${
                scrolled ? 'text-blue-600' : 'text-blue-600'
              } hover:scale-105`}>
                <span className="gradient-text">Domini</span>
                <span className="text-purple-600">Web</span>
              </h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Inicio
            </button>
            <button 
              onClick={() => handleNavClick('catalogo')} 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Catálogo
            </button>
            <button 
              onClick={() => handleSectionClick('servicios')} 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Servicios
            </button>
            <button 
              onClick={() => handleSectionClick('contacto')} 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contacto
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl btn-pulse">
              Solicitar Cotización
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-all duration-300 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
              } focus:outline-none hover:bg-gray-100`}
            >
              <svg className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
          <button 
            onClick={() => handleNavClick('home')} 
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 hover:bg-blue-50 hover:translate-x-2"
          >
            Inicio
          </button>
          <button 
            onClick={() => handleNavClick('catalogo')} 
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 hover:bg-blue-50 hover:translate-x-2"
          >
            Catálogo
          </button>
          <button 
            onClick={() => handleSectionClick('servicios')} 
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 hover:bg-blue-50 hover:translate-x-2"
          >
            Servicios
          </button>
          <button 
            onClick={() => handleSectionClick('contacto')} 
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 hover:bg-blue-50 hover:translate-x-2"
          >
            Contacto
          </button>
          <button className="w-full text-left bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
            Solicitar Cotización
          </button>
        </div>
      </div>
    </nav>
  )
}