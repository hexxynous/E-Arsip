'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, File, X } from 'lucide-react'
import PageTransition from '@/components/PageTransition'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementasi logika upload dokumen di sini
    console.log('Uploading:', file)
    // Reset form
    setFile(null)
  }

  return (
    <PageTransition>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Upload Dokumen</h1>
        <Card>
          <CardHeader>
            <CardTitle>Form Upload</CardTitle>
            <CardDescription>Unggah dokumen baru ke sistem E-Arsip</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="documentName">Nama Dokumen</Label>
                <Input id="documentName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="documentType">Tipe Dokumen</Label>
                <Select required>
                  <SelectTrigger id="documentType">
                    <SelectValue placeholder="Pilih tipe dokumen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="docx">DOCX</SelectItem>
                    <SelectItem value="xlsx">XLSX</SelectItem>
                    <SelectItem value="pptx">PPTX</SelectItem>
                    <SelectItem value="jpg">JPG</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>File Dokumen</Label>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center ${
                    dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {file ? (
                    <div className="flex items-center justify-center space-x-4">
                      <File className="text-blue-500" size={24} />
                      <span className="text-lg font-medium">{file.name}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setFile(null)}
                      >
                        <X size={20} />
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                      <p className="text-lg mb-2">Drag & drop file di sini, atau</p>
                      <label
                        htmlFor="fileInput"
                        className="cursor-pointer text-blue-500 hover:text-blue-600"
                      >
                        pilih file
                      </label>
                      <input
                        id="fileInput"
                        type="file"
                        className="hidden"
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={!file}>
                Upload Dokumen
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  )
}

