import Nav from '@components/Nav'

export const metadata = {
  title: 'Imobiliária Ideal',
  description: 'Encontre o imóvel dos seus sonhos',
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body>
      <Nav/>
        { children }
      </body>
    </html>
  )
}
