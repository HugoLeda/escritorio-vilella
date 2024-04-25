import  { FooterContainer } from "./style"
import { MdOutlineWhatsapp, MdLocalPhone, MdMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="contact">
      <div className="social-items">
        <h3 className="address">Fale Conosco</h3>
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
          <h3 className="network">Redes Sociais</h3>
          <div className="social-item-instagram">
            <FaInstagram />
            <span>escritoriovilella</span>
          </div>     
        </div>
      </div>
      <div className="services">
        <h3>Nossos Serviços</h3>
        <ul>
          <li>Certificadora</li>
          <li>Soluções Contábeis</li>
          <li>Soluções Fiscais</li>
          <li>Pessoa Física</li>
          <li>Empresarial</li>
          <li>MEI</li>
          <li>Rural</li>
        </ul>
      </div>
      <div className="client-center">
        <img src="src\assets\whiteLogo.png" alt="Vilella"/>
        <h3>
          <span>Acesso</span>
          <p>Portal do Cliente</p>
        </h3>
      </div>
    </FooterContainer>
  )
}