import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails({cartItem,setCartItem}) {
  let [cartData, setCartData] = useState(null);
  let [index, setIndex] = useState(0);
  let { id } = useParams();

  useEffect(() => {
    async function getCartData() {
      let res = await axios.get(
        `${import.meta.env.VITE_API_URL}${id}`
      );
      setCartData(res.data);
    }
    getCartData();
  }, [id]);

  // Auto Slide Effect
  useEffect(() => {
    if (!cartData) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cartData.images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [cartData]);

  if (!cartData) {
    return (
      <h2 className="text-center mt-10 text-xl text-gray-700 animate-pulse">
        Loading Product...
      </h2>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* ---- PRODUCT IMAGE SLIDER ---- */}
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl border border-gray-200">

          {/* Background Glow */}
          <div className="absolute inset-0 blur-2xl opacity-40 bg-indigo-400 group-hover:opacity-60 transition"></div>

          {/* SLIDER */}
          <div
            className="relative z-10 flex h-[450px] transition-all duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {cartData.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={cartData.title}
                className="w-full h-[450px] object-cover flex-shrink-0 rounded-3xl"
              />
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {cartData.images.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/50"
                }`}
              ></div>
            ))}
          </div>

        </div>

        {/* ---- PRODUCT DETAILS ---- */}
        <div className="bg-white/60 backdrop-blur-xl shadow-xl p-10 rounded-3xl border border-gray-200">

          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {cartData.title}
          </h1>

          <h2 className="text-3xl font-bold text-indigo-600 mb-6">
            ₹ {cartData.price}
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            {cartData.description}
          </p>

          {/* ---- BUTTONS ---- */}
          <div className="mt-10 flex gap-4">
            <button onClick={()=>{
              setCartItem([...cartItem, cartData]);

            }} className="flex-1 bg-indigo-600 text-white py-3 text-lg rounded-xl shadow hover:bg-indigo-700 transition">
              Add to Cart
            </button>

            <button className="flex-1 bg-gray-200 text-gray-900 py-3 text-lg rounded-xl shadow hover:bg-gray-300 transition">
              Buy Now
            </button>
          </div>

          {/* ---- PRODUCT INFO FEATURES ---- */}
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white rounded-xl shadow">
              <h4 className="font-bold text-gray-900">Free Shipping</h4>
              <p className="text-gray-600 text-sm">On all orders</p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow">
              <h4 className="font-bold text-gray-900">Secure Pay</h4>
              <p className="text-gray-600 text-sm">100% safe</p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow">
              <h4 className="font-bold text-gray-900">7-Day Return</h4>
              <p className="text-gray-600 text-sm">Easy returns</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
