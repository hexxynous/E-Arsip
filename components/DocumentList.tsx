import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Document = {
  id: string
  name: string
  category: string
  uploadDate: string
  version: number
}

type DocumentListProps = {
  userRole: 'admin' | 'user'
}

export default function DocumentList({ userRole }: DocumentListProps) {
  const [documents, setDocuments] = useState<Document[]>([
    { id: '1', name: 'Laporan Keuangan 2023', category: 'Keuangan', uploadDate: '2023-12-01', version: 1 },
    { id: '2', name: 'Surat Keputusan Direktur', category: 'Administrasi', uploadDate: '2023-11-15', version: 2 },
    { id: '3', name: 'Data Karyawan 2023', category: 'HRD', uploadDate: '2023-10-20', version: 1 },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')

  const handleDelete = (id: string) => {
    setDocuments(documents.filter(doc => doc.id !== id))
  }

  const filteredDocuments = documents.filter(doc => 
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === 'all' || doc.category.toLowerCase() === filterCategory)
  )

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Daftar Dokumen</h2>
      <div className="flex space-x-4 mb-4">
        <Input
          type="text"
          placeholder="Cari dokumen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter Kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua</SelectItem>
            <SelectItem value="keuangan">Keuangan</SelectItem>
            <SelectItem value="administrasi">Administrasi</SelectItem>
            <SelectItem value="hrd">HRD</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama Dokumen</TableHead>
            <TableHead>Kategori</TableHead>
            <TableHead>Tanggal Unggah</TableHead>
            <TableHead>Versi</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredDocuments.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell>{doc.name}</TableCell>
              <TableCell>{doc.category}</TableCell>
              <TableCell>{doc.uploadDate}</TableCell>
              <TableCell>{doc.version}</TableCell>
              <TableCell>
                <Button variant="outline" className="mr-2">Lihat</Button>
                {userRole === 'admin' && (
                  <Button variant="destructive" onClick={() => handleDelete(doc.id)}>Hapus</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

