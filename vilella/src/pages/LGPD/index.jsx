import Header from "../../components/Header"
import Footer from "../../components/Footer"

import db from "../../assets/lgpd/database.png"
import embrasi from "../../assets/lgpd/certificado.png"

import { MdLockOutline, MdOutlineWhatsapp, MdMail, MdOutlineWatchLater, MdGavel } from "react-icons/md";
import { FaUser, FaLayerGroup, FaBook, FaHandHolding, FaShieldAlt, FaCloudUploadAlt, FaRegEyeSlash, FaRegEye } from "react-icons/fa";

import { Link } from "react-router-dom"
import { Lgpdpage } from "./style"
import LgpdGuide from "../../components/LgpdGuide";


const lgpdGuideline = [
  {
    icon: <FaShieldAlt style={{fontSize: 32, color: "#00116f"}}></FaShieldAlt>,
    title: "Proteção",
    textContent: "contra ameaças cibernéticas",
  },
  {
    icon: <MdLockOutline style={{fontSize: 32, color: "#00116f"}}></MdLockOutline>,
    title: "Controle",
    textContent: "de acesso aos dados sensíveis",
  },
  {
    icon: <FaRegEyeSlash style={{fontSize: 32, color: "#00116f"}}></FaRegEyeSlash>,
    title: "Privacidade",
    textContent: "para coletar, usar e proteger",
  },
  {
    icon: <MdGavel style={{fontSize: 32, color: "#00116f"}}></MdGavel>,
    title: "Conformidade",
    textContent: "com leis e regulamentos",
  },
  {
    icon: <FaCloudUploadAlt style={{fontSize: 32, color: "#00116f"}}></FaCloudUploadAlt>,
    title: "Integridade",
    textContent: "e disponibilidade dos dados",
  },
  {
    icon: <FaHandHolding style={{fontSize: 32, color: "#00116f"}}></FaHandHolding>,
    title: "Responsabilidade",
    textContent: "em proteger seus ativos digitais",
  },
  {
    icon: <FaBook style={{fontSize: 32, color: "#00116f"}}></FaBook>,
    title: "Treinamento",
    textContent: "seguindo as diretrizes da LGPD",
  },
  {
    icon: <FaRegEye style={{fontSize: 32, color: "#00116f"}}></FaRegEye>,
    title: "Transparência",
    textContent: "ao trabalhar com dados pessoais",
  },
  {
    icon: <FaLayerGroup style={{fontSize: 32, color: "#00116f"}}></FaLayerGroup>,
    title: "Organização",
    textContent: "com procedimentos bem definidos",
  }
]

export default function LGPD() {
  return(
    <>
    <Header page="lgpd"/>
    <Lgpdpage>
    <header className="flex" >
      <div className="outdoor flex-column">
        <h1>Lei Geral de Proteção de Dados Pessoais (LGPD).</h1>
        <p>Esclareça dúvidas a respeito da proteção de seus dados. </p>
        <div className="link flex">
          <button> <a href="https://wa.me/5514997795003?text=Estou%20buscando%20informa%C3%A7%C3%B5es%20sobre%20o%20tratamento%20dos%20meus%20dados.%20Pode%20me%20direcionar%20ao%20DPO%3F" target="blank"> Fale Conosco</a></button>
        </div>
      </div>
      <div className="img flex">
        <img src={db} alt="Computador a gravar informações no banco de dados em nuvem" />
      </div>
    </header>

    <main className="law flex-column">
      <div className="law-view">
        <h1>Aplicação da <span>LGPD</span></h1>
        <p>Por meio da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), a legislação brasileira regula o uso, a coleta e armazenamento de dados pessoais, garantindo a privacidade e os direitos dos titulares.</p>  
      </div>
      
      <div className="owner-rights flex">
        <h2>Direitos do <span>Titular</span></h2>
        <div className="law-features flex">
          <div>
            <h3>Acesso aos dados</h3>
            <p>Você pode solicitar informações sobre seus dados pessoais.</p>  
          </div>        
          <div>
            <h3>Consentimento</h3>
            <p>O tratamento de seus dados é baseado em seu consentimento.</p>
          </div>        
          <div>
            <h3>Retificação</h3>
            <p>Você pode solicitar a correção de dados incompletos ou desatualizados.</p>
          </div> 
        </div>
      </div>
    </main>
 
    <div className="compliance flex-column">
      <div className="compliance-view">
        <h1>Compliance <span>Escritório Vilella</span></h1>
        <p>Em parceria com a consultoria EMBRASI, aprimoramos nossas diretrizes internas de forma a regulamentar veemente o cuidado no tratamento dos dados trabalhados e cumprimos nossa adequação a Lei com êxito. </p>
      </div>
    
      <div className="guidelines flex-column">
        <h2>Nossas <span>Diretrizes</span></h2>
        <div className="guide-features">
          {lgpdGuideline.map(service => (
            <LgpdGuide 
              key={service.title}
              icon={service.icon}
              title={service.title}
              text={service.textContent}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="dpo flex">
      <div className="dpo-info">
        <div className="dpo-title">
          <h1>DPO <span>Responsável</span></h1>
          <p>Para esclarecer dúvidas sobre o tratamento de seus dados ou exercer seus direitos como titular, entre em contato com nosso DPO:</p>
        </div>

        <div className="dpo-contact flex-column">
          <div className="dpo-icons flex-row">
            <span>
              <FaUser style={{fontSize: 32, color: "#00116f"}}></FaUser>
            </span>
            <a href="https://www.linkedin.com/in/joaohugoleda/" target="blank"><span>João Hugo Leda de Carvalho</span></a>
          </div>
          <div className="dpo-icons flex-row">
            <span>
              <MdOutlineWhatsapp style={{fontSize: 32, color: "#00116f"}}></MdOutlineWhatsapp>
            </span>
            <a href="https://wa.me/5514997795003?text=Estou%20buscando%20informa%C3%A7%C3%B5es%20sobre%20o%20tratamento%20dos%20meus%20dados.%20Pode%20me%20direcionar%20ao%20DPO%3F" target="blank"><span>(14) 99779-5003</span></a>
          </div>
          <div className="dpo-icons flex-row">
            <span>
              <MdMail style={{fontSize: 32, color: "#00116f"}}></MdMail>
            </span>
            <a href="mailto:suportevilella@gmail.com"><span>suportevilella@gmail.com</span></a>
          </div>
        </div>
      </div>
      
      <div className="img">
        <img src={embrasi} alt="Certificado de Compliance de LGPD do Escritório Vilella" />
      </div>
    </div>     

    </Lgpdpage>
    <Footer/>
    </>
  )

}