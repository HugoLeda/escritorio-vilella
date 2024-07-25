import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Clientpage } from "./style";

import cloud from "../../assets/client/cloudStorage.webp"

export default function Client() {
  return (
    <>
      <Header page="client-center"/>
      <Clientpage>
        <header className="flex">
          <div className="outdoor">
            <h1>Acesse nosso <span>Portal do cliente</span></h1>
            <p>Uma solução em nuvem para aprimorar seu atendimento.</p>
            <div className="link flex">
            <button> <a href="https://onvio.com.br/login/#/?d=https:%2F%2Fonvio.com.br%2Fbr-portal-do-cliente%2F"> Portal do Cliente </a></button>
          </div>
          </div>
          <div className="img">
            <img src={cloud} alt="Armazenamento em nuvem"/>
          </div>
        </header>
      </Clientpage>
      <Footer/>    
    </>
  )
}