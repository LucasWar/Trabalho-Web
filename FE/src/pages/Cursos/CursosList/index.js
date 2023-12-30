import { useState, useEffect, useContext } from 'react';
import { Container } from "./styles";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import StoreContext from '../../../components/Store/Context';

export default function CursosList() {

  const [cursos, setCurso] = useState([]);
  const navigate = useNavigate();
  const url = 'https://localhost:3333/files/';
  const { token } = useContext(StoreContext);

  useEffect(() => {
    axios.get('http://localhost:3333/cursos').then((response) => {
      setCurso(response.data.cursos);
    });

  }, []);

  function handleAula(cursoId) {
    navigate(`${cursoId}/aulas`);
  }

  function handleFavoritos(cursoId) {
    navigate(`aluno/${token}/favoritos`);
  }

  function handleFavorite(cursoId) {
    axios.post(`http://localhost:3333/cursos/${cursoId}/${token}`)
      .then(() => {
        alert('Curso adicionado aos favoritos');
      });
  }

  return (
    <><div
    style={{display:'flex', justifyContent: 'space-between'}}
  >
    <h2 style={{ marginLeft: '50px'}}>
      Cursos
    </h2>
    <button
      style={
        {
          marginRight:'50px',
          width: '10%',
          height: '50px',
          borderStyle: 'none',
          borderRadius: '20px',
          backgroundColor: '#5640ca',
          color: 'white',
          fontSize: 'large',
          marginBottom: '10px',
        }
      } 
      onClick={() => handleFavoritos()}
    >
      Favoritos
    </button>
  </div>
  
      <Container>
        {
          cursos.map((curso) => (
            <div className="box" key={curso.id}>
              <span style={{marginBottom: '10px'}}>Curso: {curso.nome}</span>
              <button
                className='btn' 
                onClick={() => handleAula(curso.id)}
              >
                Acessar
              </button>
              <button
                className='btn' 
                onClick={() => handleFavorite(curso.id)}
              >
                Favoritar
              </button>
            </div>
          ))
        }
      </Container>
    </>
  );
}