import { BannerContainer } from "./style";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

import entrance from "../../assets/entrance.webp";
import team from "../../assets/team.png";

export default function Banner() {
  return (
    <BannerContainer>
      <Carousel fade interval={30000}>
        
        {/* ======= ITEM 1 ======= */}
        <Carousel.Item>
          <section id="banner" className="banner-office">
            <div>

            <div className="banner flex wrapper office">
              <div className="banner-text flex-column">
                <div className="text flex">
                  <h2>Escritório Vilella</h2>
                  <div className="main-title flex-column">
                    <h1>Do registro do CNPJ à contabilidade completa</h1>
                    <p>Estamos com você  <span> em cada etapa</span></p>
                  </div>                  
                </div>
                <div className="button flex">
                  <button className="specialists">
                    <a href="https://wa.me/5514997795080" target="blank">Fale com nossos especialistas</a>
                  </button>
                  <button className="services">
                    <a href="/services">Ver serviços</a>
                  </button>
                </div>
              </div>              
              <div className="image flex">
                <img src={entrance} alt="Fachada do Escritório Vilella" />
              </div>
            </div>

            </div>
          </section>
        </Carousel.Item>

        {/* ======= ITEM 2 ======= */}
        <Carousel.Item interval={30000}>
          <section id="banner" className="banner-team">
            <div>
              <div className="banner flex wrapper team">
              <div className="banner-text flex-column">
                <div className="text flex">
                  <div className="banner-team-title flex">
                    <h1><span className="years">35</span> anos de <br /> excelência</h1>
                  </div>                  
                  <p>Há 35 anos, nossa excelência é construída por pessoas que fazem a diferença todos os dias.</p>
                </div>
                <div className="button flex">
                  <button className="our-team">
                    <a href="/team">Veja quem faz acontecer</a>
                  </button>
                  <button className="work-with-us">
                    <a href="mailto:contato@evilella.com?subject=Curr%C3%ADculo%20-%20Trabalhe%20Conosco&body=Olá,%20gostaria%20de%20enviar%20meu%20currículo%20para%20futuras%20oportunidades.">Trabalhe Conosco</a>

                  </button>
                </div>
              </div>   
              <div className="image">
                <img src={team} alt="Fachada do Escritório Vilella" />
              </div>
            </div>
            </div>
            
          </section>
        </Carousel.Item>
      </Carousel>
    </BannerContainer>
  );
}
