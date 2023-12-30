import { useState, useEffect, useContext } from 'react';
import { Container } from "./styles";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import StoreContext from '../../../components/Store/Context';

export default function CursosFavoritList() {

  const [favoritos, setFavoritos] = useState([]);
  const navigate = useNavigate();
  const {token} = useContext(StoreContext);

  useEffect(() => {
    axios.get(`http://localhost:3333/alunos/favoritos/${token}`)
      .then((response) => {
        setFavoritos(response.data);
      });

  }, []);

  function handleAula(cursoId){
    navigate(`/cursos/${cursoId}/aulas`);
  }

  return (
    <>
      <h2 style={{ marginLeft: '50px'}}>
        Cursos favoritos
      </h2>
      <Container>
        {
          favoritos.map((fav) => (
            <div className="box" key={fav.id}>
              <span style={{marginBottom:'10px'}}>Curso: {fav.nome}</span>
              <button onClick={() => handleAula(fav.id)}>Acessar</button>
            </div>
          ))
        }
      </Container>
    </>
  );
}