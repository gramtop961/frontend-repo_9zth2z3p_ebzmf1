import Spline from '@splinetool/react-spline'

function Hero({ onShop }) {
  return (
    <section className="relative h-[70vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="text-white">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Elevate your setup
          </h1>
          <p className="mt-4 max-w-xl text-gray-300">
            Explore curated tech essentials crafted for performance and style. Minimalist, modern, and built to last.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <button onClick={onShop} className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition">
              Shop now
            </button>
            <a href="#featured" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition">
              Featured
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
