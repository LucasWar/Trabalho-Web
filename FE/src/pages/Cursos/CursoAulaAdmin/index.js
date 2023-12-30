import { useState, useEffect } from 'react';
import { Container } from "./styles";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';


export default function CursoAulaAdmin() {

  const navigate = useNavigate();
  const { cursoId } = useParams();
  const [aulas, setAula] = useState([]);
  const teste='https://www.youtube.com/watch?v=VXxZZ7j_abE&ab_channel=OverkPr%C3%A9vias';

  function handleAulaCreate(){
    navigate(`create`);
  }

  function handleDelete(aulaId) {
    axios
      .delete(`http://localhost:3333/aulas/${aulaId}`)
      .then(() => {
        window.location.reload(true);
      })
  }

  function handleUpdate(aulaId){
    navigate(`${aulaId}/update`);
  }
  
  useEffect(() => {
    axios.get(`http://localhost:3333/cursos/aulas/${cursoId}`).then((response) => {
      setAula(response.data);
    });
  }, []); 
  
  return (
    <>
      <div
        style={{display:'flex', justifyContent: 'space-between'}}
      >
        <h2 style={{ marginLeft: '50px'}}>
          Aulas
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
 
          onClick={() => handleAulaCreate()}
        >
          Adicionar Aula
        </button>
      </div>
      
      <Container>
        {
          aulas.map((aula) => (
            <div className="box" key={aula.id}>
              Aula: {aula.nome}
              <a href={aula.link} target="_blank" rel="noreferrer noreferrer">
                <span>Assistir</span>
              </a>
              <button onClick={() => handleUpdate(aula.id)}>Editar</button>
              <button onClick={() => handleDelete(aula.id)}>Delete</button>
            </div>
          ))
        }
      </Container>
    </>
  );
}