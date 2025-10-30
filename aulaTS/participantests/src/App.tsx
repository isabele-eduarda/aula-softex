import { useState } from 'react'

function App() {
  const [maior, setMaior] = useState<number>(0);
  const [cont,setCont] = useState<number>(0);
  const [idade, setIdade] = useState <number | "">("");
  const [nome, setNome] = useState <string>('');
  
  function contador (){
    if (idade !=="" && >= 18){
      setMaior (maior+1);
    }
  }

  function handdleIdade (e){
    return setIdade(e.target.value);
  }

  return (

    <div>
      <form action="">
        <label htmlFor="">Digite seu nome</label>
        <input type="text" />

        <label htmlFor="">Digite sua idade</label>
        <input type="number" value={idade} onChange={handdleIdade} min={0} max={130}/>

        <button type='submit'>Adicionar</button>
        <button type='reset'>Resetar</button>
      </form>
    </div>

  )
}

export default App
