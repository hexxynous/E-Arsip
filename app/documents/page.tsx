'use client'

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FileText, Download, Trash2, Search } from 'lucide-react'
import PageTransition from '@/components/PageTransition'

type Document = {
  id: string
  name: string
  type: string
  size: string
  lastModified: string
}

const documents: Document[] = [
  { id: '1', name: 'Laporan Keuangan 2023.pdf', type: 'PDF', size: '2.5 MB', lastModified: '2023-12-01' },
  { id: '2', name: 'Presentasi Proyek.pptx', type: 'PPTX', size: '5.1 MB', lastModified: '2023-11-15' },
  { id: '3', name: 'Data Karyawan.xlsx', type: 'XLSX', size: '1.8 MB', lastModified: '2023-10-20' },
  { id: '4', name: 'Kontrak Kerjasama.docx', type: 'DOCX', size: '567 KB', lastModified: '2023-09-05' },
  { id: '5', name: 'Foto Tim.jpg', type: 'JPG', size: '3.2 MB', lastModified: '2023-08-12' },
]

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <PageTransition>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Daftar Dokumen</h1>
        <div className="mb-6 flex items-center">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Cari dokumen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <Button className="ml-4">
            Tambah Dokumen
          </Button>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Dokumen</TableHead>
                <TableHead>Tipe</TableHead>
                <TableHead>Ukuran</TableHead>
                <TableHead>Terakhir Diubah</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <FileText className="mr-2 text-blue-500" size={20} />
                      {doc.name}
                    </div>
                  </TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell>{doc.lastModified}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Download size={16} className="mr-1" /> Unduh
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 size={16} className="mr-1" /> Hapus
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </PageTransition>
  )
}

