import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

 * {
     margin: 0;
     padding: 0;
     box-sizing:border-box;
     font-family: Roboto; 
    }

`;

export const Header = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  height: 15vh;
  align-items: center;

  .mmcdonals{
    width: 60px;
    height: 51px;
    margin: 7vh;
    }

  section{
    display: flex;
    font-size: 12px;
    width: 28vw;
    justify-content: space-evenly;
    margin-right: 5vw;
  }

  img{
    width: 26px;
    height: 32px;
  }

  div{
    
    width: 15vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .mequi{
    background-color: #FFC72C;
    border-radius: 8px;

  }
`;