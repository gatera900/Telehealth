'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Users, Clock, MessageSquare, Settings, LogOut, ArrowRight } from 'lucide-react'

interface SidebarProps {
  currentPage?: string
}

export default function Sidebar({ currentPage }: SidebarProps) {
  const pathname = usePathname()

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/patients', icon: Users, label: 'Patients' },
    { href: '/appointments', icon: Clock, label: 'Appointments' },
    { href: '/chat', icon: MessageSquare, label: 'Chat' },
    { href: '/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <div className="w-64 bg-gray-100 min-h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-900">TeleHealth</h1>
      </div>
      
      <nav className="flex-1 px-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 mb-4 mx-4 bg-white rounded-lg shadow-sm">
        <div className="w-full h-24 bg-gray-200 rounded mb-3 flex items-center justify-center">
          <div className="text-gray-400 text-xs">Illustration</div>
        </div>
        <p className="text-sm text-gray-700 mb-3">
          Upgrade to our new version Telehealth-Plus
        </p>
        <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
          Upgrade
        </button>
      </div>

      <div className="p-4">
        <Link
          href="/logout"
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <LogOut size={18} />
          <span>Log Out</span>
        </Link>
      </div>
    </div>
  )
}

