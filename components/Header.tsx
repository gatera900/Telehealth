'use client'

import { Search, Bell, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search.."
            className="w-full pl-10 pr-4 py-2 bg-blue-50 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell size={20} className="text-gray-600" />
        </button>
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          <User size={20} className="text-gray-600" />
        </div>
      </div>
    </header>
  )
}

