import styled from "styled-components";
import Theme from "../../styles/theme";

export const Clientpage = styled.section `
  max-width: 1920px;//100vw; //adjust breakpoint;
  margin: 5rem auto 0 auto;
  padding: 0 10%;
  
  display: flex;
  flex-direction: column;
  gap: 8rem;

  .flex {
    display: flex;
  }

  .flex-column {
    display: flex;
    flex-direction: column;    
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
      }
  }

  h2 {
    user-select: none;
    font-size: ${Theme.textSize.titleMobileLg};
    font-weight: 600;
    color: ${Theme.colors.blue1};
    }

  h3 {
    user-select: none;
    font-size: ${Theme.textSize.titleSm};
    color: ${Theme.colors.blue1};
    font-weight: 600;
  }

  span {
    color: ${Theme.colors.gray1};
    font-size: ${Theme.textSize.textLg};
  }

  p {
    font-size: ${Theme.textSize.textLg};
    line-height: 1.5;
  }

  header {
    justify-content: space-between;
    gap: 5rem;
    

    h1 {
      font-size: ${Theme.textSize.titleClientXLg};
    }
    h2 {
      font-size: ${Theme.textSize.titleMobileSm};
      
    }
    span {
      font-size: ${Theme.textSize.titleClientXLg};      
      color: ${Theme.colors.blue1};
    }


    .outdoor-wrapper {
      align-items: center;
      justify-content: space-evenly;

      gap: 8rem;
    }

    .outdoor {
      gap: .5rem;

      .link {
        justify-content: flex-start;
        padding: 1rem 1rem 0 0;
        gap: 1rem;
      }

    }
  }

  button {
    width: 180px;
    height: 45px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgb(0,0,0,0.2);
    border: none;

    user-select: none;
    text-transform: uppercase;
    background-color: ${Theme.colors.blue1};

    cursor: pointer;
    transition: ease-out all .2s;


    a {
      font-size: ${Theme.textSize.textMobileSm};
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

  }
  .help {
    border: 1px solid ${Theme.colors.blue2};
    background-color: ${Theme.colors.white};
    
    a {
      color: ${Theme.colors.blue2};
    }
    &:hover {
      border: 1px solid ${Theme.colors.babyBlue};
      background-color: ${Theme.colors.babyBlue};
      a {
        color: ${Theme.colors.blue1};
      }
    }
  }   

  .img {
    justify-content: center;
    width: 450px;

    user-select: none;

    img {
      width: 450px;
      height: auto;
    }
  }

  main {
    justify-content: center;
    text-align: center;
    gap: 5rem;
  }
  .access {
    gap: 5rem;
    
    .tutorial-wrapper {
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .tutorial {
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
      gap: 1.5rem;

      .desktop-tutorial,
      .mobile-tutorial {
        padding-bottom: 1rem;
        gap: 1rem;
        border-radius: 6px;
        box-shadow: 0 2px 8px rgb(0,0,0,0.2);
        border: none;
        justify-content: center;
        max-width: 448px;
        max-height: 448px;

        iframe {
          display: flex;
          align-items: center;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          box-shadow: 0 1px 10px rgb(0,0,0,0.2);
          
          width: 100%;
          height: 252px;
        }

      }
      
      .tutorial-description {
        padding: .5rem 1.5rem;
        text-align: center;

        p {
          margin: 0;
        }
        span {
         color: ${Theme.colors.blue1};
         font-weight: 600;
       }
      }
    }
  }

  .steps {      
    gap: 5rem;
    align-items: center;
    justify-content: space-between;

    .flow-next {
      padding: 1rem;
    }
  }


  .gains {
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 5rem;
  
    .features {
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-around;
      row-gap: 2rem;
    }        
  }

  .faq-section {
    align-items: center;
    justify-content: center;
    gap: 2rem;
    text-align: center;
    .faq-items {
      gap: 1rem;
      text-align: left;
      width: 100%;
      max-width: 800px;
    }
  }

  .sign-up {
    gap: 2rem;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    .link {
      width: 100%;
      justify-content: center;
      gap: 5rem;
    }
    button {
      width: 300px;
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

      .outdoor-wrapper {
        gap: 2rem;
      }

    }
    .img {
      width: 380px;
      img {
        width: 380px;
        height: auto;
      }
    }

    .access {
      .tutorial {
        flex-direction: column;
      }
    }


  } 

  @media (max-width: 975px) {
    
    margin-top: 3rem;
    gap: 5rem;


    header {
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      margin-top: 0;

      h1 {
        font-size: ${Theme.textSize.titleClientSm};
        span {
            font-size: ${Theme.textSize.titleClientSm};
          } 
        h2 {
          font-size: ${Theme.textSize.titleClientSm};
        }
      }

      .outdoor-wrapper {
        flex-direction: column-reverse;        
        gap: 2rem;
      }
      .outdoor {
        .link {
          justify-content: center;
          gap: 2rem;
          flex-direction: row;
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
        

    p {
      font-size: ${Theme.textSize.textMobileLg};
    }

    .steps {
      align-items: center;
      justify-content: center;
      gap: 3rem;
      .flow {
        flex-direction: column;
        

        .flow-next {
          align-items: center;
          justify-content: center;

          span {
            transform: rotate(90deg);
          }
        }
      } 
    }

  }
    

  @media (max-width: 926px) {
    h3 {
      font-size: ${Theme.textSize.titleCardSm};
    }
    p {
      font-size: ${Theme.textSize.textSm};
      line-height: 1.5;
    }

    .link {
      display: flex;
      flex-direction: column;
      align-items: center;
    } 

    .sign-up {
      .link {
        gap: 2rem;
      }
    }

    .gains {
      .features {
        gap: .5rem;
        row-gap: 2rem;
      }
    }

  }

  @media (max-width: 600px) {

    header {
     .outdoor{
      h2 {
        font-size: ${Theme.textSize.textMobileLg};
      }
      .link {
        flex-direction: column;
        gap: 1.5rem;
      }
     }
    }

        
    h2 {
      font-size: ${Theme.textSize.titleMobileMd};
    }

    .desktop-tutorial,
    .mobile-tutorial {
      iframe {
        width: 80%;        
      }      
    }    

    .tutorial-description {
      p {
        font-size: ${Theme.textSize.textMobileSm};
      }
    }

    .steps {
      gap: 2rem;
    }

    .gains {
      gap: 2rem;
      .features {
        gap: 1rem;
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

    .access, 
    .gains {
        h2 {
          font-size: ${Theme.textSize.titleMobileMd};
        }
      }
    
    span {
      font-size: ${Theme.textSize.textLg};
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