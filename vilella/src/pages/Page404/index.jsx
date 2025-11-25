import { Link } from "react-router-dom";
import styled from "styled-components";
import Theme from "../../styles/theme";
import media from "styled-media-query";
import { MdHome } from "react-icons/md";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaArrowRotateLeft, FaHouse } from "react-icons/fa6";

export default function Page404() {
  const Content = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    height: 40vh;
    max-height: 40vh;

    h1 {
      font-size: ${Theme.textSize.titleLg};
    }

    h2 {      
      font-size: ${Theme.textSize.titleMobileSm};
    }
    span {
      font-weight: 800;
    }
    p {
      font-size: ${Theme.textSize.textLg};
    }
/*
    .flex, .flex-column {
      display: flex;
    }

    .flex-column {
      align-items: center;
      justify-content: center;
    }

    .buttons {
      gap: 2rem;
    }
    
    .cta {
      background-color: #0d2daa;
      border-radius: 8px;

      button {      
        padding: .2rem .5rem;
        height: 45px;
        background-color: #0d2daa;
        border: none;    
        transition: ease-out all .2s;
        background-color: transparent;
        font-weight: 400;

        a {
          text-decoration: none;
          color: ${Theme.colors.white};
          text-transform: uppercase;
        }
      }    
    }
     */

    .back {
      position: relative;
      background: transparent;
      transition: color 0.3s ease;
      color: ${Theme.colors.blue};
    
      cursor: pointer;
      transition: ease-out all .3s;
      font-weight: 500;

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -.25rem;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        transform: translateX(-50%);
        transition: all 0.3s ease;    
        background-color: ${Theme.colors.blue};

      }

      &:hover::after {
        width: 100%;
        height: 1px;
        border-radius: 40px;
      }


    }

    a {
        text-decoration: none;
        font-size: 1rem;
        color: #0d2daa; //color: ${Theme.colors.blue};

        word-wrap: default;
      }

    .homepage {
      display: flex;
      align-items: center;
    }

    ${media.lessThan("medium")`
      h1 {
        font-size: ${Theme.textSize.titleMobileLg};
      }

    `}
  `

  return(
    <>
      <Header/>   
        <Content>
          <div className="flex-column">
            <h1>Erro: <span>404</span></h1> 
            <p>Página não encontrada :(</p>
          </div>
          
          <div className="back">
            <Link to={"/"} className="homepage">
            Retornar à Página Inicial
            </Link>
          </div>
        
        </Content>   
      <Footer/>
    </>
  )
}