import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Clientpage } from "./style";

import ClientCenterStep from "../../components/ClientCenterStep";

import cloud from "../../assets/client/cloudStorage.webp"
import login from "../../assets/client/login.webp"
import select from "../../assets/client/select.webp"
import grid from "../../assets/client/grid.webp"

const tutorialSteps = [
  {
    img: login,
    title: "Acessar o Portal do Cliente",
    text: "Acessar o portal do cliente através do link, entrar e inserir credenciais cadastradas pelo escritório ou solicitar cadastro.",
  },
  {
    img: select,
    title: "Buscar sua empresa",
    text: "Pesquisar pelo nome da sua empresa por meio do filtro de seleção e confirmar ao visualizar as informações correspondentes.",
  },
  {
    img: grid,
    title: "Sobre o Portal do Cliente",
    text: "Dentro do Portal é possível visualizar vencimentos de guias, acompanhar notícias do escritório, observar processos, solicitar documentos e muito mais!",
  }
]

export default function Client() {
  return (
    <>
      <Header page="client-center"/>
      <Clientpage>
        <header className="flex">
          <div className="outdoor">
            <h1>Acesse nosso <br/><span>Portal do cliente</span></h1>
            <p>Uma solução em nuvem para aprimorar seu atendimento.</p>
            <div className="link flex">
              <button> <a href="https://onvio.com.br/login/#/?d=https:%2F%2Fonvio.com.br%2Fbr-portal-do-cliente%2F" target="blank"> Portal do Cliente </a></button>
            </div>
          </div>
          <div className="img">
            <img src={cloud} alt="Armazenamento em nuvem"/>
          </div>
        </header>
        <main>
          <div className="about">
           {/*<h1>Portal do <span>Cliente</span></h1>*/}
            <p>Conheça o Onvio Portal do Cliente, nossa ferramenta em nuvem de última geração, projetada para revolucionar a comunicação com nosso escritório, eliminando os riscos da comunicação tradicional.</p>
          </div>
        
          <div className="access flex">
            <h2>Vamos Começar?</h2>
            <div className="guide"> 
              {tutorialSteps.map(service => (
                <ClientCenterStep
                  key={service.title}
                  img={service.img}
                  title={service.title}
                  text={service.text}
                />
              ))}   
            </div>
          </div>
        </main>
        <div className="win flex">
          <h2>Benefícios</h2>
          <div className="features">            
             <div className="icon">
                <img src={""} alt={""} />
             </div>
             <div>
              <p>Disponibilidade e facilidade de acesso por meio de qualquer dispositivo.</p>
             </div>
             <div className="icon">
                <img src={""} alt={""} />
             </div>
             <div>
              <p>Tecnologias para garantir a segurança das informações da sua empresa.</p>
             </div>
             <div className="icon">
                <img src={""} alt={""} />
             </div>
             <div>
              <p>Agilidade e organização no envio e recebimento de solicitações e guias.</p>
             </div>
             <div className="icon">
                <img src={""} alt={""} />
             </div>
             <div>
              <p>Disponível para download diretamente na sua loja de apilicativos.</p>
             </div>
          </div>
        </div>
      </Clientpage>
      <Footer/>    
    </>
  )
}