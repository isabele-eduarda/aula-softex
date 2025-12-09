import { useState } from "react";

export default function CadastroParticipantes() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [lista, setLista] = useState([]);
  const [filtro, setFiltro] = useState("todas");

  const adicionar = () => {
    if (!nome || !idade) return;
    setLista([...lista, { id: Date.now(), nome, idade: Number(idade) }]);
    setNome("");
    setIdade("");
  };

  const remover = (id) => {
    setLista(lista.filter((p) => p.id !== id));
  };

  const filtrados = lista.filter((p) => {
    if (filtro === "maiores") return p.idade >= 18;
    if (filtro === "menores") return p.idade < 18;
    return true;
  });

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: "0 auto" }}>
      <h2>Cadastro de Participantes</h2>

      <input
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{ width: "100%", marginBottom: 8 }}
      />

      <input
        type="number"
        placeholder="Idade"
        value={idade}
        min="0" 
        max="120"
        onChange={(e) => setIdade(e.target.value)}
        style={{ width: "100%", marginBottom: 8 }}
      />

      <button onClick={adicionar} style={{ marginRight: 10 }}>Adicionar</button>
      <button onClick={() => { setNome(""); setIdade(""); }}>Limpar</button>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setFiltro("todas")} style={{ marginRight: 5 }}>Todas</button>
        <button onClick={() => setFiltro("maiores")} style={{ marginRight: 5 }}>Maiores</button>
        <button onClick={() => setFiltro("menores")}>Menores</button>
      </div>

      <h4>Total: {lista.length} | Maiores: {lista.filter((p) => p.idade >= 18).length}</h4>

      <div style={{ marginTop: 10 }}>
        {filtrados.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 8 }}>
            <strong>{p.nome}</strong> — {p.idade} anos
            <span style={{ marginLeft: 10, color: p.idade >= 18 ? "green" : "orange" }}>
              {p.idade >= 18 ? "Maior" : "Menor"}
            </span>
            <button style={{ marginLeft: 10 }} onClick={() => remover(p.id)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
}
