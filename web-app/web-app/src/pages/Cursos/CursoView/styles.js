import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-direction: row;
  width: 45%;
  margin: 0 auto;
  margin-top: 5%;

  #box {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 250px;
    height: 250px;
    margin-left: 45px;
    margin-right: 40px;
    background-color: gray;
  }
  
  #description {

  }

  #name {
  
  }

`;

export const Input = styled.input`
  
`;