import Card from '../components/ui/Card'

export default function Home() {
  const services = [
    {
      title: "Páginas Web Profesionales",
      description: "Diseñamos y desarrollamos sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.",
      icon: "🌐"
    },
    {
      title: "E-commerce",
      description: "Tiendas online completas con pasarelas de pago, gestión de inventario y panel administrativo.",
      icon: "🛒"
    },
    {
      title: "Landing Pages",
      description: "Páginas de aterrizaje optimizadas para campañas publicitarias y generación de leads.",
      icon: "📱"
    },
    {
      title: "SEO Optimizado",
      description: "Posicionamiento web para aparecer en los primeros resultados de Google y aumentar tu visibilidad.",
      icon: "📈"
    },
    {
      title: "Diseño Responsivo",
      description: "Sitios web que se adaptan perfectamente a cualquier dispositivo: móvil, tablet y desktop.",
      icon: "💻"
    },
    {
      title: "Soporte 24/7",
      description: "Mantenimiento continuo, actualizaciones de seguridad y soporte técnico especializado.",
      icon: "🔧"
    }
  ]

  const benefits = [
    {
      title: "Aumenta tus Ventas",
      description: "Una página web profesional puede incrementar tus ventas hasta un 300% al llegar a más clientes potenciales.",
      icon: "💰"
    },
    {
      title: "Credibilidad Profesional",
      description: "El 75% de los consumidores juzgan la credibilidad de una empresa basándose en su sitio web.",
      icon: "⭐"
    },
    {
      title: "Disponible 24/7",
      description: "Tu negocio estará abierto las 24 horas del día, los 365 días del año para tus clientes.",
      icon: "🕒"
    },
    {
      title: "Alcance Global",
      description: "Expande tu mercado más allá de las fronteras locales y llega a clientes en todo el mundo.",
      icon: "🌍"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 dark:from-blue-800 dark:via-blue-900 dark:to-purple-900 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforma tu Negocio con una
              <span className="text-yellow-300 dark:text-yellow-400 block">Página Web Profesional</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Creamos sitios web modernos, responsivos y optimizados que convierten visitantes en clientes.
              Impulsa tu presencia digital hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Solicitar Cotización Gratis
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 dark:hover:bg-gray-100 dark:hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Ver Nuestros Trabajos
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              ¿Por qué tu Negocio Necesita una Página Web?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              En la era digital, una presencia online sólida es esencial para el éxito de cualquier negocio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                className="text-center hover:transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 dark:text-white"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ofrecemos soluciones completas para llevar tu negocio al siguiente nivel digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="hover:transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-700 dark:text-white"
              >
                <button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Más Información
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Hacer Crecer tu Negocio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Obtén una cotización gratuita y descubre cómo podemos ayudarte a destacar en línea
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 dark:bg-gray-100 dark:hover:bg-gray-200 text-blue-600 dark:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Cotización Gratuita
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 dark:hover:bg-gray-100 dark:hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              +1 (829) 123-4567
            </button>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Estamos aquí para ayudarte a hacer realidad tu proyecto web
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@dominiweb.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Teléfono</h3>
                    <p className="text-gray-600 dark:text-gray-300">+1 (829) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Ubicación</h3>
                    <p className="text-gray-600 dark:text-gray-300">Santo Domingo, República Dominicana</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}