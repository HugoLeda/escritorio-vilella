import  { FooterContainer } from "./style"
import { MdOutlineWhatsapp, MdLocalPhone, MdMail } from "react-icons/md";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa6";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import logoFooter from '../../assets/logoFooter.webp'

export default function Footer() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <FooterContainer>
      <div className="footer flex">

        <div className="info flex-column">

          <div className="rights-reserved flex-column">
            <a href="/">
              <img src={logoFooter} alt="Logo do Escritório Vilella"/>
            </a>            
            <div className="flex-column">
              <span>&copy; 2025 Escritório Vilella.</span>
              <span>Todos os direitos reservados.</span>
            </div>
          </div>
          
          <div className="socials flex">
            <a className="social-item" href="https://www.instagram.com/escritorio.vilella/" target="blank">
              <span className="item"><FaInstagram style={{fontSize: 30, color: "#ffffff"}}/></span>
            </a>
            <a className="social-item" href="https://www.facebook.com/people/Escrit%C3%B3rio-Vilella/61567020291268/" target="blank">
              <span className="item"><FaFacebook style={{fontSize: 30, color: "#ffffff"}}/></span>
            </a>
            <a className="social-item" href="https://www.linkedin.com/company/escritoriovilella/" target="blank">
              <span className="item"><FaLinkedin style={{fontSize: 30, color: "#ffffff"}}/></span>
            </a>
            <a className="social-item" href="https://www.youtube.com/@escritorio.vilella" target="blank">
              <span className="item"><FaYoutube style={{fontSize: 30, color: "#ffffff"}}/></span>
            </a>
          </div>
          
        </div>

        <div className="services flex-column">
          <a href="/services">
            <h3>Nossos Serviços</h3>
          </a>
          <div className="list">
            <ul>
              <li>Certificadora</li>
              <li>MEI</li>
              <li>Pessoa Física</li>
              <li>Rural</li>
              <li>Soluções Contábeis</li>
              <li>Soluções Fiscais</li>
              <li>Trabalhista</li>
            </ul>
          </div>
        </div>

        <div className="contact flex-column">
          
            <div className="call flex-column">
              <h3 className="address">Fale Conosco</h3>
              <a className="social-item flex" href="tel:551433822052">
                <span className="item flex"><MdLocalPhone style={{fontSize: 22, color: "#ffffff"}}/></span>
                <span>(14) 3382-2052</span>
              </a>
              <a className="social-item flex" href="https://wa.me/5514997795080?text=Ol%C3%A1"  target="blank">
                <span className="item flex"><MdOutlineWhatsapp style={{fontSize: 22, color: "#ffffff"}}/></span>
                <span>(14) 99779-5080</span>
              </a>
              <a className="social-item flex" href="mailto:contato@evilella.com">
                <span className="item flex"><MdMail style={{fontSize: 22, color: "#ffffff"}}/></span>
                <span>contato@evilella.com</span>
              </a>
            </div>

            <div className="legal-terms flex-column">
              <a href="/privacy-policy"><span>Política de Privacidade</span></a>
              <a href="/privacy-policy#legal-terms"><span>Termos Legais</span></a>
            </div>               
        </div>
      </div>


      <div className="dev flex">
        <span className="credits"> 
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