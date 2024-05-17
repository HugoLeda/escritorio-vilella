import { BannerContainer } from "./style";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import homeCover from '../../assets/homeCover.webp'
import darkBlueBG from '../../assets/darkBlueBG.webp'

export default function Banner() {
  return (
    <BannerContainer>
      <div className="cover">
        <Carousel >
          <Carousel.Item interval={120000}>
            <img
              className="cover-img" 
              src={homeCover} alt="Foto da fachada do Escritório Vilella"
            />
          <Carousel.Caption className="st-caption">
            <h3>Contabilidade de Confiança</h3>
            <p>Descubra como podemos ajudar você a prosperar financeiramente.</p>
            <button className="more-aboutus">Saiba Mais</button>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={120000}>
            <img
              className="cover-img" 
              src={darkBlueBG} alt="cover-II"
            />
            <Carousel.Caption className="rd-caption">
              <div className="rd-caption-text">
                <h3>Expertise e Experiência</h3>
                <p>Temos o conhecimento necessário para oferecer o melhor suporte possível.</p>
              </div>
              <div className="rd-caption-button">
                <button className="more-services">Saiba Mais</button>
              </div>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </BannerContainer>
  )
}
  