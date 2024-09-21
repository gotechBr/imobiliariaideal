export default function Registro () {
    return (
        <div class="main-div-form">
            <div class="div-form">
            <h3>Registre-se</h3>
                <form action="" class="form-registro">
                    <label htmlFor="Nome">Como se chama?</label><br />
                    <input type="text"/>
                    <br />
                    <label htmlFor="dataNasc">Data de nascimento</label><br />
                    <input type="Date" />
                    <br />
                    <label htmlFor="Email">Email</label><br />
                    <input type="email"/>
                    <br />
                    <label htmlFor="Senha">Senha</label><br />
                    <input type="password"/>
                    <br />
                    <label htmlFor="Senha">Confirme sua senha</label><br />
                    <input type="password" />
                    <br />
                    <label htmlFor="telefone">Telefone</label><br />
                    <input type="text"/><br />
                    <button>Vamos lá!</button>
                </form>
            </div>
            <h3 class="form-text-registro">O imóvel dos seus sonhos está aqui!</h3>
        </div>
    )
}