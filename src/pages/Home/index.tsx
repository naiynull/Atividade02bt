import * as S from './styles'
import TruckLeft from "../../assets/truckleft.png"
import TruckRight from "../../assets/truckright.png"
import  meme       from "../../assets/oi.jpg"
import  meme1      from "../../assets/01.jpg"
import  meme2      from "../../assets/02.jpg"
import  meme3      from "../../assets/03.jpg"
import  meme4      from "../../assets/04.jpg"
import  meme5      from "../../assets/ww.jpg"

export function Home() {
  return (
    <S.Section>
      <S.geralcam>
  <S.campag1>
      <img src={TruckLeft} alt="Caminhão na esquerda" />
      </S.campag1>
      <S.campag1>
      <img src={TruckRight} alt="Caminhão na direita" />
      </S.campag1>
      <S.campag1>
      <img src={meme1} alt="meme"/>
      </S.campag1>
      <S.campag1>
      <img src={meme2} alt="meme"/>
      </S.campag1>
      <S.campag1>
      <img src={meme3} alt="meme"/>
      </S.campag1>
      <S.campag1>
      <img src={meme4} alt="meme"/>
      </S.campag1>
      <S.campag1>
      <img src={meme5} alt="meme"/>
      </S.campag1>
    </S.Section>
  )
}
