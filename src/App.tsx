import { useState, useEffect } from 'react'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import { getCurrentRoute } from './utils/routes'
import type { Route } from './utils/routes'

function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>(getCurrentRoute())
  const [isLoading, setIsLoading] = useState(true)
  const [animationsLoaded, setAnimationsLoaded] = useState(false)

  useEffect(() => {
    // Asegurar que todo esté cargado
    const initializeApp = () => {
      setIsLoading(false)
      
      // Pequeño delay para asegurar que el DOM esté completamente listo
      setTimeout(() => {
        setAnimationsLoaded(true)
        initializeAnimations()
      }, 100)
    }

    if (document.readyState === 'complete') {
      initializeApp()
    } else {
      window.addEventListener('load', initializeApp)
      document.addEventListener('DOMContentLoaded', initializeApp)
    }

    return () => {
      window.removeEventListener('load', initializeApp)
      document.removeEventListener('DOMContentLoaded', initializeApp)
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(getCurrentRoute())
      
      // Reinicializar animaciones al cambiar de ruta
      setTimeout(() => {
        initializeAnimations()
      }, 50)
    }

    window.addEventListener('hashchange', handleRouteChange)
    window.addEventListener('popstate', handleRouteChange)
    
    return () => {
      window.removeEventListener('hashchange', handleRouteChange)
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  const initializeAnimations = () => {
    // Limpiar observadores anteriores
    const existingObserver = (window as any).scrollObserver
    if (existingObserver) {
      existingObserver.disconnect()
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('animate-fade-in-up')) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, observerOptions)

    // Observar elementos con un pequeño delay para asegurar que el DOM esté listo
    setTimeout(() => {
      const elementsToAnimate = document.querySelectorAll('.animate-on-scroll')
      elementsToAnimate.forEach((el) => {
        // Resetear animación si ya estaba aplicada
        el.classList.remove('animate-fade-in-up')
        observer.observe(el)
      })
      
      // Guardar referencia del observer
      ;(window as any).scrollObserver = observer
    }, 100)
  }

  // Reinicializar animaciones cuando cambie la ruta
  useEffect(() => {
    if (animationsLoaded) {
      initializeAnimations()
    }
  }, [currentRoute, animationsLoaded])

  const CurrentComponent = currentRoute.component

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-800 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-2">DominiWeb</h2>
          <p className="opacity-80">Cargando experiencia increíble...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards !important;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounceIn 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .animate-on-scroll.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .text-glow {
          text-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .btn-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .8;
            transform: scale(1.05);
          }
        }
        
        .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        
        .typing-animation {
          overflow: hidden;
          border-right: 3px solid rgba(255, 255, 255, 0.75);
          white-space: nowrap;
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: rgba(255, 255, 255, 0.75) }
        }

        /* Preload animations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        body {
          overflow-x: hidden;
        }

        /* Ensure images load properly */
        img {
          max-width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
      <div className="App">
        <Navbar />
        <CurrentComponent />
        <Footer />
      </div>
    </>
  )
}

export default App