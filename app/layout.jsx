import Nav from '@components/Nav'
import Search from '@components/Search'

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
        <Search />
      </body>
    </html>
  )
}
