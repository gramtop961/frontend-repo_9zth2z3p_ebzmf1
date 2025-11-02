import { Star, ShoppingCart } from 'lucide-react'

function Rating({ value }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < value ? 'text-emerald-400 fill-emerald-400' : 'text-gray-600'}`} />
      ))}
    </div>
  )
}

function ProductCard({ product, onAdd }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-emerald-500/50 transition">
      <div className="aspect-square bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
        <img src={product.image} alt={product.name} className="h-40 w-40 object-cover rounded-lg shadow-md" />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold truncate">{product.name}</h3>
        <div className="mt-1 flex items-center justify-between">
          <Rating value={product.rating} />
          <span className="text-emerald-400 font-semibold">${product.price.toFixed(2)}</span>
        </div>
        <button onClick={() => onAdd(product)} className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition">
          <ShoppingCart className="h-4 w-4" /> Add to cart
        </button>
      </div>
    </div>
  )
}

function FeaturedProducts({ products = [], title = 'Featured', onAdd }) {
  return (
    <section id="featured" className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
            <p className="text-gray-400 text-sm">Hand-picked highlights from our latest catalog</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
