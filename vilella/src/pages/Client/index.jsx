import { useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Clientpage } from "./style";

import ClientCenterStep from "../../components/ClientCenterStep";
import ClientCenterGain from "../../components/ClientCenterGain";
import ClientCenterFaq from "../../components/ClientCenterFaq";

import { FaUser, FaLayerGroup, FaBook, FaHandHolding, FaShieldAlt, FaCloudUploadAlt, FaRegEyeSlash, FaRegEye, FaFolder, FaTimes, FaUserAlt } from "react-icons/fa";

import cloud from "../../assets/client/cloudStorage.webp"
import login from "../../assets/client/login.webp"
import select from "../../assets/client/select.webp"
import grid from "../../assets/client/grid.webp"
import { Fa1, Fa2, Fa3, Fa4, FaArrowRight, FaFolderOpen, FaMobileScreen, FaRegBell, FaRegBuilding, FaRegClock, FaRegMessage, FaRegUser} from "react-icons/fa6";
import { MdMail, MdMailOutline } from "react-icons/md";


const tutorialSteps = [
  {
    number: <Fa1 style={{fontSize: 32, color: "#fafafa"}}></Fa1>,  
    icon: <MdMailOutline style={{fontSize: 48, color: "#93c5ff"}}></MdMailOutline>,    
    title: "Receba suas credenciais",
    text: "Enviadas por e-mail",
    arrow: <FaArrowRight style={{fontSize: 32, color: "#93c5ff"}}></FaArrowRight>,
  },
  {
    number: <Fa2 style={{fontSize: 32, color: "#fafafa"}}></Fa2>,  
    icon: <FaRegUser style={{fontSize: 48, color: "#93c5ff"}}></FaRegUser>,
    title: "Configure seu perfil",
    text: "Acesse sua conta",
    arrow: <FaArrowRight style={{fontSize: 32, color: "#93c5ff"}}></FaArrowRight>,

  },
  {
    number: <Fa3 style={{fontSize: 32, color: "#fafafa"}}></Fa3>, 
    icon: <FaRegBell style={{fontSize: 48, color: "#93c5ff"}}></FaRegBell>,    
    title: "Configure notificações",
    text: "Personalize seus alertas",
    arrow: <FaArrowRight style={{fontSize: 32, color: "#93c5ff"}}></FaArrowRight>,

  },
  {
    number: <Fa4 style={{fontSize: 32, color: "#fafafa"}}></Fa4>,   
    icon: <FaRegBuilding style={{fontSize: 48, color: "#93c5ff"}}></FaRegBuilding>, 
    title: "Explore suas empresas",
    text: "Visualize seus documentos",
  }
]

const appFeatures = [
  {
    icon: <FaRegClock style={{fontSize: 50, color: "#93c5ff"}}></FaRegClock>,    
    title: "Acesso 24/7",
    text: "Seus documentos sempre disponíveis"
  },
  {
    icon: <FaShieldAlt style={{fontSize: 50, color: "#93c5ff"}}></FaShieldAlt>,    
    title: "Segurança",
    text: "Seus dados protegidos por criptografia"
  },
  {
    icon: <FaFolderOpen style={{fontSize: 50, color: "#93c5ff"}}></FaFolderOpen>,    
    title: "Organização",
    text: "Todos os documentos em um único lugar"
  },
  {
    icon: <FaRegBell style={{fontSize: 50, color: "#93c5ff"}}></FaRegBell>,    
    title: "Notificações",
    text: "Alerta de vencimentos"
  },
  {
    icon: <FaRegMessage style={{fontSize: 50, color: "#93c5ff"}}></FaRegMessage>,    
    title: "Comunicação",
    text: "Canal direto com o escritório"
  },
  {
    icon: <FaMobileScreen style={{fontSize: 50, color: "#93c5ff"}}></FaMobileScreen>,    
    title: "Mobilidade",
    text: "Aplicativo para Android e iOS"
  }

]

const clientFaq = [ /*adicionar transition*/
  {
    ask:"Para que serve o portal do cliente?",
    answer: "O Onvio Portal do Cliente é nossa ferramenta em nuvem de última geração, projetada para revolucionar a comunicação com nosso escritório, eliminando os riscos da comunicação tradicional. Através do portal é possível visualizar documentos e solicitar serviços ao escritório, mantendo uma comunicação direta e protegida por criptografia.", 
  },
  {
    ask:"Como acessar o portal pela primeira vez?",
    answer:"Você receberá um e-mail ''Registrar agora'' convidando a habilitar seu usuário e deve seguir o link para criar sua senha da plataforma. No seu primeiro acesso, será solicitado um segundo método de autenticação (MFA) adicionando uma camada extra de segurança à sua conta."
  },
  {
    ask:"Posso acessar o portal pelo celular?",
    answer:"Sim, o Onvio Portal do Cliente pode ser acessado pelo navegador do seu celular, ou através do aplicativo oficial, disponível para Android e iOS. Recomendamos a instalação do aplicativo para receber notificações de vencimentos e para acessar documentos da sua empresa com mais agilidade."
  },
  {
    ask:"Como recebo notificações sobre vencimentos?",
    answer:"Enviamos notificações por e-mail sempre que uma nova guia é disponibilizada no portal. Além disso, ao utilizar o aplicativo no seu celular, você pode ativar as notificações para receber alertas de vencimentos diretamente no seu dispositivo, garantindo que nada passe despercebido."
  }
]


