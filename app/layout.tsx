import './globals.css'

export const metadata = {
  title: 'Todo App - Twizo',
  description: 'Aplicativo de tarefas criado com Twizo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}