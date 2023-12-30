import { useState } from 'react'
import axios from 'axios';

import { Container } from './styles'
import { useNavigate } from 'react-router-dom';

export default function CursoCreate(){

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = ( e ) => {
    e.preventDefault();

    axios.post('http://localhost:3333/cursos', {
      nome : name,
      tag : tag,
      descricao : description,
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
      <h3>Cadastrar Curso</h3>
      <form onSubmit={handleSubmit} >
        <span> Nome: </span>
        <input
         type="text"
         onChange={(e) => setName(e.target.value)}
         value={name}
        />

        <span> Tag: </span>
        <input 
          type="text"
          onChange={(e) => setTag(e.target.value)}
          value={tag}
        />

        <span> Descrição: </span>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <button type='submit'> Cadastrar </button>
      </form>
    </Container>
  );
}