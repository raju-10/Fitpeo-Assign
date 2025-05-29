import React from "react";

import { Search, Bell, Plus } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <div className="text-2xl font-bold text-cyan-500">
          Healthcare<span className="text-gray-900">.</span>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-80 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600 hover:text-gray-900">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-3">
          <img src="icons8-user-48.png?height=40&width=40" alt="User Avatar" className="w-10 h-10 rounded-full" />
          <span className="text-gray-900 font-medium">John Doe</span>
        </div>

        <button className="bg-cyan-500 text-white p-2 rounded-lg hover:bg-cyan-600">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}

export default Header;
