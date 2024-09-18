import Nav from "@components/Nav"
import Search from "@components/Search"

//Layout principal disponibilizado na página.
export default function layout() {
  return (
    <html>
        <body>
            <Nav />
            <div>Layout</div>
            <Search />
        </body>
    </html>
  )
}
