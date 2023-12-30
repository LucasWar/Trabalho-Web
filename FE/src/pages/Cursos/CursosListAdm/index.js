import { useState, useEffect } from 'react';
import { Container } from "./styles";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function CursosListAdm() {

  const [cursos, setCurso] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3333/cursos').then((response) => {
      setCurso(response.data.cursos);
    });
  }, []);

  function handleAula(cursoId){
    navigate(`curso/${cursoId}/aulas`);
  }

  function handleUpdate(cursoId){
    navigate(`curso/${cursoId}/update`);
  }

  function handleCursoCreate(){
    navigate(`curso/create`);
  }

  function handleDelete(cursoId) {
    axios
      .delete(`http://localhost:3333/cursos/${cursoId}`)
      .then(() => {
        window.location.reload(true);
      })
  }
  
  return (
    <>
      <div
        style={{display:'flex', justifyContent: 'space-between'}}
      >
        <h2 style={{ marginLeft: '50px'}}>
          Cursos
        </h2>
        <button
          style={
            {
              marginRight:'50px',
              width: '15%',
              height: '50px',
              borderStyle: 'none',
              borderRadius: '20px',
              backgroundColor: '#5640ca',
              color: 'white',
              fontSize: 'large',
              marginBottom: '10px',
            }
          }
          onClick={() => handleCursoCreate()}
        >
          Adicionar Curso
        </button>
      </div>
      
      <Container>
        {
          cursos.map((curso) => (
            <div className="box" key={curso.id}>
              <span style={{marginBottom: '10px'}}>Curso: {curso.nome}</span>
              <button onClick={() => handleAula(curso.id)}>Acessar</button>
              <button onClick={() => handleUpdate(curso.id)}>Editar</button>
              <button onClick={() => handleDelete(curso.id)}>Delete</button>
            </div>
          ))
        }
      </Container>
    </>
  );
}