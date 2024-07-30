import { BannerContainer } from "./style";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import homeCover from '../../assets/homeCover.webp'
import darkBlueBG from '../../assets/blueVilella.webp'
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <BannerContainer>
      <div className="cover">
        <Carousel >
          <Carousel.Item interval={5000}>
            <img className="cover-img" 
                 src={homeCover} alt="Foto da fachada do Escritório Vilella"
            />
            <Carousel.Caption className="st-caption display">
              <h3>Contabilidade de Confiança</h3>
              <p>Descubra como podemos ajudar você a prosperar financeiramente.</p>
              <button className="more-aboutus">
                <Link to={"/services"}> Saiba Mais </Link>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="cover-img" 
                 src={darkBlueBG} alt="Imagem com a logo do Escritório Vilella"
            />
            <Carousel.Caption className="nd-caption display">
              <h3>Expertise e Experiência</h3>
              <p>Temos o conhecimento necessário para oferecer o melhor suporte possível.</p>
              <button className="more-services">
                <Link to={"/team"}> Saiba Mais </Link>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </BannerContainer>
  )
}
  