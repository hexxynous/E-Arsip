import { useState } from 'react'
import { Button } from "@/components/ui/button"

type Version = {
  number: number
  uploadDate: string
  uploadedBy: string
}

type DocumentDetailProps = {
  id: string
  name: string
  category: string
  currentVersion: number
  onClose: () => void
}

export default function DocumentDetail({ id, name, category, currentVersion, onClose }: DocumentDetailProps) {
  const [versions, setVersions] = useState<Version[]>([
    { number: currentVersion, uploadDate: '2023-12-01', uploadedBy: 'Admin' },
    { number: currentVersion - 1, uploadDate: '2023-11-15', uploadedBy: 'User' },
  ])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p><strong>Kategori:</strong> {category}</p>
        <p><strong>Versi Terbaru:</strong> {currentVersion}</p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Riwayat Versi</h3>
        <ul>
          {versions.map((version) => (
            <li key={version.number} className="mb-2">
              <strong>Versi {version.number}</strong> - Diunggah pada {version.uploadDate} oleh {version.uploadedBy}
              <Button variant="outline" size="sm" className="ml-2">Unduh</Button>
            </li>
          ))}
        </ul>
        
        <Button onClick={onClose} className="mt-6">Tutup</Button>
      </div>
    </div>
  )
}

