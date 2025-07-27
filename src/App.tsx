import { useState, useEffect } from 'react'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      setCurrentPage(hash || 'home')
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'catalogo':
        return <Catalogo />
      default:
        return <Home />
    }
  }

  return (
    <div className="App">
      <Navbar />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default App