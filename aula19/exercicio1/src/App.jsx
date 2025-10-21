import React, { useState } from 'react';

function App() {
  // Estado para guardar o número de cliques
  const [contador, setContador] = useState(0);

  // Função que será chamada ao clicar no botão
  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', marginLeft: '50px'}}>
      <h1>Contador de Cliques</h1>
      <p>Você clicou {contador} vezes</p>
      <button onClick={aumentarContador}>Clique aqui</button>
    </div>
  );
}

export default App;

// { }<>