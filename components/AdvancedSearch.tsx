import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from 'lucide-react'

type AdvancedSearchProps = {
  onSearch: (query: string, category: string) => void;
}

export default function AdvancedSearch({ onSearch }: AdvancedSearchProps) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query, category)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Cari dokumen..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit" size="icon">
          <Search className="h-4 w-4" />
          <span className="sr-only">Cari</span>
        </Button>
      </div>
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Pilih Kategori" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Semua Kategori</SelectItem>
          <SelectItem value="keuangan">Keuangan</SelectItem>
          <SelectItem value="administrasi">Administrasi</SelectItem>
          <SelectItem value="hrd">HRD</SelectItem>
        </SelectContent>
      </Select>
    </form>
  )
}

