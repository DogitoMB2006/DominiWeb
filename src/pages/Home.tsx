import { useEffect, useState } from 'react'
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  TrendingUp, 
  Monitor, 
  Wrench,
  DollarSign,
  Star,
  Clock,
  Earth,
  Rocket,
  Users,
  Shield,
  Award,
  Mail,
  Phone,
  MapPin,
  Target,
  CheckCircle,
  MessageCircle,
  Zap
} from 'lucide-react'
import Card from '../components/ui/Card'

export default function Home() {
  const [typedText, setTypedText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isComponentLoaded, setIsComponentLoaded] = useState(false)
  
  const words = ['Profesional', 'Moderna', 'Responsiva', 'Optimizada', 'Exitosa']
  const fullText = 'Página Web'

  // Asegurar que el componente esté completamente cargado
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComponentLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isComponentLoaded) return

    const currentWord = words[currentWordIndex]
    
    const typeSpeed = isDeleting ? 80 : 120
    const pauseTime = isDeleting ? 500 : 2500
    
    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      } else {
        const nextText = isDeleting 
          ? currentWord.slice(0, typedText.length - 1)
          : currentWord.slice(0, typedText.length + 1)
        setTypedText(nextText)
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentWordIndex, words, isComponentLoaded])

  // Precargar imágenes
  useEffect(() => {
    const imagesToPreload = [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop'
    ]

    imagesToPreload.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [])

  const services = [
    {
      title: "Páginas Web Profesionales",
      description: "Diseñamos y desarrollamos sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.",
      icon: "globe"
    },
    {
      title: "E-commerce",
      description: "Tiendas online completas con pasarelas de pago, gestión de inventario y panel administrativo.",
      icon: "shopping-cart"
    },
    {
      title: "Landing Pages",
      description: "Páginas de aterrizaje optimizadas para campañas publicitarias y generación de leads.",
      icon: "smartphone"
    },
    {
      title: "SEO Optimizado",
      description: "Posicionamiento web para aparecer en los primeros resultados de Google y aumentar tu visibilidad.",
      icon: "trending-up"
    },
    {
      title: "Diseño Responsivo",
      description: "Sitios web que se adaptan perfectamente a cualquier dispositivo: móvil, tablet y desktop.",
      icon: "monitor"
    },
    {
      title: "Soporte 24/7",
      description: "Mantenimiento continuo, actualizaciones de seguridad y soporte técnico especializado.",
      icon: "wrench"
    }
  ]

  const benefits = [
    {
      title: "Aumenta tus Ventas",
      description: "Una página web profesional puede incrementar tus ventas hasta un 300% al llegar a más clientes potenciales.",
      icon: "dollar-sign"
    },
    {
      title: "Credibilidad Profesional",
      description: "El 93% de los consumidores confían más en empresas con presencia web profesional y moderna.",
      icon: "star"
    },
    {
      title: "Disponible 24/7",
      description: "Tu negocio estará abierto las 24 horas del día, los 365 días del año para tus clientes.",
      icon: "clock"
    },
    {
      title: "Alcance Global",
      description: "Expande tu mercado más allá de las fronteras locales y llega a clientes en todo el mundo.",
      icon: "earth"
    }
  ]

  const stats = [
    { number: "100%", label: "Proyectos Exitosos", icon: "rocket" },
    { number: "24H", label: "Tiempo de Respuesta", icon: "users" },
    { number: "24/7", label: "Soporte Técnico", icon: "shield" },
    { number: "5⭐", label: "Calidad Garantizada", icon: "award" }
  ]

  const getIcon = (iconName: string, className: string = "w-12 h-12") => {
    const iconMap: { [key: string]: React.ReactElement } = {
      "globe": <Globe className={`${className} text-blue-600`} />,
      "shopping-cart": <ShoppingCart className={`${className} text-green-600`} />,
      "smartphone": <Smartphone className={`${className} text-purple-600`} />,
      "trending-up": <TrendingUp className={`${className} text-orange-600`} />,
      "monitor": <Monitor className={`${className} text-cyan-600`} />,
      "wrench": <Wrench className={`${className} text-red-600`} />,
      "dollar-sign": <DollarSign className={`${className} text-green-600`} />,
      "star": <Star className={`${className} text-yellow-600`} />,
      "clock": <Clock className={`${className} text-blue-600`} />,
      "earth": <Earth className={`${className} text-indigo-600`} />,
      "rocket": <Rocket className={`${className} text-blue-600`} />,
      "users": <Users className={`${className} text-green-600`} />,
      "shield": <Shield className={`${className} text-purple-600`} />,
      "award": <Award className={`${className} text-yellow-600`} />
    }
    return iconMap[iconName] || <Globe className={`${className} text-gray-600`} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-32 mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Transforma tu Negocio con una
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 text-glow">
                {fullText} <span className="text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-extrabold">{typedText}</span><span className="text-white animate-pulse text-4xl md:text-6xl">|</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 animate-slide-in-left">
              Creamos sitios web modernos, responsivos y optimizados que convierten visitantes en clientes.
              Impulsa tu presencia digital con tecnología de vanguardia.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-right">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 btn-pulse flex items-center justify-center">
                <Rocket className="w-6 h-6 mr-2" />
                Solicitar Cotización Gratis
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-110 backdrop-blur-sm bg-white/10 flex items-center justify-center">
                <Globe className="w-6 h-6 mr-2" />
                Ver Nuestros Trabajos
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#f9fafb"></path>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(stat.icon, "w-8 h-8")}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ¿Por qué tu Negocio Necesita una 
              <span className="gradient-text block">Página Web?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En la era digital, una presencia online sólida es esencial para el éxito de cualquier negocio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="animate-on-scroll" style={{animationDelay: `${index * 0.2}s`}}>
                <Card
                  title={benefit.title}
                  description={benefit.description}
                  className="text-center card-hover border-0 bg-white/80 backdrop-blur-sm"
                >
                  <div className="flex justify-center mb-4">
                    {getIcon(benefit.icon)}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nuestros <span className="gradient-text">Servicios</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones completas para llevar tu negocio al siguiente nivel digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-on-scroll" style={{animationDelay: `${index * 0.15}s`}}>
                <Card
                  title={service.title}
                  description={service.description}
                  className="card-hover border-0 bg-white shadow-xl"
                >
                  <div className="flex justify-center mb-4">
                    {getIcon(service.icon)}
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Más Información
                  </button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-400/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para Hacer <span className="text-yellow-300">Crecer</span> tu Negocio?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Obtén una cotización gratuita y descubre cómo podemos ayudarte a destacar en línea
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 mr-2" />
              Cotización Gratuita
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-110 backdrop-blur-sm bg-white/10 flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              +1 (829) 993-3257
            </button>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="gradient-text">Contáctanos</span>
            </h2>
            <p className="text-xl text-gray-600">
              Estamos aquí para ayudarte a hacer realidad tu proyecto web
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600 text-lg">info@dominiweb.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 group">
                  <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Teléfono</h3>
                    <p className="text-gray-600 text-lg">+1 (829) 993- 3257</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 group">
                  <div className="bg-gradient-to-r from-red-500 to-pink-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Ubicación</h3>
                    <p className="text-gray-600 text-lg">Santo Domingo, República Dominicana</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-600" />
                    ¿Por qué elegirnos?
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Tecnologías modernas y actualizadas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Diseños únicos y personalizados</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Soporte técnico especializado</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Precios competitivos y transparentes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 card-hover">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 mr-2 text-blue-600" />
                  Envíanos un Mensaje
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Nombre *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" 
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" 
                        placeholder="(829) 993-3257"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300" 
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Proyecto</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                      <option>Selecciona una opción</option>
                      <option>Página Web Corporativa</option>
                      <option>E-commerce</option>
                      <option>Landing Page</option>
                      <option>Aplicación Web</option>
                      <option>Rediseño Web</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje *</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none" 
                      placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle importante..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Enviar Mensaje
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    * Responderemos en menos de 24 horas
                  </p>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center animate-on-scroll">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <Zap className="w-6 h-6 mr-2" />
                Oferta Especial
              </h3>
              <p className="text-xl mb-4">
                ¡Cotización GRATIS + 50% de descuento en tu primer proyecto!
              </p>
              <p className="opacity-90 mb-6">
                Solo por tiempo limitado. No pierdas esta oportunidad de transformar tu negocio.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto">
                <DollarSign className="w-5 h-5 mr-2" />
                ¡Quiero mi Descuento!
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}