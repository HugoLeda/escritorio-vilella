import  { FooterContainer } from "./style"
import { MdOutlineWhatsapp, MdLocalPhone, MdMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="contact">
        <h3 className="address">Fale Conosco</h3>
        <div className="social-items">
          <div className="social-item">
            <MdLocalPhone /> 
            <span>(14) 3382-2052</span>
          </div>
          <p>
            <MdOutlineWhatsapp />
            <span>(14) 99779-5080</span>
          </p>
          <p>
            <MdMail />
            <span>adm@evilella.com</span>
          </p>        
        </div>
        <h3 className="socials">Redes Sociais</h3>
        <div>
          <p>
            <FaInstagram />
            <span>escritoriovilella</span>
          </p>
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
        <img src="src\assets\logo.png" alt="Vilella"/>
        <h3>
          <span>Acesso</span>
          <p>Portal do Cliente</p>
        </h3>
      </div>
    </FooterContainer>
  )
}