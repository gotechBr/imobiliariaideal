export default function Registro () {
    return (
        <div>
            <h3>Registre-se</h3>
            <form action="">
                <label htmlFor="Nome">Como se chama?</label>
                <input type="text" placeholder="Nome e sobrenome"/>
                <label htmlFor="dataNasc">Data de nascimento</label>
                <input type="Date" placeholder="dd/MM/AAAA"/>
                <label htmlFor="Email">Email</label>
                <input type="email" placeholder="email@exemplo.com"/>
                <label htmlFor="Senha">Senha</label>
                <input type="password" placeholder="Senha"/>
                <label htmlFor="Senha">Confirme sua senha:</label>
                <input type="password" placeholder="Senha"/>
                <label htmlFor="telefone">Telefone</label>
                <input type="text" placeholder="DDD +  Número"/>
                <button>Vamos lá!</button>
            </form>

            <h3>O seu imóvel dos sonhos está aqui!</h3>
        </div>
    )
}