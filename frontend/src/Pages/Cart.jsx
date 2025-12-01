import React,{useState,useEffect} from 'react'
import axios from 'axios';


export default function Cart({ cartItem = [] }) {
  let [addcart,setAddCart] = useState([])
  useEffect(()=>{
    async function getAddcart() {
      for(let id of cartItem){
        let res = await axios.get(`${import.meta.env.VITE_API_URL}${id}`);
        setAddCart([...addcart,res.data])
      }
      
    }
  },[])
  return (
     <div className="min-h-screen bg-gray-100 py-8 px-4">
      
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Your Cart
      </h1>

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        {cartItem.length === 0 ? (
          <p className="text-center text-gray-600 text-lg py-10">
            Your cart is empty 🛒
          </p>
        ) : (
          <div className="space-y-6">
            {cartItem.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 items-center bg-gray-50 p-4 rounded-xl shadow hover:shadow-md transition"
              >
                {/* Product Image */}
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-xl border"
                />

                {/* Product Info */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mt-1 line-clamp-2">
                    {item.description}
                  </p>

                  <h3 className="text-indigo-600 text-lg font-bold mt-2">
                    ₹ {item.price}
                  </h3>
                </div>

                {/* Actions */}
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

