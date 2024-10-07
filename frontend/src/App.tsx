import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table"
import { api } from "./lib/axios"

interface User {
  id: string
  name: string
  email: string
  createdAt: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    api.get('/users').then(response => setUsers(response.data))
  }, [])

  return (
    <div className="max-w-screen-lg h-screen mx-auto flex flex-col items-center justify-center">
      {users.length === 0 ? (
        <Loader2 className="size-10 animate-spin" />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>Data de criação</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{new Intl.DateTimeFormat('pt-br', {
                  dateStyle: 'medium',
                }).format(new Date(user.createdAt))}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}

export default App
