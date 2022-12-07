import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
  width: 30%;
  margin: 0 auto;
  margin-top: 5%;

  input {
    width: 100%;
    height: 40px;
    margin-bottom: 23px;
    padding: 0 16px;
    
    border-style: none;
    border-radius: 10px;
    outline: 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);

    &::placeholder {
      color: #BCBCBC;
    }
  }

  button {
    width: 100%;
    height: 50px;
    border-style: none;
    border-radius: 20px;
    background-color: #5640ca;
    color: white;
    font-size: large;
    margin-bottom: 40px;
  }

  span {
    margin-left: 5px;
  }

  a {
    font-size: small;
    margin-left: 5px;
    color: black;
    align-content: center;
  }

  #cad {
    font-size: small;
  }
`;

export const Input = styled.input`
  
`;