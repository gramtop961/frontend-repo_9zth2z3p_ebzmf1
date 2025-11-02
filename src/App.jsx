import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Footer from './components/Footer'

function App() {
  const [page, setPage] = useState('home')
  const [cart, setCart] = useState([])

  const products = useMemo(() => [
    { id: 'p1', name: 'Apex Wireless Headphones', price: 149.99, rating: 5, image: 'https://images.unsplash.com/photo-1704440278730-b420f5892700?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcGV4JTIwV2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8MHx8fDE3NjIxMTgwMTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { id: 'p2', name: 'Lumina Mechanical Keyboard', price: 129.0, rating: 4, image: 'https://images.unsplash.com/photo-1704440278730-b420f5892700?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcGV4JTIwV2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8MHx8fDE3NjIxMTgwMTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { id: 'p3', name: 'Nebula 4K Monitor', price: 399.99, rating: 4, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { id: 'p4', name: 'Glide Pro Mouse', price: 59.99, rating: 5, image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=800&auto=format&fit=crop' },
    { id: 'p5', name: 'Orbit Smart Speaker', price: 89.0, rating: 4, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop' },
    { id: 'p6', name: 'Pulse USB-C Hub', price: 49.0, rating: 4, image: 'https://images.unsplash.com/photo-1704440278730-b420f5892700?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcGV4JTIwV2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8MHx8fDE3NjIxMTgwMTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ], [])

  const featured = products.slice(0, 3)

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
  }

  const renderPage = () => {
    if (page === 'home') {
      return (
        <>
          <Hero onShop={() => setPage('shop')} />
          <FeaturedProducts products={featured} title="Featured" onAdd={addToCart} />
        </>
      )
    }
    if (page === 'shop') {
      return (
        <>
          <section className="pt-10">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-white mb-2">Shop</h2>
              <p className="text-gray-400 mb-6">Browse our complete collection</p>
            </div>
          </section>
          <FeaturedProducts products={products} title="All products" onAdd={addToCart} />
        </>
      )
    }
    if (page === 'about') {
      return (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-gray-300">
            <h2 className="text-3xl font-bold text-white mb-4">About us</h2>
            <p className="leading-relaxed">
              We craft modern tech essentials with a focus on minimalist design, performance, and durability. Our mission is to bring premium experiences to everyday setups without the premium markup.
            </p>
            <p className="mt-4 leading-relaxed">
              From concept to production, we obsess over details so you don’t have to. Every product is tuned for a clean desktop aesthetic and a frictionless workflow.
            </p>
          </div>
        </section>
      )
    }
    if (page === 'contact') {
      return (
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6 text-gray-300">
            <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
            <p className="mb-6">Have a question? Drop us a line and we’ll get back within 1–2 business days.</p>
            <form className="grid grid-cols-1 gap-4">
              <input className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your name" />
              <input type="email" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Email address" />
              <textarea rows={5} className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Message" />
              <button type="button" className="justify-self-start px-5 py-3 rounded-md bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition">Send message</button>
            </form>
          </div>
        </section>
      )
    }
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar currentPage={page} onNavigate={setPage} />
      {renderPage()}
      <Footer />

      <div className="fixed bottom-4 right-4 px-3 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-200">
        Cart: <span className="text-white font-semibold">{cart.length}</span>
      </div>
    </div>
  )
}

export default App
