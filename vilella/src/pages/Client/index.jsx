import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Clientpage } from "./style";

import ClientCenterStep from "../../components/ClientCenterStep";
import ClientCenterGain from "../../components/ClientCenterGain";
import ClientCenterFaq from "../../components/ClientCenterFaq";

import { FaShieldAlt } from "react-icons/fa";

import cloud from "../../assets/client/cloudStorage.webp"
import apponvio from "../../assets/apponvio.png"
import playstore from "../../assets/client/playstore.webp"
import appstore from "../../assets/client/appstore.webp"


import { Fa1, Fa2, Fa3, Fa4, FaArrowRight, FaFolderOpen, FaMobileScreen, FaRegBell, FaRegBuilding, FaRegClock, FaRegMessage, FaRegUser} from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

import { useEffect, useRef } from "react";

const tutorialSteps = [
  {
    number: <Fa1 style={{fontSize: 32, color: "#fafafa"}}></Fa1>,  
    icon: <MdMailOutline style={{fontSize: 48, color: "#759dcc"}}></MdMailOutline>,    
    title: "Receba suas credenciais",
    text: "Enviadas por e-mail"
  },
  {
    number: <Fa2 style={{fontSize: 32, color: "#fafafa"}}></Fa2>,  
    icon: <FaRegUser style={{fontSize: 48, color: "#759dcc"}}></FaRegUser>,
    title: "Acesse sua conta",
    text: "Configure seu perfil"

  },
  {
    number: <Fa3 style={{fontSize: 32, color: "#fafafa"}}></Fa3>, 
    icon: <FaRegBell style={{fontSize: 48, color: "#759dcc"}}></FaRegBell>,    
    title: "Personalize seus alertas",
    text: "Configure notificações"

  },
  {
    number: <Fa4 style={{fontSize: 32, color: "#fafafa"}}></Fa4>,   
    icon: <FaRegBuilding style={{fontSize: 48, color: "#759dcc"}}></FaRegBuilding>, 
    title: "Explore suas empresas",
    text: "Visualize documentos"
  }
]

const appFeatures = [
  {
    icon: <FaRegClock style={{fontSize: 32, color: "#a8d0ff"}}></FaRegClock>,    
    title: "Acesso 24/7",
    text: "Seus documentos sempre disponíveis"
  },
  {
    icon: <FaShieldAlt style={{fontSize: 32, color: "#a8d0ff"}}></FaShieldAlt>,    
    title: "Segurança",
    text: "Seus dados protegidos por criptografia"
  },
  {
    icon: <FaFolderOpen style={{fontSize: 32, color: "#a8d0ff"}}></FaFolderOpen>,    
    title: "Organização",
    text: "Todos os documentos em um único lugar"
  },
  {
    icon: <FaRegBell style={{fontSize: 32, color: "#a8d0ff"}}></FaRegBell>,    
    title: "Notificações",
    text: "Receba alerta de vencimentos"
  },
  {
    icon: <FaRegMessage style={{fontSize: 32, color: "#a8d0ff"}}></FaRegMessage>,    
    title: "Comunicação",
    text: "Canal direto com o escritório"
  },
  {
    icon: <FaMobileScreen style={{fontSize: 32, color: "#a8d0ff"}}></FaMobileScreen>,    
    title: "Mobilidade",
    text: "Aplicativo para Android e iOS"
  }

]

const clientFaq = [
  {
    ask:"Para que serve o portal do cliente?",
    answer: "O Onvio Portal do Cliente é nossa ferramenta em nuvem de última geração, projetada para revolucionar a comunicação com nosso escritório, eliminando os riscos da comunicação tradicional. Através do portal, é possível visualizar documentos e solicitar serviços ao escritório, mantendo uma comunicação direta e protegida por criptografia.", 
  },
  {
    ask:"Como acessar o portal pela primeira vez?",
    answer:"Você receberá um e-mail ''Registrar agora'' convidando a habilitar seu usuário e deve seguir o link para criar sua senha da plataforma. No seu primeiro acesso, será solicitado um segundo método de autenticação (MFA) para adicionar uma camada extra de segurança à sua conta."
  },
  {
  ask: "Posso acessar o portal pelo celular?",
  answer: `
    Sim, o Onvio Portal do Cliente pode ser acessado pelo navegador do seu celular,
    ou através do aplicativo oficial, disponível para 
    <a href="https://play.google.com/store/apps/details?id=com.thomsonreuters.cs.onvio.clientcenter&hl=pt_BR" target="_blank">Android</a>
    e
    <a href="https://apps.apple.com/us/app/onvio-client-center/id1050812390" target="_blank">iOS</a>.
    Recomendamos a instalação do aplicativo para receber notificações de vencimentos e
    para acessar documentos da sua empresa com mais agilidade.
  `
},
  {
    ask:"Como recebo notificações sobre vencimentos?",
    answer:"Enviamos notificações por e-mail sempre que uma nova guia é disponibilizada no portal. Além disso, ao utilizar o aplicativo no seu celular, você pode ativar as notificações para receber alertas de vencimentos diretamente no seu dispositivo, garantindo que nada passe despercebido."
  }
]


