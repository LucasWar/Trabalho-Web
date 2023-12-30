import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  margin-top: 5%;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 250px;
    height: 250px;
    margin-left: 45px;
    margin-right: 40px;
    margin-bottom: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  }

  button {
    width: 50%;
    height: 50px;
    border-style: none;
    border-radius: 20px;
    background-color: #5640ca;
    color: white;
    font-size: large;
    margin-bottom: 10px;
  }

`;
