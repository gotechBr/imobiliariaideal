"use client";
import { useState } from "react";
import Link from "next/link";

export default function Registro() {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erros, setErros] = useState({});

  const enviaFormulario = async (e) => {
    e.preventDefault();

    if (validarCampos()) {
        const dados = {
          nome,
          email,
          mensagem, 
          telefone,
          senha
    };

    const validarCampos = () => {
      const novosErros = {};

      if (!nome.trim()) {
        novosErros.nome = "O campo nome é obrigatório";
      }

      if (!email.trim()) {
        novosErros.email = "O campo email é obrigatório";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        novosErros.email = "O email inserido não é válido";
      }

      if (!mensagem.trim()) {
        novosErros.mensagem = "O campo mensagem é obrigatório";
      } else 
      if(!senha.trim()){
        novosErros.senha = "O campo senha é obrigatório";
      }

      setErros(novosErros);

      return Object.keys(novosErros).length === 0;
    };

      try {
        const response = await fetch("http://localhost:8080/usuario/registrar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dados),
        });

        if (response.ok) {
          console.log("Objeto criado com sucesso!");
          window.alert("Usuário registrado com sucesso!");
        } else {
          console.error("Erro ao criar o objeto:", response.status);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    
    }
  };

  return (
    <div class="main-div-form">
      <div class="div-form">
        <h3>Registre-se</h3>
        <form class="form-registro" onSubmit={enviaFormulario}>
          <label htmlFor="Nome">Como se chama?</label>
          <br />
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <br />
          <label htmlFor="dataNasc">Data de nascimento</label>
          <br />
          <input
            type="Date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
          <br />
          <label htmlFor="Email">Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="Senha">Senha</label>
          <br />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <br />
          <label htmlFor="Senha">Confirme sua senha</label>
          <br />
          <input type="password" />
          <br />
          <label htmlFor="telefone">Telefone</label>
          <br />
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <br />
          <button Link href="/login">
            Vamos lá!
          </button>
        </form>
      </div>
      <h3 class="form-text-registro">O imóvel dos seus sonhos está aqui!</h3>
    </div>
  );
}
