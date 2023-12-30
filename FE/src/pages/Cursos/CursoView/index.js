import { Container } from "./styles";

export default function CursoView() {
  return (
    <>
      <h2 style={{ marginLeft: '50px' }}>
        Nome do curso
      </h2>
      <Container>
        <div id="box">
          <span id="name">
            Nome
          </span>
        </div>
        <span id="description">Descrição</span>
        <br />
      </Container>
    </>
  );
}