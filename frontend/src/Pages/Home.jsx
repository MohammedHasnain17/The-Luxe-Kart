import React from "react";

export default function HomePage() {
  return (
    <div className="w-full">

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-24 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">

          {/* Left Text */}
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              ✨ New Collection 2024
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Discover Premium
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Quality</span> Products
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed">
              Shop the latest fashion, accessories and lifestyle essentials
              at unbeatable prices — delivered directly to your doorstep.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
                Start Shopping
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-gray-200 hover:border-indigo-600 hover:shadow-xl transition-all duration-300">
                View Collections
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Premium Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">4.9⭐</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
              alt="Shopping"
              className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-gray-900">Verified Quality</div>
                  <div className="text-sm text-gray-600">Premium Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FEATURES SECTION ---------- */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">

            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-4 group-hover:scale-110 transition-transform">
                  🚚
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Free Shipping</h2>
                <p className="text-gray-600">On all orders above ₹499. Fast delivery to your doorstep.</p>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-4 group-hover:scale-110 transition-transform">
                  🔒
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Secure Payment</h2>
                <p className="text-gray-600">100% protected transactions with encrypted checkout.</p>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-4 group-hover:scale-110 transition-transform">
                  ⭐
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Premium Quality</h2>
                <p className="text-gray-600">Curated top-notch products with quality guarantee.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------- CATEGORIES SECTION ---------- */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Shop By Categories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our curated collections designed to match your style and lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                  alt="Fashion"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">Fashion</h3>
                <p className="text-gray-600 mb-4">Latest trends & timeless classics</p>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:gap-2 transition-all">
                  Explore Now
                  <span className="inline-block transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
                  alt="Accessories"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">Accessories</h3>
                <p className="text-gray-600 mb-4">Complete your perfect look</p>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:gap-2 transition-all">
                  Explore Now
                  <span className="inline-block transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
                  alt="Tech"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">Electronics</h3>
                <p className="text-gray-600 mb-4">Smart tech for modern living</p>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:gap-2 transition-all">
                  Explore Now
                  <span className="inline-block transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
            🎉 Exclusive Membership
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join The Luxe Kart Family</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get exclusive discounts, early product access & special offers delivered straight to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="px-6 py-4 rounded-2xl w-full sm:w-96 text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
            />
            <button className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform w-full sm:w-auto whitespace-nowrap">
              Sign Up Now
            </button>
          </div>

          <div className="flex justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}