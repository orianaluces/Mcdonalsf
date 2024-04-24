import React from 'react'
import mmcdonals from "../../assets/mmcdonals.png";
import playstore from "../../assets/playstore.png";
import appstore from "../../assets/appstore.png";
import * as S from "./Footer_style";


export default function Footer() {
  return (
    <S.Footer>
        <div>
            <img src= {mmcdonals} alt="M de Mcdonals"/>
            <p>© McDonald’s 2024</p>
        </div>
        <section>
            <img className="app" src={playstore} alt= "PlayStore"/>
            <img className="app" src={appstore} alt= "AppStore"/>
        </section>
    </S.Footer>
  )
}

