import Link from "next/link"

export default function login() {
  return (  
    <div class="main-login-form">
        <h3 class="form-text-login">
        Novas oportunidades te esperam!
        </h3>
        <form action="" class="login-form"> 
          <h3>Login</h3>         
          <input type="text" placeholder="Email ou Telefone"/>
          <input type="text" placeholder="Senha"/>
          <Link href="/redefinir-senha" class="link-login"><p>Esqueceu sua senha?</p></Link>

          <button>Entrar</button>
        </form>
    </div>
  )
}
