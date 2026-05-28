import "@/app/globals.css"
export default function RootLayout({ children }: {
  children:
  React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Passagem de Dados</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}