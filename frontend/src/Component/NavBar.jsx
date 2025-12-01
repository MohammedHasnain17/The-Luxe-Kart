import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBagIcon, HomeIcon , ShoppingCartIcon} from "lucide-react";

export default function NavBar() {
  return (
    <nav className="w-full bg-white/70 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text tracking-wide drop-shadow-sm">
          The Luxe Kart
        </h1>

        {/* Navigation */}
        <ol className="flex gap-8 text-gray-700 font-medium">

          <li>
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200"
            >
              <HomeIcon size={20} />
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/product"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200"
            >
              <ShoppingBagIcon size={20} />
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200"
            >
              <ShoppingCartIcon size={20} />
              Cart
            </Link>
          </li>

        </ol>
      </div>
    </nav>
  );
}
