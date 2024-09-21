import login from "@app/login/page";
import "@styles/globals.css";
import Link from 'next/link'

function Nav() {
  return (
    <div class="divNavBar">
      <nav class="navBar">
        <h1><Link href="/">Imobiliária Ideal</Link></h1>
        <ul class="nav-list">
          <li><Link href="/">Sobre nós</Link></li>
          <li><Link href="/">É corretor?</Link></li>
          <li><Link href="/login">Entrar</Link></li>
          <li><Link href="/registro">Criar conta</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;