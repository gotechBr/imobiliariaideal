import "@styles/globals.css"

function Nav() {
  return (
    <nav className="navPrincipal">
      <nav className="navBar">
        <div className="divtitulo">
          <h1 className="titulo">Imobiliária Ideal</h1>
        </div>
        <ul className="ul-nav">
          <li>Sobre nós</li>
          <li>É corretor?</li>
          <li>Entrar</li>
          <li>Criar conta</li>
        </ul>
      </nav>
    </nav>
  )
}

export default Nav;