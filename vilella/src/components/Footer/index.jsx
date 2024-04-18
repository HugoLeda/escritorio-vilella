import  { FooterContainer } from "./style"

import { MdOutlineWhatsapp, MdLocalPhone, MdMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="contact">
        <h2>Fale Conosco</h2>
        <p><MdLocalPhone />(14) 3382-2052</p>
        <p><MdOutlineWhatsapp />(14) 99779-5080</p>
        <p><MdMail />admin@evilella.com</p>
        <h2>Redes Sociais</h2>
        <p><FaInstagram />escritoriovilella</p>
      </div>
      <div className="services">
        <h2>Nossos Serviços</h2>
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
        <h2>
          <span>Acesso</span>
          Portal do Cliente
        </h2>
      </div>
    </FooterContainer>
  )
}