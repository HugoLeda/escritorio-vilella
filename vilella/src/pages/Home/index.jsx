

import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { MdLocationOn, MdOutlineWhatsapp, MdLocalPhone, MdMail, MdImportExport } from "react-icons/md";
import { Homepage } from "./style";

export default function Home() {
  return(
    <>
      <Header/>      
      <Homepage>
        <div className="presentation-text">
          <h1>Escritório Vilella</h1>
          <p>Atuamos no mercado como parceiros essenciais para empresas em todas as etapas de sua 
            jornada. Nossa equipe de profissionais altamente qualificados nas áreas contábil, fiscal, trabalhista 
            e de consultoria está pronta para oferecer suporte dedicado e soluções sob medida para a sua empresa.</p>
        </div>
        <div className="bsc-boxes flex">
          <div className="bsc-boxes-vision flex-column">
            <h3>Visão <span>Empresarial</span></h3>
            <p>Reconhecimento em soluções contábeis.</p>
          </div>
          <div className="bsc-boxes-values">
            <h3>Nossos <span>Valores</span></h3>
            <p>Transparência, Integridade e Responsabilidade.</p>
          </div>
        </div>
        <div className="history">
          <h2><span>30</span> anos de excelência</h2>
          <div className="history-text">  
            <div className="history-text-paragraph">
              <p>Com anos de mercado, nossa experiência nos capacita a fornecer soluções 
              personalizadas para empresas de todos os portes e setores.</p>
              <p>Trabalhamos para garantir que nossos clientes estejam sempre em conformidade
              com todas as leis e regulamentos aplicáveis.</p>
            </div>
            <div className="history-text-numbers">
              <div>
                <span>+400</span>
                <p>empresas atendidas</p>
              </div>
              <div>
                <span>+1000</span>
                <p>clientes atendidos</p>
              </div>
            </div>
          </div>
        </div>
        <div className="solution-icons">
          <div className="solution-icon-meters">
            <img src="src\assets\metersSpeed.png" alt="Speed"/>
            <h3>Otimização</h3>
            <p>Aprimorar cada aspecto do seu projeto ou negócio para alcançar a máxima eficiência.</p>
          </div>
          <div className="solution-icon-cluster">
            <img src="src\assets\cluster.png" alt="Speed"/>
            <h3>Tecnologia</h3>
            <p>Proporcionar soluções inovadoras que atendam às suas necessidades.</p>
          </div>
          <div>
            <img src="src\assets\shield.png" alt="Speed"/>
            <h3>Responsabilidade</h3>
            <p>Abordagem proativa para garantir a conformidade com a LGPD.</p>
          </div>
        </div>  
        <div className="general-contact">
          <div className="find-us">
            <h2>Entre em <span>contato</span></h2>
            <div className="social-item-location">
              <MdLocationOn />
              <span>R. Mario Monteiro de França, 256 - Centro,
                Fartura/SP - CEP: 18870-030</span> 
            </div>
            <div className="social-item-phone">
              <MdLocalPhone /> 
              <span>(14) 3382-2052</span>
            </div>
            <div className="social-item-whatsapp">
              <MdOutlineWhatsapp />
              <span>(14) 99779-5080</span>
            </div>
            <div className="social-item-email">
              <MdMail /> 
              <span>adm@evilella.com</span>
            </div>
            <div className="office-hours">
              <h4>Horário de Atendimento:</h4>
              <p>De segunda à sexta-feira, das 9h às 17h.</p>
            </div>
          </div>
          <div className="map-address"><p>hey, im address</p></div>
        </div>
      </Homepage>
      <Footer/>
    </>
  )
}