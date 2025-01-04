import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type AccessManagementProps = {
  documentId: string;
  sharedWith: string[];
  onShareDocument: (email: string) => void;
  onRevokeAccess: (email: string) => void;
}

export default function AccessManagement({ documentId, sharedWith, onShareDocument, onRevokeAccess }: AccessManagementProps) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onShareDocument(email)
    setEmail('')
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Manajemen Akses</h3>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          type="email"
          placeholder="Email pengguna"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Bagikan</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sharedWith.map((email) => (
            <TableRow key={email}>
              <TableCell>{email}</TableCell>
              <TableCell>
                <Button variant="destructive" size="sm" onClick={() => onRevokeAccess(email)}>
                  Cabut Akses
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

