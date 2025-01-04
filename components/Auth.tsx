import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

type User = {
  username: string;
  role: 'admin' | 'user';
}

type AuthProps = {
  onLogin: (user: User) => void;
}

export default function Auth({ onLogin }: AuthProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulasi autentikasi sederhana
    if (username === 'admin' && password === 'admin') {
      onLogin({ username: 'admin', role: 'admin' })
    } else if (username === 'user' && password === 'user') {
      onLogin({ username: 'user', role: 'user' })
    } else {
      alert('Username atau password salah')
    }
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Masuk ke sistem E-Arsip</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">Username</label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-center w-full text-gray-500">
          Hubungi admin jika Anda lupa password
        </p>
      </CardFooter>
    </Card>
  )
}

