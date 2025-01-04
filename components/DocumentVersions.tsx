import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Version } from "@/types/document"

type DocumentVersionsProps = {
  versions: Version[];
  onViewVersion: (version: number) => void;
}

export default function DocumentVersions({ versions, onViewVersion }: DocumentVersionsProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Versi</TableHead>
          <TableHead>Tanggal Unggah</TableHead>
          <TableHead>Diunggah Oleh</TableHead>
          <TableHead>Ukuran</TableHead>
          <TableHead>Aksi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {versions.map((version) => (
          <TableRow key={version.version}>
            <TableCell>{version.version}</TableCell>
            <TableCell>{version.uploadDate}</TableCell>
            <TableCell>{version.uploadedBy}</TableCell>
            <TableCell>{(version.size / 1024).toFixed(2)} KB</TableCell>
            <TableCell>
              <Button variant="outline" size="sm" onClick={() => onViewVersion(version.version)}>
                Lihat
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

