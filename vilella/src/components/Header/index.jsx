import { useState } from 'react';
import { HeaderContainer } from './style';

import logoVilella from '../../assets/logoVilella.png';
import { Link } from 'react-router-dom';

export default function Header({page}) {  
  const [classOn, setClassOn] = useState(false);  
  return (
    <HeaderContainer>              
        <div className="header-logo">
          <a href="#">
            <img className="img" src={logoVilella} alt="Vilella"/>
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
            <li><Link to={"/"}              className={ page == "home"          ? "active" : "" }>Home</Link></li>
            <li><Link to={"/about"}         className={ page == "about"         ? "active" : "" }>Sobre</Link></li>
            <li><Link to={"/services"}      className={ page == "services"      ? "active" : "" }>Serviços</Link></li>
            <li><Link to={"/team"}          className={ page == "team"          ? "active" : "" }>Equipe</Link></li>
            <li><Link to={"/lgpd"}          className={ page == "lgpd"          ? "active" : "" }>LGPD</Link></li>
            <li><Link to={"/client-center"} className={ page == "client-center" ? "active" : "" }>Portal do cliente</Link></li>            
            </ul>  
          </nav>
        </div>

        <nav className="menu-desk">
          <ul className="menu">
            <li><Link to={"/"}              className={ page == "home"          ? "active" : "" }>Home</Link></li>
            <li><Link to={"/about"}         className={ page == "about"         ? "active" : "" }>Sobre</Link></li>
            <li><Link to={"/services"}      className={ page == "services"      ? "active" : "" }>Serviços</Link></li>
            <li><Link to={"/team"}          className={ page == "team"          ? "active" : "" }>Equipe</Link></li>
            <li><Link to={"/lgpd"}          className={ page == "lgpd"          ? "active" : "" }>LGPD</Link></li>
            <li><Link to={"/client-center"} className={ page == "client-center" ? "active" : "" }>Portal do cliente</Link></li>            
          </ul>  
        </nav>                                
    </HeaderContainer>
  )
}