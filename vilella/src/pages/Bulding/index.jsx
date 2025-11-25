import { Link } from "react-router-dom";
import styled from "styled-components";
import Theme from "../../styles/theme";
import media from "styled-media-query";
import { MdHome } from "react-icons/md";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Building() {
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
        text-align: center;
      }
    `}
  `
  return(
    <>
      <Header/>
        <Content>
          <h1>Página em construção</h1>
          <div className="back">
            <Link to={"/"}
              className="homepage">
              Retornar à Página Inicial
            </Link>
          </div>
        </Content>
      <Footer/>
    </>
  )
}