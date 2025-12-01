import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Product() {
  let [allData, setAllData] = useState([]);

  useEffect(() => {
    async function getAllData() {
      let res = await axios.get(`${import.meta.env.VITE_API_URL}`);
      setAllData(res.data);
    }
    getAllData();
  }, []);


  if (!allData) {
    return (
      <h2 className="text-center mt-10 text-xl text-gray-700 animate-pulse">
        Loading Product...
      </h2>
    );
  }


  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">
      
      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-12 text-gray-900 text-center tracking-tight">
        Explore Our Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">

        {allData.map((d) => (
          <Card key={d.id} data={d} />
        ))}

      </div>
    </div>
  );
}


/* =============== Product Card Separate Component =============== */

function Card({ data }) {
  let [index, setIndex] = useState(0);

  // Auto-slide images 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [data.images.length]);

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100 hover:-translate-y-2">

      {/* Slider Wrapper */}
      <div className="relative w-full h-56 overflow-hidden rounded-xl">

        {/* Sliding Images */}
        <div
          className="flex h-full transition-all duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {data.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={data.title}
              className="w-full h-56 object-cover flex-shrink-0 rounded-xl"
            />
          ))}
        </div>

        {/* Gradient Background Glow */}
        <div className="absolute inset-0 bg-indigo-300 opacity-20 blur-2xl rounded-xl group-hover:opacity-40 transition"></div>

        {/* Tag */}
        <span className="absolute top-3 left-3 bg-indigo-600 text-white text-sm px-3 py-1 rounded-full shadow">
          New
        </span>
      </div>

      {/* Content */}
      <h2 className="text-lg font-semibold mt-4 text-gray-900 group-hover:text-indigo-600 transition">
        {data.title}
      </h2>

      <h4 className="text-indigo-600 text-2xl font-bold mt-1">
        ₹ {data.price}
      </h4>

      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {data.description}
      </p>

      {/* Button */}
      <Link to={`/productDetails/${data.id}`}>
        <button className="mt-5 w-full bg-indigo-600 text-white py-2.5 rounded-xl hover:bg-indigo-700 transition font-medium shadow-md">
          View Details
        </button>
      </Link>
    </div>
  );
}
