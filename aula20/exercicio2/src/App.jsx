import React, { useState } from 'react';

export default function App() {
  // Estado para guardar o número de cliques
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState('');

  // Função que será chamada ao clicar no botão
  const aumentarContador = () => {
    setCount(count + Number (number));
  };
  function atualizar(event) {
    setNumber(event.target.value);
  }
  return (
    <main style={{minHeight:"100dvh",display:"grid",placeItems:"center",fontFamily:"system-ui"}}>

      <div style={{border:"1px solid #ddd",borderRadius:16,padding:24,textAlign:"center"}}>

        <h1>Contador</h1>
        <p>Digite um numero <strong>{count}</strong>.</p>
        <input type="number" value={number} onChange={atualizar}/>

        <button onClick={aumentarContador} style={{padding:"10px 16px",borderRadius:12,cursor:"pointer"}}> 
          Clique aqui
        </button>
        {count > 0 && (
          <button onClick={() => setCount(0)} style={{marginLeft:8,padding:"10px 16px",borderRadius:12,cursor:"pointer"}}>
          Zerar
          </button>
         ) 
         //&& 
        // (<button onClick={() => setCount(count - Number (number) )}>Subtrair</button>)
        }
</div>
</main>
);
}