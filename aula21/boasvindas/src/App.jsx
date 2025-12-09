import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [logado, setLogado] = useState(false);

  const entrar = () => {
    if (nome.trim() === "") {
      alert("O nome é obrigatório!");
      return;
    }
    setLogado(true);
  };

  const sair = () => {
    setNome("");
    setLogado(false);
  };

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      {!logado ? (
        <>
          <h1>Boas-vindas</h1>

          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{ padding: 8, marginBottom: 10 }}
          />

          <br />

          <button onClick={entrar} style={{ padding: "8px 16px", marginTop: 10 }}>
            Entrar
          </button>
        </>
      ) : (
        <>
          <h1>Bem-vindo(a), {nome}!</h1>

          <button onClick={sair} style={{ padding: "8px 16px", marginTop: 10 }}>
            Sair
          </button>
        </>
      )}
    </div>
  );
}