export default function Client() {
  return (
    <>
      <Header page="client-center"/>
      <Clientpage>
        <header className="flex-column">
          <div className="outdoor-wrapper flex">
            <div className="outdoor flex-column">
              <h1>Portal do Cliente <br /> <span>Escritório Vilella </span></h1>
              <h2>Sua contabilidade na palma da mão</h2>
              <p>Acesse documentos, informações fiscais e muito mais a qualquer hora em qualquer lugar.</p>
              <div className="link flex">
                <button className="client-center"> <a href="https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome" target="blank">Acessar Portal</a></button>
                <button className="client-center help"> <a href="https://wa.me/14997795003" target="_blank"> Solicitar Acesso </a></button>
              </div>
            </div> 
            <div className="img flex">
              <img src={cloud} alt="Imagem de armazenamento em nuvem do Onvio Portal do Cliente"/>
            </div>
          </div>
        </header>
        
        <main className="flex-column">
        
          <div className="access flex-column">
            <div className="tutorial-wrapper flex-column">
              <h2>Vamos Começar?</h2>
              <p>Aprenda em minutos com nossos tutoriais completos!</p>
              <div className="tutorial flex">
                <div className="desktop-tutorial flex-column">
                  <iframe src="https://www.youtube.com/embed/lmcjOtB-oJQ?si=kmQa47huf1cPVCTX" title="Tutorial Portal do Cliente Desktop" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  <div className="tutorial-description flex-column">
                    <span>Tutorial 01: Desktop</span>
                    <p>Veja como acessar e utilizar o Onvio Portal do Cliente no seu computador.</p>
                  </div>
                </div>
                <div className="mobile-tutorial flex-column">
                  <iframe src="https://www.youtube.com/embed/F1TkfFRHKXg?si=c2R8vtZKRtpc3G58" title="Tutorial Portal do Cliente Aplicativo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  <div className="tutorial-description flex-column">
                    <span>Tutorial 02: Smartphone</span>
                    <p>Veja como baixar e utilizar o aplicativo Onvio Portal do Cliente no seu dispositivo móvel.</p>
                  </div>
                </div>
              </div>                
            </div> 
          </div>

          <div className="steps flex-column">
            <h2>Como funciona?</h2>

            <div className="flow flex"> 
              {tutorialSteps.map(service => (
                <>
                  <ClientCenterStep
                    number={service.number}
                    icon={service.icon}
                    title={service.title}
                    text={service.text}                      
                  />
                  {service.title != 'Explore suas empresas' && (
                    <div className="flow-next flex">
                      <span><FaArrowRight style={{fontSize: 32, color: "#93c5ff"}}></FaArrowRight></span>
                    </div>
                  )}                    
                </>
              ))}   
            </div>
          </div>
        </main>
        
        <section className="gains flex-column">          
          <h2>Benefícios</h2>
          {/*<p>Reformular os beneficios no componente ClientCenterGains</p>*/}
          <div className="features flex"> 
            {appFeatures.map(service => (
              <ClientCenterGain
                icon={service.icon}
                title={service.title}
                text={service.text}
              />
            ))}    
          </div>
        </section>

        <section className="faq-section flex-column">
          <h2>Perguntas Frequentes</h2>
          {/*<p>Precisa fixar o tamanho, adicionar transition, etc.</p>*/}

          <div className="faq-items">
            {clientFaq.map(service => (
              <ClientCenterFaq
                key={service.ask}
                ask={service.ask}
                answer={service.answer}
              />
            ))}
          </div>
        </section>

        <section className="sign-up flex-column">
          <h2>Pronto para começar?</h2>
          <div className="link flex">
            <button className="client-center"> <a href="https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome" target="blank">Acessar Portal</a></button>
            <button className="client-center help"> <a href="https://wa.me/14997795003" target="_blank">Solicitar acesso</a></button>
          </div>
        </section>

      </Clientpage>      
      <Footer/>    
    </>
  )
}