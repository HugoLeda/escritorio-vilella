import { Link } from "react-router-dom";
import styled from "styled-components";
import Theme from "../../styles/theme";
import media from "styled-media-query";
import { MdHome } from "react-icons/md";

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
      font-weight: 800;
    }
    p {
      font-size: ${Theme.textSize.textLg};
    }

    .back {
      cursor: pointer;
      transition: ease-out all .3s;

      font-size: ${Theme.textSize.textSm};
      font-weight: 500;

      &:hover {
        text-align: center;
        text-shadow: 1px 2px 2px #93c5ff;
      }
    }

    a {
        text-decoration: none;
        font-size: ${Theme.textSize.textMd};
        color: ${Theme.colors.blue1};
        font-weight: 500;

        word-wrap: default;
      }

    .homepage {
      display: flex;
      align-items: center;
      gap: .2rem;
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
          <h1>Erro: <span>404</span></h1> 
          <p>Página não encontrada :(</p>      
          <div className="back">
            <Link to={"/"} className="homepage"> <MdHome style={{fontSize: 24, color: "#00116f"}} />
            Retornar à Página Inicial
            </Link>
          </div>
        </Content>   
      <Footer/>
    </>
  )
}