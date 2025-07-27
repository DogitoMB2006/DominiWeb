import { useState, useEffect } from 'react'
import { 
  Globe, 
  ShoppingCart, 
  UtensilsCrossed, 
  Building2, 
  Dumbbell, 
  Plane, 
  GraduationCap, 
  Eye,
  FileText,
  Zap,
  Phone,
  Target,
  CheckCircle,
  Clock,
  TrendingUp,
  Palette,
  Code,
  Wrench
} from 'lucide-react'
import Card from '../components/ui/Card'

export default function Catalogo() {
  const [activeFilter, setActiveFilter] = useState('todos')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const imageUrls = [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop'
    ]

    let loadedCount = 0
    const totalImages = imageUrls.length

    const handleImageLoad = () => {
      loadedCount++
      if (loadedCount === totalImages) {
        setTimeout(() => setIsVisible(true), 100)
      }
    }

    imageUrls.forEach(url => {
      const img = new Image()
      img.onload = handleImageLoad
      img.onerror = handleImageLoad
      img.src = url
    })

    const fallbackTimer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(fallbackTimer)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Restaurante La Cocina",
      description: "Sitio web moderno para restaurante con menú digital, reservas online y galería de platos.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      category: "restaurante",
      technologies: ["React", "Node.js", "MongoDB"],
      features: ["Responsive", "E-commerce", "SEO"],
      price: "$1,200",
      duration: "2-3 semanas"
    },
    {
      id: 2,
      title: "Tienda Fashion Style",
      description: "E-commerce completo para tienda de ropa con carrito de compras y pasarela de pagos.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      category: "ecommerce",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      features: ["E-commerce", "Responsive", "Admin Panel"],
      price: "$2,500",
      duration: "3-4 semanas"
    },
    {
      id: 3,
      title: "Clínica Dental Sonrisa",
      description: "Portal web profesional para clínica dental con sistema de citas y información de servicios.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      category: "salud",
      technologies: ["WordPress", "PHP", "MySQL"],
      features: ["Responsive", "Booking System", "SEO"],
      price: "$1,800",
      duration: "2-3 semanas"
    },
    {
      id: 4,
      title: "Bufete Legal Justicia",
      description: "Sitio web corporativo para bufete de abogados con blog y formularios de contacto.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=300&fit=crop",
      category: "corporativo",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      features: ["Responsive", "Blog", "Contact Forms"],
      price: "$1,500",
      duration: "2 semanas"
    },
    {
      id: 5,
      title: "Gym Fitness Pro",
      description: "Plataforma web para gimnasio con planes de membresía, horarios de clases y perfil de entrenadores.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      category: "fitness",
      technologies: ["React", "Firebase", "Stripe"],
      features: ["Responsive", "Membership", "Booking"],
      price: "$2,200",
      duration: "3-4 semanas"
    },
    {
      id: 6,
      title: "Agencia de Viajes Aventura",
      description: "Portal de turismo con paquetes de viajes, galería de destinos y sistema de reservas.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      category: "turismo",
      technologies: ["Next.js", "Sanity", "PayPal"],
      features: ["Responsive", "Booking", "Gallery"],
      price: "$2,800",
      duration: "4-5 semanas"
    },
    {
      id: 7,
      title: "Escuela Primaria Futuro",
      description: "Sitio educativo con información académica, noticias, eventos y portal para padres.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
      category: "educacion",
      technologies: ["WordPress", "Custom Theme", "MySQL"],
      features: ["Responsive", "News System", "Parent Portal"],
      price: "$1,600",
      duration: "2-3 semanas"
    },
    {
      id: 8,
      title: "Empresa Constructora Sólida",
      description: "Website corporativo para empresa constructora con portafolio de proyectos y servicios.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
      category: "corporativo",
      technologies: ["Angular", "ASP.NET", "SQL Server"],
      features: ["Responsive", "Portfolio", "Contact System"],
      price: "$1,900",
      duration: "3 semanas"
    }
  ]

  const categories = [
    { 
      id: 'todos', 
      name: 'Todos los Proyectos', 
      count: projects.length, 
      icon: <Globe className="w-5 h-5" /> 
    },
    { 
      id: 'ecommerce', 
      name: 'E-commerce', 
      count: projects.filter(p => p.category === 'ecommerce').length, 
      icon: <ShoppingCart className="w-5 h-5" /> 
    },
    { 
      id: 'restaurante', 
      name: 'Restaurantes', 
      count: projects.filter(p => p.category === 'restaurante').length, 
      icon: <UtensilsCrossed className="w-5 h-5" /> 
    },
    { 
      id: 'salud', 
      name: 'Salud', 
      count: projects.filter(p => p.category === 'salud').length, 
      icon: <Building2 className="w-5 h-5" /> 
    },
    { 
      id: 'corporativo', 
      name: 'Corporativo', 
      count: projects.filter(p => p.category === 'corporativo').length, 
      icon: <Building2 className="w-5 h-5" /> 
    },
    { 
      id: 'fitness', 
      name: 'Fitness', 
      count: projects.filter(p => p.category === 'fitness').length, 
      icon: <Dumbbell className="w-5 h-5" /> 
    },
    { 
      id: 'turismo', 
      name: 'Turismo', 
      count: projects.filter(p => p.category === 'turismo').length, 
      icon: <Plane className="w-5 h-5" /> 
    },
    { 
      id: 'educacion', 
      name: 'Educación', 
      count: projects.filter(p => p.category === 'educacion').length, 
      icon: <GraduationCap className="w-5 h-5" /> 
    }
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId)
    // Don't scroll to top, let user see the filtered results
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Catálogo</span> de Proyectos
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Descubre algunos de los proyectos web que hemos desarrollado para nuestros clientes
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-lg font-semibold flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  {projects.length} Proyectos Completados
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#f9fafb"></path>
          </svg>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Target className="w-8 h-8 mr-3 text-blue-600" />
              Filtra por <span className="gradient-text ml-2">Categoría</span>
            </h2>
            <p className="text-gray-600">Encuentra el tipo de proyecto que necesitas</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`px-6 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white border-2 border-blue-600'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 1,
                  visibility: 'visible'
                }}
              >
                <span className="flex items-center">
                  {category.icon}
                </span>
                <span className="ml-2 font-semibold">
                  {category.name} ({category.count})
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="transition-all duration-500"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  opacity: 1,
                  visibility: 'visible'
                }}
              >
                <Card
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  className="card-hover border-0 bg-white shadow-xl h-full"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm font-medium text-gray-600">Precio estimado:</span>
                      <span className="text-lg font-bold text-green-600">{project.price}</span>
                    </div>
                    
                    <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
                      <span className="text-sm font-medium text-gray-600">Duración:</span>
                      <span className="text-sm font-semibold text-blue-600">{project.duration}</span>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Wrench className="w-4 h-4 mr-2 text-blue-600" />
                        Tecnologías:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-green-600" />
                        Características:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                        <Eye className="w-4 h-4 mr-2" />
                        Ver Demo
                      </button>
                      <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                        <FileText className="w-4 h-4 mr-2" />
                        Más Info
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Tienes un Proyecto en <span className="text-yellow-300">Mente?</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contáctanos para discutir tu proyecto y obtener una cotización personalizada basada en tus necesidades específicas
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-110 shadow-xl flex items-center justify-center">
              <Target className="w-6 h-6 mr-2" />
              Solicitar Cotización
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-110 backdrop-blur-sm bg-white/10 flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              Llamar Ahora
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nuestro <span className="gradient-text">Proceso</span> de Desarrollo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seguimos una metodología probada para garantizar el éxito de tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Análisis",
                description: "Entendemos tus necesidades y objetivos de negocio",
                icon: <Target className="w-8 h-8" />,
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "2",
                title: "Diseño",
                description: "Creamos wireframes y diseños adaptados a tu marca",
                icon: <Palette className="w-8 h-8" />,
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "3",
                title: "Desarrollo",
                description: "Programamos tu sitio web con las mejores tecnologías",
                icon: <Code className="w-8 h-8" />,
                color: "from-green-500 to-green-600"
              },
              {
                step: "4",
                title: "Lanzamiento",
                description: "Ponemos tu sitio en línea y te brindamos soporte continuo",
                icon: <TrendingUp className="w-8 h-8" />,
                color: "from-orange-500 to-red-500"
              }
            ].map((process, index) => (
              <div key={index} className="text-center animate-on-scroll" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`bg-gradient-to-r ${process.color} text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl animate-bounce-in`}>
                  {process.step}
                </div>
                <div className="flex justify-center mb-4 text-gray-600">
                  {process.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-on-scroll">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                <Clock className="w-6 h-6 mr-2 text-blue-600" />
                Tiempo de Entrega Promedio
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1-2 semanas</div>
                  <div className="text-gray-600">Landing Pages & Sitios Básicos</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2-4 semanas</div>
                  <div className="text-gray-600">Sitios Corporativos & Portafolios</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">4-8 semanas</div>
                  <div className="text-gray-600">E-commerce & Aplicaciones Web</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 mr-3 text-blue-600" />
              Lo que Dicen Nuestros <span className="gradient-text ml-2">Clientes</span>
            </h2>
            <p className="text-xl text-gray-600">Testimonios reales de proyectos exitosos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                company: "Restaurante La Cocina",
                rating: 5,
                comment: "Increíble trabajo! Nuestras reservas online aumentaron un 200% desde que lanzamos el nuevo sitio web.",
                avatar: <UtensilsCrossed className="w-12 h-12 text-orange-600" />
              },
              {
                name: "Carlos Mendoza", 
                company: "Fashion Style",
                rating: 5,
                comment: "El e-commerce que desarrollaron superó todas nuestras expectativas. Las ventas se triplicaron en el primer mes.",
                avatar: <ShoppingCart className="w-12 h-12 text-blue-600" />
              },
              {
                name: "Dra. Ana Pérez",
                company: "Clínica Dental Sonrisa", 
                rating: 5,
                comment: "Profesionales, puntuales y creativos. El sistema de citas online funciona perfecto.",
                avatar: <Building2 className="w-12 h-12 text-green-600" />
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover animate-on-scroll" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex items-center mb-4">
                  <div className="mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircle key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center">
            <Target className="w-10 h-10 mr-3 text-yellow-300" />
            ¿Listo para tu <span className="text-yellow-300 ml-2">Próximo Proyecto?</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Únete a más de 500 clientes satisfechos que han transformado su negocio con nuestras soluciones web
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex justify-center mb-2">
                <CheckCircle className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Calidad Premium</h3>
              <p className="opacity-90">Código limpio y optimizado</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
              <p className="opacity-90">Proyectos en tiempo récord</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex justify-center mb-2">
                <Wrench className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Soporte Total</h3>
              <p className="opacity-90">Asistencia 24/7 garantizada</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center justify-center">
              <Zap className="w-6 h-6 mr-2" />
              Comenzar Mi Proyecto
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-purple-600 px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-110 backdrop-blur-sm bg-white/10 flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              Llamar: (829) 123-4567
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg opacity-80 flex items-center justify-center flex-wrap gap-4">
              <span className="flex items-center">
                <Zap className="w-5 h-5 mr-1 text-yellow-300" />
                Consulta GRATIS
              </span>
              <span className="flex items-center">
                <Target className="w-5 h-5 mr-1 text-yellow-300" />
                Presupuesto sin compromiso
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-1 text-yellow-300" />
                Descuentos especiales disponibles
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}