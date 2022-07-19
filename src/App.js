import { useState,  useEffect} from 'react';

function App () {
  const [input, setInput] = useState ('');
  const [tarefas, setTarefas] = useState([
    'Pagar contas',
    'Estudar JS',
  ]);

  useEffect(()=> {
    const tarefasStorage = localStorage.getItem('@tarefa');
    if(tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }

  }, []);
  
  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas]);

  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleRegister}>
        <label>Nome: </label><br/>
        <input 
        placeholder="Digite seu nome"
        value={input} // valor dentro do input (já do html)
        onChange={(e) => setInput(e.target.value)} //ele chama essa função toda vez que digitar qualquer letra. chama a funcao p/ pegar o que digitou  e coloca dnetro do useState
        
        /><br/>

      
        <button type='submit'>Registrar</button>
      </form>
      <br></br>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
  
      </ul>
    
    
    </div>
  )
}

export default App;
