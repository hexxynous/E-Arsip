'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Menu, Home, FileText, Upload, LogOut } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import PageTransition from './PageTransition'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = () => {
    // Add any logout logic here (clear session, etc)
    router.push('/')
  }

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Dashboard' },
    { href: '/documents', icon: FileText, label: 'Daftar Dokumen' },
    { href: '/upload', icon: Upload, label: 'Upload Dokumen' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isNavbarOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 bottom-0 w-72 bg-white shadow-2xl text-gray-800 flex flex-col z-50"
      >
        {/* Header with logo */}
        <div className="p-5 border-b">
          <div className="flex items-center gap-3">
            <div className="w-8" /> {/* Spacer for visual balance */}
            <span className="text-xl font-semibold text-blue-600">E-Arsip</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                pathname === item.href
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Help Section */}
        <div className="p-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="mb-3">
              <h3 className="text-blue-600 font-medium mb-1">Butuh bantuan?</h3>
              <p className="text-sm text-gray-600">
                Hubungi tim support kami untuk bantuan lebih lanjut.
              </p>
            </div>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.location.href = '/support'}
            >
              Hubungi Support
            </Button>
          </div>
          <Button 
            variant="ghost"
            className="w-full mt-4 text-red-600 hover:bg-red-50 flex items-center gap-2"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            <span>Keluar</span>
          </Button>
        </div>
      </motion.div>

      {/* Burger Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-5 left-5 z-[60] hover:bg-gray-100"
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Main Content */}
      <main className="pl-20 pr-4 py-4 min-h-screen">
        <PageTransition>{children}</PageTransition>
      </main>
    </div>
  )
}

