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

          <div className="company-logo flex-column">
            <a href="/">
              <img src={logoFooter} alt="Logo do Escritório Vilella"/>
            </a>  

            <div className="company-id flex-column">
              <div className="id-1 flex-column">
                <p><span>Escritório Vilella LTDA</span></p>
                <p><span>CNPJ:</span> 18.740.929/0001-12</p>
              </div>
              
              <div className="id-2 flex-column">
                <p><span>Responsável Técnico</span></p>
                <p><span>Registro: </span>CRC 3SP012940/O-6</p>
              </div>

            </div>                      
          </div>
          
          <div className="socials flex-column">
            <div className="socials-call">
              <span>Nos siga nas redes sociais!</span>
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
          
        </div>

        <div className="services flex-column">
          <a href="/services">
            <h3>Serviços</h3>
          </a>
          <div className="list flex-column">
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
            <h3 className="address">Contato</h3>
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

          <div className="client-center flex-column">
            <button className="client-center-button flex">
            <a href="https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome" target="blank" className="flex">
              <span>Portal do Cliente</span>
            </a>
            </button>            
          </div>               
        </div>
      </div>


      <div className="copyright flex">
        <span className="credits">           
          <span>&copy; 2026 </span>
          <span>Direitos reservados.</span>
          <a href="/privacy-policy"><span> · Política de Privacidade </span></a>
          <a href="/privacy-policy#legal-terms"><span> ∙ Termos Legais </span></a>
        </span>
      </div>
    </FooterContainer>
  )
}