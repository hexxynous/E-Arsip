import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type UploadFormProps = {
  onUpload: (document: { name: string; category: string; file: File | null }) => void;
}

export default function UploadForm({ onUpload }: UploadFormProps) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('keuangan') // Updated initial state
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUpload({ name, category, file })
    // Reset form
    setName('')
    setCategory('')
    setFile(null)
    if (e.target instanceof HTMLFormElement) {
      e.target.reset()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Unggah Dokumen Baru</h2>
      <Input
        type="text"
        placeholder="Nama Dokumen"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Select value={category} onValueChange={setCategory} required>
        <SelectTrigger>
          <SelectValue placeholder="Pilih Kategori" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="keuangan">Keuangan</SelectItem>
          <SelectItem value="administrasi">Administrasi</SelectItem>
          <SelectItem value="hrd">HRD</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="file"
        onChange={handleFileChange}
        required
      />
      {file && (
        <p className="text-sm text-gray-500">
          File terpilih: {file.name} ({(file.size / 1024).toFixed(2)} KB)
        </p>
      )}
      <Button type="submit" disabled={!name || !category || !file}>Unggah</Button>
    </form>
  )
}

