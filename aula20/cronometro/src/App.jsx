import React, { useState, useRef } from "react";

export default function App() {
  const [tempo, setTempo] = useState(0);
  const intervaloRef = useRef(null);

  const iniciar = () => {
    if (intervaloRef.current !== null) return;

    intervaloRef.current = setInterval(() => {
      setTempo((t) => t + 1);
    }, 1000);
  };

  const pausar = () => {
    if (intervaloRef.current !== null) {
      clearInterval(intervaloRef.current);
      intervaloRef.current = null;
    }
  };

  const zerar = () => {
    pausar();
    setTempo(0);
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>Cronômetro</h1>
      <h2>{tempo} s</h2>

      <button onClick={iniciar} style={{ marginRight: 8 }}>Iniciar</button>
      <button onClick={pausar} style={{ marginRight: 8 }}>Pausar</button>
      <button onClick={zerar}>Zerar</button>
    </div>
  );
}
