import { useState } from 'react'
import Card from '../components/ui/Card'

export default function Catalogo() {
  const [activeFilter, setActiveFilter] = useState('todos')

  const projects = [
    {
      id: 1,
      title: "Restaurante La Cocina",
      description: "Sitio web moderno para restaurante con menú digital, reservas online y galería de platos.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      category: "restaurante",
      technologies: ["React", "Node.js", "MongoDB"],
      features: ["Responsive", "E-commerce", "SEO"]
    },
    {
      id: 2,
      title: "Tienda Fashion Style",
      description: "E-commerce completo para tienda de ropa con carrito de compras y pasarela de pagos.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      category: "ecommerce",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      features: ["E-commerce", "Responsive", "Admin Panel"]
    },
    {
      id: 3,
      title: "Clínica Dental Sonrisa",
      description: "Portal web profesional para clínica dental con sistema de citas y información de servicios.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      category: "salud",
      technologies: ["WordPress", "PHP", "MySQL"],
      features: ["Responsive", "Booking System", "SEO"]
    },
    {
      id: 4,
      title: "Bufete Legal Justicia",
      description: "Sitio web corporativo para bufete de abogados con blog y formularios de contacto.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=300&fit=crop",
      category: "corporativo",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      features: ["Responsive", "Blog", "Contact Forms"]
    },
    {
      id: 5,
      title: "Gym Fitness Pro",
      description: "Plataforma web para gimnasio con planes de membresía, horarios de clases y perfil de entrenadores.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      category: "fitness",
      technologies: ["React", "Firebase", "Stripe"],
      features: ["Responsive", "Membership", "Booking"]
    },
    {
      id: 6,
      title: "Agencia de Viajes Aventura",
      description: "Portal de turismo con paquetes de viajes, galería de destinos y sistema de reservas.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      category: "turismo",
      technologies: ["Next.js", "Sanity", "PayPal"],
      features: ["Responsive", "Booking", "Gallery"]
    },
    {
      id: 7,
      title: "Escuela Primaria Futuro",
      description: "Sitio educativo con información académica, noticias, eventos y portal para padres.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
      category: "educacion",
      technologies: ["WordPress", "Custom Theme", "MySQL"],
      features: ["Responsive", "News System", "Parent Portal"]
    },
    {
      id: 8,
      title: "Empresa Constructora Sólida",
      description: "Website corporativo para empresa constructora con portafolio de proyectos y servicios.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
      category: "corporativo",
      technologies: ["Angular", "ASP.NET", "SQL Server"],
      features: ["Responsive", "Portfolio", "Contact System"]
    }
  ]

  const categories = [
    { id: 'todos', name: 'Todos los Proyectos', count: projects.length },
    { id: 'ecommerce', name: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'restaurante', name: 'Restaurantes', count: projects.filter(p => p.category === 'restaurante').length },
    { id: 'salud', name: 'Salud', count: projects.filter(p => p.category === 'salud').length },
    { id: 'corporativo', name: 'Corporativo', count: projects.filter(p => p.category === 'corporativo').length },
    { id: 'fitness', name: 'Fitness', count: projects.filter(p => p.category === 'fitness').length },
    { id: 'turismo', name: 'Turismo', count: projects.filter(p => p.category === 'turismo').length },
    { id: 'educacion', name: 'Educación', count: projects.filter(p => p.category === 'educacion').length }
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 transition-colors">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestro Catálogo de Proyectos
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Descubre algunos de los proyectos web que hemos desarrollado para nuestros clientes
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                className="hover:transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Características:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, index) => (
                        <span key={index} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Ver Demo
                    </button>
                    <button className="flex-1 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 py-2 px-4 rounded-lg font-medium transition-colors">
                      Más Info
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              ¿Tienes un Proyecto en Mente?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Contáctanos para discutir tu proyecto y obtener una cotización personalizada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Solicitar Cotización
              </button>
              <button className="border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Ver Más Proyectos
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Nuestro Proceso de Desarrollo
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Seguimos una metodología probada para garantizar el éxito de tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 dark:bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Análisis</h3>
              <p className="text-gray-600 dark:text-gray-300">Entendemos tus necesidades y objetivos de negocio</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 dark:bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Diseño</h3>
              <p className="text-gray-600 dark:text-gray-300">Creamos wireframes y diseños adaptados a tu marca</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 dark:bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Desarrollo</h3>
              <p className="text-gray-600 dark:text-gray-300">Programamos tu sitio web con las mejores tecnologías</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 dark:bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Lanzamiento</h3>
              <p className="text-gray-600 dark:text-gray-300">Ponemos tu sitio en línea y te brindamos soporte continuo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}