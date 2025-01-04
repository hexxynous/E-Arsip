import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ExportData() {
  const [format, setFormat] = useState('csv')

  const handleExport = () => {
    // Simulasi ekspor data
    console.log(`Mengekspor data dalam format ${format}`)
    // Di sini Anda akan menambahkan logika untuk mengekspor data sebenarnya
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Ekspor Data</h3>
      <Select value={format} onValueChange={setFormat}>
        <SelectTrigger>
          <SelectValue placeholder="Pilih format ekspor" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="csv">CSV</SelectItem>
          <SelectItem value="pdf">PDF</SelectItem>
          <SelectItem value="xlsx">Excel</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleExport} disabled={!format}>Ekspor</Button>
    </div>
  )
}

