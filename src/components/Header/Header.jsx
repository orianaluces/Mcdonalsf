import React from 'react';
import * as S from "./Header_style";
import mmcdonals from "../../assets/mmcdonals.png";
import celapp from "../../assets/celapp.svg";
import celrojo from "../../assets/celrojo.svg";

export default function Header() {

  return (
    <S.Header>
        <img className= "mmcdonals" src={mmcdonals} alt="M de Mcdonals"/>

        <section>
          <div>
              <img src={celapp} alt="" />
              <h3>Baixe o App</h3>
          </div>
          <div className="mequi">
              <h3>Peça seu Méqui</h3>
              <img src={celrojo} alt="" />
          </div>
        </section>
    </S.Header>
  )
}

