import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { MdLocationOn, MdOutlineWhatsapp, MdLocalPhone, MdMail, MdOutlineWatchLater, MdImportExport } from "react-icons/md";
import { Homepage } from "./style";

import letterE from '../../assets/letterE.webp';
import letterV from '../../assets/letterV.webp';
import speed from '../../assets/metersSpeed.webp';
import cluster from '../../assets/cluster.webp';
import shield from '../../assets/shield.webp';

import { Link } from 'react-router-dom';

export default function Home() {  
  return(
    <>
      <Header page="home" />
      <Banner/>
      <Homepage className="flex">
        <div className="presentation">
          <h1>Escritório <span>Vilella</span></h1>
          <p>Atuamos no mercado como parceiros essenciais para empresas em todas as etapas de sua jornada.
            Nossa equipe de profissionais altamente qualificados nas áreas contábil, fiscal e trabalhista 
            esta pronta para oferecer assessoria de excelência e suporte dedicado e soluções sob medida para a sua empresa em todos ramos de atividades.</p>
        </div>
        <div className="bsc-boxes flex">
          <div className="bsc-boxes-vision flex-column transition">
            <div className="img">
              <img src={letterE} alt="Imagem cover para representar a Visão Empresarial"/>
            </div>
            <h3>Visão <span>Empresarial</span></h3>
            <p>Reconhecimento em soluções contábeis.</p>
            <button><Link to={"/about"}>Saiba Mais </Link></button>
          </div>
          <div className="bsc-boxes-values flex-column transition">
            <div className="img">
              <img src={letterV} alt="Imagem cover para representar os Nossos Valores"/>
            </div>
            <h3>Nossos <span>Valores</span></h3>
            <p>Transparência, Integridade e Responsabilidade.</p>
            <button><Link to={"/about"}>Saiba Mais </Link></button>

          </div>
        </div>
        <div className="history flex mobile">
          <div class="history-content flex-column">
            <h2>
              <span className="title-bigger">35</span>
              <span className="title-shorter">anos de <br/>excelência</span>
            </h2>
            <div className="history-text-paragraph">
              <p>Com anos de mercado, nossa experiência nos capacita a fornecer soluções 
              personalizadas para empresas de todos os portes e setores.</p>
              
              <p>Trabalhamos para garantir que nossos clientes estejam sempre em conformidade
              com todas as leis e regulamentos aplicáveis.</p>
            </div>
          </div>
          <div className="history-numbers">
              <div className="company">
                <span>+400</span>
                <p>Empresas Atendidas</p>
              </div>
              <div className="clients">
                <span>+1000</span>
                <p>Clientes Atendidos</p>
              </div>
          </div>
        </div>
        <div className="solutions flex mobile">
          <div className="solution-icon transition flex-column">
            <div className="solution-icon-img">
              <img src={speed} alt="Ícone de velocímetro"/>
            </div>
            <div className="solution-icon-text flex-column">
            <h3>Otimização</h3>
            <p>Aprimorar cada aspecto do seu negócio para alcançar a máxima eficiência.</p>
            </div>
          </div>
          <div className="solution-icon transition flex-column">
            <div>
              <img src={cluster} alt="Ícone de cluster"/>
            </div>
            <h3>Tecnologia</h3>
            <p>Proporcionar soluções inovadoras para atender às suas necessidades.</p>
          </div>
          <div className="solution-icon transition flex-column">
            <div>
              <img src={shield} alt="Ícone de escudo"/>
            </div>
            <h3>Responsabilidade</h3>
            <p>Abordagem proativa para garantir a conformidade com a LGPD.</p>
          </div>
        </div>

        <div className="contact flex mobile">
          <div className="find-us flex-column">    
            <h2>Entre em <span>contato</span></h2>
            <div className="address">
              <h4 className="find-title">Onde nos encontrar:</h4>
              <div className="social-item">
                <span className="item">
                  <MdLocationOn style={{fontSize: 32, color: "#00116f"}} />
                </span>
                <span> R. Mario Monteiro de França, 256 - Centro, Fartura/SP - CEP: 18870-030</span> 
              </div>
              <a className="social-item" href="tel:551433822052">
                <span className="item">
                  <MdLocalPhone style={{fontSize: 32, color: "#00116f"}} />
                </span>
                <span>(14) 3382-2052</span>
              </a>
              <a className="social-item" href="https://wa.me/5514997795080?text=Ol%C3%A1%2C+gostaria+de+falar+com+o+Escrit%C3%B3rio+Vilella" target="blank">
                <span className="item">
                  <MdOutlineWhatsapp style={{fontSize: 32, color: "#00116f"}} />
                </span>
                <span>(14) 99779-5080</span>
              </a>
              <a className="social-item" href="mailto:adm@evilella.com">
                <span className="item">
                  <MdMail style={{fontSize: 32, color: "#00116f"}} />
                </span>
                <span>adm@evilella.com</span>
              </a>
            </div>
            <div className="business-hours">
              <h4 className="find-title">Horário de Atendimento:</h4>
              <a className="social-item">
                <span className="item">
                  <MdOutlineWatchLater style={{fontSize: 32, color: "#00116f"}} />
                </span>
                <span>Segunda a sexta-feira: 9h às 11h | 13h às 16h.</span>
              </a>
            </div>
          </div>
          <div className="map-address flex">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.9730041908283!2d-49.51449542549472!3d-23.38919385528803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c1a540abcf309b%3A0x292c0f46692abb18!2sEscrit%C3%B3rio%20Cont%C3%A1bil%20Vilella!5e0!3m2!1spt-BR!2sbr!4v1714398045177!5m2!1spt-BR!2sbr" width="400" height="350" loading="lazy" frameborder="0"></iframe>
          </div>
        </div>

      </Homepage>
      <Footer/>
    </>
  )
}