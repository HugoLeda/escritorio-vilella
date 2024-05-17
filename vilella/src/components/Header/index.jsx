import { useState } from 'react';
import { HeaderContainer } from './style';

export default function Header() {  
  const [classOn, setClassOn] = useState(false);  
  return (
    <HeaderContainer>              
        <div className="header-logo">
          <a href="#">
            <img className="img" src="src\assets\logoVilella.png" alt="Vilella"/>
          </a>
        </div>

        <div className = { classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
          <div className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>

          <nav className= { classOn ? 'menu-mobile on' : 'menu-mobile'} onClick={() => setClassOn(!classOn)}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Equipe</a></li>
              <li><a href="#">LGPD</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome" target="blank">Portal do Cliente</a></li>
            </ul>  
          </nav>
        </div>

        <nav className="menu-desk">
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">LGPD</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome" target="blank">Portal do Cliente</a></li>
          </ul>  
        </nav>                                
    </HeaderContainer>
  )
}