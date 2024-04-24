import React, {useState, useEffect} from 'react'

import bigmac from "../../assets/bigmac.svg";
import batata from "../../assets/batata.svg";
import sorvete from "../../assets/sorvete.svg";
import mequinosofa from "../../assets/mequinosofa.png";
import restaurantes from "../../assets/restaurantes.png";
import trabajador from "../../assets/trabajador.png";

import * as S from "./Main_style";

import Card from "./Card";

export default function Main() {

    const [comida, setComida] = useState(bigmac)

    function substituir() {
        setComida("bigmac", "batata", "sorvete");
      }


      useEffect(() => {
        const elementos = document.querySelectorAll(".cambiarColor");
        
        elementos.forEach(elemento => {
          if (comida === bigmac) {
            elemento.style.backgroundColor = "#ffc72c";
            elemento.style.transition = "ease-in-out 0.8s";
          } else if (comida === batata) {
            elemento.style.backgroundColor = "#c98521";
          } else if (comida === sorvete) {
            elemento.style.backgroundColor = "#7c5e0a";
          }
        });
      }, [comida]); 
      


  return (
    <main>
       
      <S.Section>
        <div className= "cambiarColor">
          <img src={comida} className="principal" alt="" />
          <h1>BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI</span>?</h1>
        </div>

        <figure className= "cambiarColor">
          <img onClick= {(substituir) => {setComida(bigmac)}} src={bigmac} alt="Bigmac" />
          <img onClick= {(substituir) => {setComida(batata)}} src={batata} alt="Batata" />
          <img onClick={(substituir) => {setComida(sorvete)}} src={sorvete} alt="Sorvete" />
        </figure>

      </S.Section>

      <S.Fondo>
        <h2>Promoção</h2>
        
        <div className= "css">
        
          <Card imagem={mequinosofa} texto={"Que tal um #MéquiNoSofá?"} />
          <Card imagem={restaurantes} texto={"Venha conhecer nossa nova loja"} />
          <Card imagem={trabajador} texto={"Confira as medidas que o Méqui adotou!"} />
        </div>
      </S.Fondo>
    </main>
  )
}

