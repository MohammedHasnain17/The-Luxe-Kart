import React from "react";

export default function HomePage() {
  return (
    <div className="w-full">

      {/* ---------- HERO SECTION ---------- */}
      <section className="bg-gray-100 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* Left Text */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Discover Premium Quality Products
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Shop the latest fashion, accessories and lifestyle essentials
              at unbeatable prices — delivered directly to your doorstep.
            </p>

            <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-indigo-700 transition">
              Start Shopping
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
              alt="Shopping"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ---------- FEATURES SECTION ---------- */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-gray-900">Free Shipping</h2>
            <p className="text-gray-600 mt-2">On all orders above ₹499</p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-gray-900">Secure Payment</h2>
            <p className="text-gray-600 mt-2">100% protected transactions</p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-gray-900">Premium Quality</h2>
            <p className="text-gray-600 mt-2">Curated top-notch products</p>
          </div>

        </div>
      </section>

      {/* ---------- CATEGORIES SECTION ---------- */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Shop By Categories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer">
              <img
                className="rounded-xl mb-4"
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                alt="Fashion"
              />
              <h3 className="text-xl font-semibold">Fashion</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer">
              <img
                className="rounded-xl mb-4"
                src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
                alt="Accessories"
              />
              <h3 className="text-xl font-semibold">Accessories</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer">
              <img
                className="rounded-xl mb-4"
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
                alt="Tech"
              />
              <h3 className="text-xl font-semibold">Electronics</h3>
            </div>

          </div>
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Join The Luxe Kart Family</h2>
        <p className="mt-3 text-lg">
          Get exclusive discounts, early product access & special offers.
        </p>
        <button className="mt-6 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition">
          Sign Up Now
        </button>
      </section>

    </div>
  );
}