export default function Client() {

  
  /*class .scroll-effect start*/

  const lastScrollY = useRef(0);

  useEffect(() => {
    let scrollDirection = "down";

    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        scrollDirection = "down";
      } else {
        scrollDirection = "up";
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) {
            el.classList.remove("fade-up", "fade-down");

            if (scrollDirection === "down") {
              el.classList.add("visible", "fade-up");
            } else {
              el.classList.add("visible", "fade-down");
            }
          } else {
            el.classList.remove("visible", "fade-up", "fade-down");
          }
        });
      },
      {
        threshold: 0.01,
      }
    );

    const elements = document.querySelectorAll(".scroll-effect");
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  /* class .scroll-effect END*/



  return (
    <>
      <Header page="client-center"/>
      <Clientpage>
        <header className="flex-column">
          <div className="outdoor-wrapper flex wrapper">
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
        
        <main className="">
        
          <div className="access flex-column">
            <div className="tutorial-wrapper flex-column wrapper">
              <h2 className="scroll-effect">Vamos Começar?</h2>
              <p className="scroll-effect">Aprenda em minutos com nossos tutoriais completos!</p>
              <div className="tutorial flex">
                <div className="desktop-tutorial flex-column scroll-effect">
                  <iframe src="https://www.youtube.com/embed/lmcjOtB-oJQ?si=kmQa47huf1cPVCTX" title="Tutorial Portal do Cliente Desktop" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  <div className="tutorial-description flex-column">
                    <span>Tutorial 01: Desktop</span>
                    <p>Veja como acessar e utilizar o Onvio Portal do Cliente no seu computador.</p>
                  </div>
                </div>
                <div className="mobile-tutorial flex-column scroll-effect">
                  <iframe src="https://www.youtube.com/embed/F1TkfFRHKXg?si=c2R8vtZKRtpc3G58" title="Tutorial Portal do Cliente Aplicativo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  <div className="tutorial-description flex-column">
                    <span>Tutorial 02: Smartphone</span>
                    <p>Veja como baixar e utilizar o aplicativo Onvio Portal do Cliente no seu dispositivo móvel.</p>
                  </div>
                </div>
              </div>                
            </div> 
          </div>

          <div className="steps-section flex-column">
            <div className="steps flex-column wrapper">                
              <h2 className="scroll-effect">Como funciona?</h2>
              <div className="flow flex scroll-effect"> 
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
                        <span><FaArrowRight style={{fontSize: 32, color: "#a8d0ff"}}></FaArrowRight></span>
                      </div>
                    )}                    
                  </>
                ))}   
              </div>
            </div>

          </div>
        </main>
        
        <section className="gains-section flex-column">
          <div className="gains flex-column wrapper">
            <h2 className="scroll-effect">Benefícios</h2>
            <div className="features flex"> 
              {appFeatures.map(service => (
                <ClientCenterGain
                  icon={service.icon}
                  title={service.title}
                  text={service.text}
                />
              ))}    
            </div>
          
          </div>          
        </section>

        <section className="faq-section flex-column">
          <div className="faq-section flex-column wrapper">            
            <h2 className="scroll-effect">Perguntas Frequentes</h2>
            <div className="faq-items">
              {clientFaq.map(service => (
                <ClientCenterFaq
                  key={service.ask}
                  ask={service.ask}
                  answer={service.answer}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="sign-up-section flex-column">
          <div className="sign-up flex wrapper"> 
            <div className="sign-up-cta flex-column">
              <div className="sign-up-text flex-column">
                <h2 className="scroll-effect">Pronto para começar?</h2>
                <p className="scroll-effect">Faça agora o download do Portal do Cliente e aproveite seus benefícios!</p>
              </div>            
              <div className="link flex">
                <button className="client-center scroll-effect"> <a href="https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome" target="blank">Acessar Portal</a></button>
                <button className="client-center help scroll-effect"> <a href="https://wa.me/14997795003" target="_blank">Solicitar acesso</a></button>
              </div>
            </div> 
            <div className="client-center-download flex-column">
              <img src={apponvio} alt="Imagem de armazenamento em nuvem do Onvio Portal do Cliente" className="scroll-effect"/>  
              <div className="download-options flex scroll-effect">
                <a href="https://apps.apple.com/us/app/onvio-client-center/id1050812390" target="blank">
                  <img src={appstore} alt="" className="appstore"/>
                </a>              
                <a href="https://play.google.com/store/apps/details?id=com.thomsonreuters.cs.onvio.clientcenter&hl=pt_BR" target="blank">
                  <img src={playstore} alt="" className="playstore"/>
                </a>
              </div>            
            </div>   
          </div>
                
        </section>

      </Clientpage>      
      <Footer/>    
    </>
  )
}