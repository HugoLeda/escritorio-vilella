import  { FooterContainer } from "./style"
import { MdOutlineWhatsapp, MdLocalPhone, MdMail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <FooterContainer>
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
        <a className="client-access">
          <a><img src="src\assets\whiteLogo.png" alt="Vilella"/></a>
          <h3>
            <a href="https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome" target="blank">Acesso<br/>
          <span>Portal do Cliente</span></a>
          </h3>
        </a>
      </div>
    </FooterContainer>
  )
}