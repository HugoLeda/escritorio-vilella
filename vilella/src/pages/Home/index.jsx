

import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { MdLocationOn, MdOutlineWhatsapp, MdLocalPhone, MdMail, MdImportExport } from "react-icons/md";
import { Homepage } from "./style";

export default function Home() {
  return(
    <>
      <Header/>
      <Banner/>
      <Homepage>
      <div className="presentation-text">
        <h1>Escritório Vilella</h1>
        <p>Atuamos no mercado como parceiros essenciais para empresas em todas as etapas de sua 
          jornada. Nossa equipe de profissionais altamente qualificados nas áreas contábil, fiscal, trabalhista 
          e de consultoria está pronta para oferecer suporte dedicado e soluções sob medida para a sua empresa.</p>
      </div>
      <div className="bsc-boxes">
        <div className="bsc-boxes-vision">
          <h2>Visão <span>Empresarial</span></h2>
          <p>Reconhecimento em soluções contábeis.</p>
        </div>
        <div className="bsc-boxes-values">
          <h2>Nossos <span>Valores</span></h2>
          <p>Transparência, Integridade e Responsabilidade.</p>
        </div>
      </div>
      <div className="history-text">
        <h2>30 <span>anos de excelência</span></h2>
        <p>Com anos de mercado, nossa experiência nos capacita a fornecer soluções 
          personalizadas para empresas de todos os portes e setores.</p>
        <p>Trabalhamos para garantir que nossos clientes estejam sempre em conformidade
           com todas as leis e regulamentos aplicáveis.</p>
        <div className="history-text-numbers">
          <em><span>+400</span>empresas atendidas</em>
          <em><span>+1000</span>clientes atendidos</em>
        </div>
        <div className="solution-icons">
          <h3>Otimização</h3>
          <p>Aprimorar cada aspecto do seu projeto ou negócio para alcançar a máxima eficiência.</p>
          <h3>Tecnologia</h3>
          <p>Proporcionar soluções inovadoras que atendam às suas necessidades.</p>
          <h3>Responsabilidade</h3>
          <p>Abordagem proativa para garantir a conformidade com a LGPD.</p>
        </div>
      </div>
      <div className="general-contact">
        <div className="find-us">
          <div className="">
            <MdLocationOn />
            <span>R. Mario Monteiro de França, 256 - Centro, Fartura/SP - CEP: 18870-030</span> 
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
        </div>
        <div className="office-hours">
          <h4>Horário de Atendimento:</h4>
          <p>De segunda à sexta-feira, das 9h às 17h.</p>
        </div>
        <div className="map-address"></div>
      </div>
      </Homepage>
      <Footer/>
    </>
  )
}