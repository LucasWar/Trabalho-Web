import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { Container } from './styles'
import { useNavigate, useParams } from 'react-router-dom';

export default function CursoUpdate(){

  const { cursoId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [tag, setTag] = useState('');
  const [description, setDescription] = useState('');

  const [cursos, setCurso] = useState([]);

  const { reset } = useForm();

  useEffect(() => {
    axios.get(`http://localhost:3333/cursos/${cursoId}`).then((response) => {
      setName(response.data[0].nome);
      setTag(response.data[0].tag);
      setDescription(response.data[0].descricao);
    });
  }, []);


  const handleSubmit = ( e ) => {
    e.preventDefault();

    axios.put(`http://localhost:3333/cursos/${cursoId}`, {
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
      <h3>Editar Curso</h3>
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