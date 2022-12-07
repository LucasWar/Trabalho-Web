import axios from 'axios';
import { useContext, useState} from 'react';
import { Container } from './styles';

import StoreContext from '../../components/Store/Context';
import { useNavigate } from 'react-router-dom';

export default function Login(){

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { setToken } = useContext(StoreContext);

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`http://localhost:3333/alunos/login`, {
      email : email,
      senha : senha,
    }).then((response)=>{
      setToken(response.data[0].email);
      navigate('/');
    }).catch(function(error){
      console.log(error.response);
      setEmail('');
      setSenha('');
    })
  
  }

  return (
    <Container>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <span> Email: </span>
        <input
          type="text" 
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}  
        />

        <span> Senha: </span>
        <input 
          type="password" 
          placeholder='Senha'
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
        />

        <button type='submit'> Entrar </button>
      </form>
      <span id='cad'>
        Não tem uma conta?
        <a href='/register'>Cadastre-se </a>
      </span>
    </Container>
  );
}