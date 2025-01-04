'use client'

import { motion } from 'framer-motion'

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center min-h-screen text-center py-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-6xl font-bold text-blue-700">
            E-Arsip Telkom
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-2xl text-gray-700 max-w-2xl mx-auto"
        >
          Sistem Manajemen Arsip Digital Terpadu
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto mt-4"
        >
          Efisiensi • Keamanan • Aksesibilitas
        </motion.p>
      </motion.div>
    </div>
  )
}

