import { ShoppingBag } from 'lucide-react'

function Navbar({ currentPage, onNavigate }) {
  const linkClass = (page) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      currentPage === page
        ? 'bg-emerald-500/20 text-emerald-400'
        : 'text-gray-300 hover:text-white hover:bg-white/10'
    }`

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <ShoppingBag className="h-6 w-6 text-emerald-400" />
          <span className="font-semibold tracking-tight">Nebula Commerce</span>
        </div>
        <nav className="flex items-center gap-1">
          <button className={linkClass('home')} onClick={() => onNavigate('home')}>Home</button>
          <button className={linkClass('shop')} onClick={() => onNavigate('shop')}>Shop</button>
          <button className={linkClass('about')} onClick={() => onNavigate('about')}>About</button>
          <button className={linkClass('contact')} onClick={() => onNavigate('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
