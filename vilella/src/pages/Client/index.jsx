import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Clientpage } from "./style";

import ClientCenterStep from "../../components/ClientCenterStep";
import ClientCenterGain from "../../components/ClientCenterGain";

import cloud from "../../assets/client/cloudStorage.webp"
import login from "../../assets/client/login.webp"
import select from "../../assets/client/select.webp"
import grid from "../../assets/client/grid.webp"
import available from "../../assets/client/cloudAvailable.webp"
import key from "../../assets/client/key.webp"
import folders from "../../assets/client/folders.webp"
import playstore from "../../assets/client/playstore.webp"


const tutorialSteps = [
  {
    img: login,
    title: "Acessar o Portal do Cliente",
    text: "Acessar o Portal do Cliente através do link, entrar e inserir as suas credenciais cadastradas pelo escritório, ou solicitar cadastro do seu e-mail conosco.",
  },
  {
    img: select,
    title: "Buscar sua empresa",
    text: "Pesquisar pelo nome da sua empresa por meio do filtro de seleção de empresas e confirmar ao visualizar as informações correspondentes.",
  },
  {
    img: grid,
    title: "Sobre o Portal do Cliente",
    text: "Dentro do Portal do Cliente é possível visualizar vencimentos de guias, acompanhar notícias do escritório, solicitar documentos e muito mais!",
  }
]

const appFeatures = [
  {
    id: 1,
    img: available,
    alt: "Ícone de armazenamento em nuvem",
    text: "Acesso instantâneo aos seus dados a qualquer momento e em qualquer dispositivo."
  },
  {
    id: 2,
    img: key,
    alt: "Ícone de chave de acesso",
    text: "Tecnologia avançada para proteger seus dados e garantir a segurança de sua empresa."
  },
  {
    id: 3,
    img: folders,
    alt: "Ícone de pastas",
    text: "Plataforma digital intuitiva e automatizada para gerenciamento eficiente de solicitações e guias."
  },
  {
    id: 4,
    img: playstore,
    alt: "Ícone da loja de aplicativos PlayStore",
    text: "Aplicativo disponível para iOS e Android, com todas as funcionalidades que você precisa."
  }
]

export default function Client() {
  return (
    <>
      <Header page="client-center"/>
      <Clientpage>
        <header className="flex">
          <div className="outdoor flex-column">
            <h1>Acesse nosso <br/><span>Portal do cliente</span></h1>
            <p>Uma solução em nuvem para aprimorar seu atendimento.</p>
            <div className="link flex">
              <button> <a href="https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome" target="blank"> Portal do Cliente </a></button>
            </div>
          </div>
          <div className="img flex">
            <img src={cloud} alt="Imagem de armazenamento em nuvem do Onvio Portal do Cliente"/>
          </div>
        </header>
        <main className="flex">
          <div className="about">
            <p>Conheça o Onvio Portal do Cliente, nossa ferramenta em nuvem de última geração, projetada para revolucionar a comunicação com nosso escritório, eliminando os riscos da comunicação tradicional.</p>
          </div>
        
          <div className="access flex-column">
            <h2>Vamos Começar?</h2>
            <div className="tutorial-video-wrapper flex">
              <iframe src="https://www.youtube.com/embed/lmcjOtB-oJQ?si=kmQa47huf1cPVCTX" title="Tutorial Portal do Cliente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen>
              </iframe>
            </div>
            <div>
              <p>Assista ao vídeo e acompanhe o passo a passo abaixo!</p>
            </div>
            <div className="guide flex"> 
              {tutorialSteps.map(service => (
                <ClientCenterStep
                  key={service.id}
                  img={service.img}
                  title={service.title}
                  text={service.text}
                />
              ))}   
            </div>
          </div>
        </main>
        <div className="gains flex-column">
          <h2>Benefícios</h2>
          <div className="features"> 
            {appFeatures.map(service => (
              <ClientCenterGain
                key={service.id}
                img={service.img}
                alt={service.alt}
                text={service.text}
              />
            ))}    
          </div>
        </div> 
      </Clientpage>      
      <Footer/>    
    </>
  )
}