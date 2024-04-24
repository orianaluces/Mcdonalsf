import styled from "styled-components";

export const Section = styled.section`
 
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  height: 600px;

  background-color: #ffc72c;

  div {
  
    display: flex;
    align-items: center;
    width: 100%;
    color: white;
    height: 100%;
  }

 
  span{
    color: red;
  }

  .principal{
    width: 324.04px;
    height: 300px;
    margin: 35px;

  }

  h1{
    margin: 0 80px;
    font-size: 5.5vw;
  }

  figure{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }

  img {
    width: 118.57px;
    height: 100px;

  }

  .bigmac {
    width: 10vw;
  }

  `;

export const Fondo = styled.section`

    background-color: #FEB706;
    height: 40vw;
    padding-top: 10vh;
    

    h2{
      color: white;
      font-size: 32px;
      text-align: center;
    }

    .css{
      display: flex;
      justify-content: space-around;
      text-align: center;
      padding-top: 10vh;
    }

`

export const Card = styled.div`
  background-color: white;
  border: solid black 0,5px;
  width: 20vw;
  border-radius: 7px;
  color: black;
  margin: 3vh;
  

    img{
      width: 100%;
    }

    button{
      background-color: #FEB706;
      border-radius: 3px;
      border: none;
      margin: 3vh 0 3vh 0;
      font-size: 14px;
    }
`