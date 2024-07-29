import styled from "styled-components";
import Theme from "../../styles/theme";

export const Clientpage = styled.section `
  display: flex;
  flex-direction: column;
  max-width: 100vw; //adjust breakpoint;
  padding: 0 10%;
  margin-top: 2rem;
  gap: 5rem;

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    user-select: none;
    font-size: ${Theme.textSize.titleLg};
    font-weight: 600;
    color: ${Theme.colors.blue1};

    span {
        user-select: none;
        font-size: ${Theme.textSize.titleLg};
        font-weight: 600;
        color: ${Theme.colors.red};
      }
  }

  h2 {
      user-select: none;
      font-size: ${Theme.textSize.titleMobileLg};
      font-weight: 600;
      color: ${Theme.colors.blue1};
    }

  p {
    font-size: ${Theme.textSize.textLg};
    line-height: 1.5;
  }

  header {
    gap: 1rem;
    h1 {
      font-size: ${Theme.textSize.titleClientXLg};

      span {
        font-size: ${Theme.textSize.titleClientXLg};
        text-transform: uppercase;
        color: ${Theme.colors.blue1};
      }
    }

    button {
      width: 175px;
      height: 40px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgb(0,0,0,0.5);
      border: none;

      background-color: ${Theme.colors.blue1};

      cursor: pointer;
      transition: ease-out all .2s;
      a {
        font-size: ${Theme.textSize.textSm};
        font-weight: 700;

        color: ${Theme.colors.white};
        text-decoration: none;
      }
      &:hover {
        background-color: ${Theme.colors.babyBlue};
        a {
          color: ${Theme.colors.blue1};
        }
      }
      .link {
        padding: 1.5rem;
      }
    }

  
    .outdoor {
      .link {
        padding: 1rem 0;
      }
    }
  }


  .img {
    justify-content: center;
    width: 460px;

    img {
      width: 460px;
      height: auto;
    }
  }

  main {
    flex-direction: column;
    gap: 2rem;

    .about {
      p {
        margin: 0;
      }
    }
  }
  .access {
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    .guide{
      flex-direction: column;
      gap: 2rem;

      h2 {
        font-size: ${Theme.textSize.titleMd};
      }
    }
  }

  .gains {
    gap: 1rem;
  
    .features {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

    }
    
  }

  @media (max-width: 1185px) {
    header {
      h1 {
      font-size: ${Theme.textSize.titleClientMd};
       span {
          font-size: ${Theme.textSize.titleClientMd};
        } 
      }
    }
    .img {
      width: 380px;
      img {
        width: 380px;
        height: auto;
      }
    }
  }

  @media (max-width: 975px) {

    p {
      font-size: ${Theme.textSize.textMobileLg};
      }

    header {
      h1 {
      font-size: ${Theme.textSize.titleClientSm};
       span {
          font-size: ${Theme.textSize.titleClientSm};
        } 
      }
    }

    .img {
      width: 360px;
      img {
        width: 360px;
        height: auto;
      }
    }
  }

  @media (max-width: 926px) {
    gap: 2rem;
    
    header {
      flex-direction: column-reverse;
      justify-content: center;

      gap: 2rem;
    }

    .access{
      .guide {
        h2 {
          font-size: ${Theme.textSize.titleSm};
        }
        p {
          font-size: ${Theme.textSize.textMd};
          line-height: 1.5;
        }
      }
    }
  }


  @media (max-width: 480px) {
    header {
      
      h1 {
      font-size: ${Theme.textSize.titleClientXSm};
       span {
          font-size: ${Theme.textSize.titleClientXSm};
        } 
      }
    }
    .access{
      .guide{
        //flex-direction: row;
      }
    }
  }

  @media (max-width: 410px) {
    header {
      h1 {
      font-size: ${Theme.textSize.titleClientXxSm};
       span {
          font-size: ${Theme.textSize.titleClientXxSm};
        } 
      }
    }
  }
  
`