import { Container } from "./styles";

export default function CursoView() {
  return(
    <Container>
      <div id="box">
        <span id="name">
          Nome
        </span>
      </div>
      <span id="description">Descrição</span>
      <br/>
    </Container>
  );
}