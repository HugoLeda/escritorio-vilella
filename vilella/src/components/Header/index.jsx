import { HeaderContainer } from './style';

export default function Header() {
  return (
    <HeaderContainer>
      <div className="header-logo">
        <a href="#">
          <img src="src\assets\logoVilella.png" alt="Vilella"/>
        </a>
      </div>
      <div className="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">LGPD</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Portal do Cliente</a></li>
        </ul>
      </div>
    </HeaderContainer>
  )
}