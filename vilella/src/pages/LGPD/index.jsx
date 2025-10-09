import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useState } from "react";

import LgpdGuide from "../../components/LgpdCompliance";
import Actions from "../../components/LgpdActions"
import Rights from "../../components/LgpdRights";
import LgpdForm from "../../components/LgpdForm";

import { Lgpdpage } from "./style"
import Theme from "../../styles/theme";

import db from "../../assets/lgpd/database.webp"

import { MdOutlineWhatsapp, MdMailOutline, MdSupervisedUserCircle, MdOutlineSupervisedUserCircle } from "react-icons/md";
import { FaBook, FaShieldAlt, FaRegCheckCircle, FaPencilAlt } from "react-icons/fa";
import { Fa1, Fa2, Fa3, Fa4, FaGraduationCap } from "react-icons/fa6"


const lgpdRights = [
  {
    title:"Direito de acesso",
    text:"Você pode solicitar informações sobre seus dados pessoais e com quem são compartilhados."
  },
  {
    title:"Consentimento",
    text:"O tratamento dos seus dados pessoais é definido conforme o seu consentimento."
  },
  {
    title:"Retificação",
    text:"É seu direito solicitar a correção de dados pessoais incorretos ou desatualizados."
  }
]

const lgpdActions = [
  {
    icon: <FaPencilAlt style={{fontSize: 32, color: "#fff"}}/>,
    number: <Fa1 style={{fontSize: 24, color: "#93c5ff"}}/>,
    title: "Coleta",
    text: "Solicitação de apenas informações necessárias",
    bgColor: Theme.colors.babyBlue
  },
  {
    icon: <FaShieldAlt style={{fontSize: 32, color: "#fff"}}/>,
    number: <Fa2 style={{fontSize: 24, color: "#1a3a8a"}}/>,
    title: "Controle",
    text: "Políticas de controle de acesso aos dados sensíveis",
    bgColor: Theme.colors.blue2

  },
  {
    icon: <FaBook style={{fontSize: 32, color: "#fff"}}/>,
    number: <Fa3 style={{fontSize: 24, color: "#f33"}}/>,
    title: "Auditoria",
    text: "Revisões internas de segurança e privacidade",
    bgColor: Theme.colors.red2
  },
  {
    icon: <FaGraduationCap style={{fontSize: 32, color: "#fff"}}/>,
    number: <Fa4 style={{fontSize: 24, color: "#759dcc"}}/>,    
    title: "Treinamentos",
    text: "Capacitação contínua da equipe em proteção de dados",
    bgColor: Theme.colors.blue3
  }
]

const lgpdCompliance = [
  {
    icon: <FaRegCheckCircle style={{fontSize: 24, color: "#0d2daa"}}/>,
    textContent: "Proteção contra ameaças cibernéticas",
  },
  {
    icon: <FaRegCheckCircle style={{fontSize: 24, color: "#0d2daa"}}/>,
    textContent: "Conformidade com leis e regulamentos",
  },
  {
    icon: <FaRegCheckCircle style={{fontSize: 24, color: "#0d2daa"}}/>,
    textContent: "Treinamento seguindo as diretrizes da LGPD",
  },
  {
    icon: <FaRegCheckCircle style={{fontSize: 24, color: "#0d2daa"}}/>,
    textContent: "Transparência ao trabalhar com dados pessoais",
  },
]


