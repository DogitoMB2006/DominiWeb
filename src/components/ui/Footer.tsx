export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-400/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2 animate-on-scroll">
            <h3 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Domini</span>
              <span className="text-purple-400">Web</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Creamos páginas web profesionales y responsivas para impulsar tu negocio en el mundo digital. 
              Soluciones personalizadas con la mejor tecnología y soporte 24/7.
            </p>
            
            <div className="flex space-x-4 mb-6">
              <a href="#" className="group bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
                <svg className="h-6 w-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="group bg-blue-800 hover:bg-blue-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
                <svg className="h-6 w-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="group bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
                <svg className="h-6 w-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="group bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
                <svg className="h-6 w-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.118.112.222.083.343-.09.378-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <h4 className="font-semibold mb-2 flex items-center">
                <span className="mr-2">🎯</span>
                ¿Necesitas ayuda con tu proyecto?
              </h4>
              <p className="text-sm text-gray-300 mb-3">
                Obtén una consulta gratuita de 30 minutos
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105">
                Agendar Consulta Gratis
              </button>
            </div>
          </div>
          
          <div className="animate-on-scroll" style={{animationDelay: '0.2s'}}>
            <h4 className="text-lg font-bold mb-6 text-blue-300">🚀 Servicios</h4>
            <ul className="space-y-3">
              {[
                'Páginas Web Corporativas',
                'E-commerce Avanzado',
                'Landing Pages',
                'Aplicaciones Web',
                'Diseño UX/UI',
                'SEO y Marketing Digital',
                'Mantenimiento Web',
                'Hosting y Dominios'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group">
                    <span className="mr-2 text-blue-400 group-hover:animate-pulse">▶</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-on-scroll" style={{animationDelay: '0.4s'}}>
            <h4 className="text-lg font-bold mb-6 text-purple-300">📞 Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="bg-green-600 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-sm">📧</span>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <a href="mailto:info@dominiweb.com" className="text-blue-300 hover:text-blue-200 transition-colors">
                    info@dominiweb.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-blue-600 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-sm">📱</span>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">WhatsApp</p>
                  <a href="tel:+18291234567" className="text-green-300 hover:text-green-200 transition-colors">
                    +1 (829) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-red-600 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-sm">📍</span>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Ubicación</p>
                  <p className="text-purple-300">Santo Domingo, RD</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm p-4 rounded-xl border border-white/10 mt-6">
                <h5 className="font-semibold mb-2 text-green-300">💬 Horarios de Atención</h5>
                <p className="text-sm text-gray-300">
                  Lun - Vie: 8:00 AM - 6:00 PM<br/>
                  Sábados: 9:00 AM - 2:00 PM<br/>
                  <span className="text-yellow-300">Emergencias 24/7</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center animate-on-scroll">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm flex items-center">
                <span className="mr-2">©</span>
                {currentYear} DominiWeb. Todos los derechos reservados.
                <span className="ml-2 text-yellow-400">✨</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Desarrollado con ❤️ en República Dominicana
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                Cookies
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
                Sitemap
              </a>
            </div>
          </div>
          

        </div>
      </div>
    </footer>
  )
}