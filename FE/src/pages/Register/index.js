import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles'

export default function Register(){

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`http://localhost:3333/alunos`, {
      email : email,
      senha : senha,
      nome : nome
    }).then(()=>{
      navigate('/login');
    }).catch(function(error){
      console.log(error.response);
      setEmail('');
      setSenha('');
      setNome('');
    })
  
  }

  return (
    <Container>
      <h3>Cadastre-se</h3>
      <form onSubmit={handleSubmit}>
        <span> Email: </span>
        <input
          type="text" 
          placeholder='exemail@gmail.com'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <span> Senha: </span>
        <input 
          type="text" 
          placeholder='exsenha123'
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
        />

        <span> Nome: </span>
        <input 
          type="text" 
          placeholder='exnome'
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />

        <button type='submit'> Cadastrar </button>
      </form>
      <span id='cad'>
        Já tem uma conta?
        <a href='/login'>Faça login </a>
      </span>
    </Container>
  );
}