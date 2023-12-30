import { useState } from 'react'
import axios from 'axios';

import { Container } from './styles'
import { useNavigate, useParams } from 'react-router-dom';

export default function CursoAulaCreate(){

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const { cursoId } = useParams();

  const handleSubmit = ( e ) => {
    e.preventDefault();

    axios.post('http://localhost:3333/aulas', {
      nome : name,
      link : link,
      idCurso: cursoId
    }).then(()=>{
      navigate(-1);
    })
    .catch(function (error) {
      if(error.response){
        console.log(error.response.status);
      }
    }) 
  }

  return (
    <Container>
      <h3>Cadastrar Aula</h3>
      <form onSubmit={handleSubmit} >
        <span> Nome: </span>
        <input
         type="text"
         onChange={(e) => setName(e.target.value)}
         value={name}
        />

        <span> Link: </span>
        <input 
          type="text"
          onChange={(e) => setLink(e.target.value)}
          value={link}
        />

        <button type='submit'> Cadastrar </button>
      </form>
    </Container>
  );
}