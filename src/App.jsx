import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
