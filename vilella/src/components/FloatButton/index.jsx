import { FaWhatsapp } from "react-icons/fa6";
import styled from "styled-components";
import Theme from "../../styles/theme";
import { useState, useEffect } from "react";

const FloatWhatsapp = styled.div `

  display: flex;
  position: relative;

  .whatsapp-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
          
    
    position: fixed;
    bottom: 1.5rem;
    right: 2rem;
    z-index: 100;
    border-radius: 40px;   

    opacity: ${props => props.show ? 1 : 0};
    transform: ${props => props.show ? "translateY(0)" : "translateY(100px)"};
    pointer-events: ${props => props.show ? "auto" : "none"};
    transition: linear all .2s;

  }

  .cta {
    opacity: 0;
    transition: opacity .1s linear;
    padding: .5rem 1.5rem .5rem 2rem;
    max-width: 200px;
    max-height: 64px;
    user-select: none;
    font-size: 90%;
  }

  .whatsapp-button:hover {    
    background-color: #fafafa;
    box-shadow: 0 1px 10px rgb(0,0,0,0.2); 
  }

  .whatsapp-button:hover .cta {
    opacity: 1;
  }  

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: .15rem;
    background-color: #25D366; 
    border-radius: 50%;    
    width: 64px;   
    height: 64px;    
    border: none;
    box-shadow: 0 1px 10px rgb(0,0,80,0.5);  
  }

  a {
    padding: 1rem;
    text-decoration: none;
    color: ${Theme.colors.white};
  }


  @media (max-width: 1024px) {
    .whatsapp-button {
      bottom: 1rem;
      right: 1rem;      
      gap: 0;
    }
    
    .cta {
      padding: .5rem 2rem .5rem 2rem;
    }
  }

  @media (max-width: 1010px) {
    .whatsapp-button {
      position: fixed;
      bottom: 0;
      right: 0;
      width: 100%;
      background-color: #fafafa;
      justify-content: space-evenly;
      border-radius: 0;
    }

    .whatsapp-button:hover {    
      background-color: #fafafa;
      border-radius: 0%;
      box-shadow: none; 
    }

    button {
      background-color: transparent;
      border: none;
      box-shadow: none;
      max-height: 80px;
    }

    .cta {
      opacity: 1;
      padding: 1rem 3rem 1rem 1rem;
      font-size: 90%;
      max-height: 80px;
    }
  }

`

export default function FloatButton () {

    // Estado mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1010);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1010);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Estado visibilidade botão
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [activated, setActivated] = useState(false); // marca se passou 120px
  const SCROLL_THRESHOLD = 10;
  const SHOW_AFTER = 120;

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // desktop sempre visível
      if (!isMobile) {
        setShowWhatsapp(true);
        return;
      }

      // ativa o botão quando passar de 120px
      if (!activated && currentY > SHOW_AFTER) {
        setActivated(true);
        setShowWhatsapp(true);
        lastY = currentY;
        return;
      }

      // evita micro scroll
      if (Math.abs(currentY - lastY) < SCROLL_THRESHOLD) return;

      if (!activated) {
        // ainda não passou de 120px → mantém escondido
        setShowWhatsapp(false);
      } else {
        // comportamento descendente/ascendente
        if (currentY > lastY) {
          setShowWhatsapp(true); // descendo → mostra
        } else {
          setShowWhatsapp(false); // subindo → esconde
        }
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, activated]);

  

  return (
    <FloatWhatsapp show={showWhatsapp}>
      <div className="whatsapp-button">       
        <div className="cta">    
          <span>Fale agora com nossos especialistas!</span>         
        </div>
        <div>
          <button>
          <a href="https://wa.me/5514997795080?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista." target="blank">
          <span><FaWhatsapp style={{fontSize: 44, color: isMobile ? "#25D366" : "#fff"}} /></span></a>
        </button>
        </div>        
      </div>
    </FloatWhatsapp>
  )

}