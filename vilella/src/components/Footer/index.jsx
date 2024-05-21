import  { FooterContainer } from "./style"
import { MdOutlineWhatsapp, MdLocalPhone, MdMail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

import whiteLogo from '../../assets/whiteLogo.png'

export default function Footer() {
  return (
    <FooterContainer>
      <div className="footer flex">
      <div className="contact">
        <div className="socials">
          <div className="holder-talk">
            <h3 className="address">Fale Conosco</h3>
            <a className="social-item" href="tel:551433822052">
              <span className="item"><MdLocalPhone style={{fontSize: 22, color: "#ffffff"}}/></span>
              <span>(14) 3382-2052</span>
            </a>
            <a className="social-item" href="https://wa.me/5514997795080?text=Ol%C3%A1"  target="blank">
              <span className="item"><MdOutlineWhatsapp style={{fontSize: 22, color: "#ffffff"}}/></span>
              <span>(14) 99779-5080</span>
            </a>
            <a className="social-item" href="mailto:adm@evilella.com">
              <span className="item"><MdMail style={{fontSize: 22, color: "#ffffff"}}/></span>
              <span>adm@evilella.com</span>
            </a>
          </div>
          <div className="holder-social">
            <h3 className="network">Redes Sociais</h3>
             <a className="social-item" href="https://www.instagram.com/escritoriovilella/" target="blank">
              <span className="item"><FaInstagram style={{fontSize: 22, color: "#ffffff"}}/></span>
              <span>escritoriovilella</span>
            </a>
            <a className="social-item" href="https://www.linkedin.com/in/vilellaescritorio/" target="blank">
              <span className="item"><FaLinkedin style={{fontSize: 22, color: "#ffffff"}}/></span>
              <span>Escritório Vilella</span>
            </a>
          </div>           
        </div>
      </div>
      <div className="services">
        <h3>Nossos Serviços</h3>
        <ul>
          <a>Certificadora</a>
          <a>Empresarial</a>
          <a>MEI</a>
          <a>Pessoa Física</a>
          <a>Rural</a>
          <a>Soluções Contábeis</a>
          <a>Soluções Fiscais</a>
        </ul>
      </div>
      <div className="client flex">
        <a className="client-access" href="https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome" target="blank">
          <a><img src={whiteLogo} alt="Vilella"/></a>
          <h3>
            <a href="https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome" target="blank">Acesso<br/>
              <span>Portal do Cliente</span>
            </a>
          </h3>
        </a>
      </div>
      </div>
      <div className="copy">
        <span>&copy; 2024 Escritório Vilella. Todos os direitos reservados.</span>
        <span className="devs"> 
          <span><FaGithub style={{fontSize: 16, color: "#ffffff"}}/> </span>
            <span>
              Desenvolvido por
              <a href="https://github.com/HugoLeda" target="blank">  João Hugo </a> 
              e
              <a href="https://github.com/maloysa" target="blank"> Heloysa </a>
          </span>
        </span>
      </div>
    </FooterContainer>
  )
}