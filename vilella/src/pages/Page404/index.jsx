import { Link } from "react-router-dom";
import styled from "styled-components";
import Theme from "../../styles/theme";


import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function Page404() {
  const Content = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 40vh;
    max-height: 40vh;

    h1 {
      font-size: ${Theme.textSize.titleLg};
    }
    span {
      font-weight: 700;
    }
    p {
      font-size: ${Theme.textSize.textLg};
    }

    .back {
      cursor: pointer;
      transition: ease-out all .3s;

      font-size: ${Theme.textSize.textSm};
      font-weight: 700;

      &:hover {
        text-align: center;
        width: 240px;
        height: auto;
        border-radius: 6px;
        box-shadow: 0px 10px 10px rgb(0,0,0,0.2);
        border: none;

            
        background-color: ${Theme.colors.babyBlue};
        color: ${Theme.colors.blue1};
      }

  }

  a {
      text-decoration: none;
      font-size: ${Theme.textSize.textMd};
      color: ${Theme.colors.blue2};
      font-weight: 500;

      word-wrap: default;
    }

  `

  return(
    <>
      <Header/>   
        <Content>
          <h1>Erro: <span>404</span></h1> 
          <p>Página não encontrada</p>      
          <div className="back">
            <Link to={"/"}>Retornar à Página Inicial</Link>
          </div>
        </Content>   
      <Footer/>
    </>
  )
}