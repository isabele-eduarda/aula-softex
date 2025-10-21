import React, { useState } from 'react';

export default function App() {
  // Estado para guardar o número de cliques
  const [contador, setContador] = useState(0);

  // Função que será chamada ao clicar no botão
  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <main style={{minHeight:"100dvh",display:"grid",placeItems:"center",fontFamily:"system-ui"}}>
      <div style={{border:"1px solid #ddd",borderRadius:16,padding:24,textAlign:"center"}}>
        <h1>Contador de Cliques</h1>
        <p>Você clicou <strong>{contador}</strong> vez(es).</p>
        <button onClick={aumentarContador} style={{padding:"10px 16px",borderRadius:12,cursor:"pointer"}}> 
          Clique aqui
        </button>
        {contador > 0 && (
        <button onClick={() => setContador(0)} style={{marginLeft:8,padding:"10px 16px",borderRadius:12,cursor:"pointer"}}>
        Zerar
        </button>
        )}
</div>
</main>
);
}