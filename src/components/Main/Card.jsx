
import * as S from "./Main_style";

export default function Card({ imagem, texto }) {
  return (
    <S.Card>
      <img src={imagem} alt="img" />
      <h3>{texto}</h3>
      <button>Clique aqui</button>
    </S.Card>
  );
}