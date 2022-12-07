import { useState, useEffect } from 'react';
import { Container } from "./styles";
import axios from "axios";
import { useParams } from 'react-router-dom';


export default function CursoAula() {

  const { cursoId } = useParams();
  const [aulas, setAula] = useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:3333/cursos/aulas/${cursoId}`).then((response) => {
      setAula(response.data);
    });
  }, []); 
  
  return (
    <>
      <h2 style={{ marginLeft: '50px'}}>
        Aulas
      </h2>
      <Container>
        {
          aulas.map((aula) => (
            <div className="box" key={aula.id}>
              Aula: {aula.nome}
              <a href={aula.link} target="_blank" rel="noreferrer noreferrer">
                <span>Assistir</span>
              </a>
            </div>
          ))
        }
      </Container>
    </>
  );
}