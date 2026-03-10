import React from 'react'
import { Phone, Menu } from "lucide-react";

const Header = () => {
  return (
     <div className="w-full flex justify-center mt-6">
      <div className="w-[95%] bg-gray-100 rounded-xl px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
          <div>
            <h1 className="font-bold text-lg text-gray-800">
              PANNER PARATHA
            </h1>
            <p className="text-xs text-gray-500 tracking-widest">
              TASTE OF INDIA
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Call Button */}
          <button className="flex items-center gap-2 border border-orange-400 px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-orange-50">
            <Phone size={16} className="text-green-600" />
            CALL: +91 90007 90007
          </button>

          {/* Login */}
          <button className="bg-orange-400 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-500">
            LOGIN
          </button>

          {/* Menu */}
          <Menu className="text-orange-400 cursor-pointer" size={26} />

        </div>
      </div>
    </div>
  )
}

export default Header