import { useState } from 'react';

function App () {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState ('');
  const [idade, setIdade] = useState(0);

  const [user, setUser] = useState({});

  function handleRegister(e) {
    e.preventDefault();
    alert('Usuário registrado com sucesso')
    setUser({
      nome: nome,
      idade:idade,
      email:email,
    })
  }

  return (
    <div>
      <h1>Cadastrando usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome: </label><br/>
        <input 
        placeholder="Digite seu nome"
        value={nome} // valor dentro do input (já do html)
        onChange={(e) => setNome(e.target.value)} //ele chama essa função toda vez que digitar qualquer letra. chama a funcao p/ pegar o que digitou  e coloca dnetro do useState
        
        /><br/>

        <label>Email: </label><br/>
        <input 
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        /><br/>

        <label>Idade: </label><br/>
        <input 
        placeholder="Digite seu idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        
        /><br/>
        <button type='submit'>Registrar</button>
      </form>
      <br></br>
      <div>
        <span>Bem vindo: {user.nome} </span><br/>
        <span>Idade: {user.idade}</span><br/>
        <span>Email: {user.email}</span><br/>
      </div>
    
    
    </div>
  )
}

export default App;
