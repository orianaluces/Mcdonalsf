import React from 'react'
import * as S from "./components/Header/Header_style";

import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div>
      <S.GlobalStyle />
      <Header/>
      <Main/>
      <Footer/>

    </div>
  )
}
