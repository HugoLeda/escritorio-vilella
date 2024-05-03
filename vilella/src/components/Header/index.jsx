import { HeaderContainer } from './style';

export default function Header() {
  return (
    <HeaderContainer>
      <div className="header">
        <div className="header-logo">
          <a href="#">
            <img className="img" src="src\assets\logoVilella.png" alt="Vilella"/>
          </a>
        </div>
        <div className="menu">
          <div className="align-menu">
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">LGPD</a>
            <a href="#">Contato</a>
            <a href="#">Portal do Cliente</a>
            </div>
        </div>
      </div>
    </HeaderContainer>
  )
}