export default function LGPD() {  
  return(
    <>
      <Header page="lgpd"/>
      <Lgpdpage>
        <header className="flex" >
          <div className="outdoor flex-column">
            <h1>Lei Geral de Proteção de Dados Pessoais (LGPD) </h1>
            <p>Esclareça suas dúvidas a respeito da proteção e segurança dos seus dados. </p>
            <div className="link flex">
              <button> <a href="/lgpd#contact-us"> Fale Conosco</a></button>
            </div>
          </div>
          <div className="img flex">
            <img src={db} alt="Computador a gravar informações no banco de dados em nuvem" />
          </div>
        </header>

        <main className="law flex-column">
          <div className="law-view flex-column">
            <h1>Aplicação da LGPD</h1>
            <p>A Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) regula o uso, a coleta e armazenamento de dados pessoais, garantindo a privacidade e os direitos dos titulares.</p>  
            <div className="rights flex">
              {lgpdRights.map(service =>(
                <Rights                  
                  key={service.title}
                  title={service.title}
                  text={service.text}
                />
              ))}
            </div>
          </div>          
          <div className="compromise flex-column">
            <div className="compromise-title flex-column">
              <h2>Ações proativas</h2>
              <p>Medidas para garantir a conformidade com a LGPD e a proteção dos seus dados pessoais:</p>
            </div>
            <div className="office-actions flex">                        
              {lgpdActions.map(service => (
                <Actions
                  key={service.title}
                  icon={service.icon}
                  number={service.number}
                  title={service.title}
                  text={service.text}
                  bgColor={service.bgColor}
                />                
              ))}
            </div>
          </div>
        </main>
    
        <section className="embrasi flex-column">
          <h2>EMBRASI</h2>
          <div className="compliance flex">
            <div className="compliance-text flex-column">
              <h3>Compliance</h3>
              <p>Em parceria com a consultoria <a href="https://embrasi.com.br/" target="blank">EMBRASI</a>, aprimoramos nossas diretrizes internas para garantir a governança de dados e a plena conformidade com a LGPD.</p>
            </div>
            <div className="compliance-checks flex-column">
              {lgpdCompliance.map(service => (
                <LgpdGuide 
                  key={service.title}
                  icon={service.icon}
                  text={service.textContent}
                />
              ))}
            </div>
          </div>
        </section>      

        <section id="contact-us" className="contact-dpo flex-column">
          <div className="your-voice-matters flex-column">
            <h2>Sua voz importa</h2>
            <p>Fale conosco sobre seus dados</p>
          </div>
          
          <div className="contact-dpo-form flex">
            <div className="dpo flex-column">
              <div className="dpo-info flex-column">
                <div className="dpo-title flex-column">
                  <MdSupervisedUserCircle style={{fontSize: 80, color: "#93c5ff"}}/>
                  <h2>DPO</h2>
                  <span>Esclareça suas dúvidas sobre privacidade e proteção dos seus dados com nosso DPO (Data Protection Officer)</span>
                </div>
                <div className="dpo-icons flex-column">
                  <div className="dpo-icon flex-row">
                    <span>
                      <MdSupervisedUserCircle style={{fontSize: 24, color: "#93c5ff"}}/>
                    </span>
                    <a href="https://www.linkedin.com/in/joaohugoleda/" target="blank">
                      <span>João Hugo Leda de Carvalho</span>
                    </a>
                  </div>
                  <div className="dpo-icon flex-row">
                    <span>
                      <MdOutlineWhatsapp style={{fontSize: 24, color: "#25D366"}}></MdOutlineWhatsapp>
                    </span>
                    <span>(14) 99779-5003</span>
                    
                  </div>
                  <div className="dpo-icon flex-row">
                    <span>
                      <MdMailOutline style={{fontSize: 24, color: "#93c5ff"}}></MdMailOutline>
                    </span>
                    <span>suportevilella@gmail.com</span>
                  </div>
                </div>            
              </div>
              <div className="dpo-redirect flex-column">
                <button className="whatsapp"> <a href="https://wa.me/5514997795003?text=Estou%20buscando%20informa%C3%A7%C3%B5es%20sobre%20o%20tratamento%20dos%20meus%20dados.%20Pode%20me%20direcionar%20ao%20DPO%3F">Falar no Whatsapp</a></button>
                <button className="mail"> <a href="mailto:suportevilella@gmail.com">Enviar e-mail</a> </button>
              </div>
            </div>

            <div className="form flex-column">
              <h2>Formulário de contato LGPD</h2>              
              <div className="send-request flex-column">
                <LgpdForm/>
              </div>
            </div>

          </div>
        </section>
      </Lgpdpage>
      <Footer/>
    </>
  )

}