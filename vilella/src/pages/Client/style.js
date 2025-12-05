import styled from "styled-components";
import Theme from "../../styles/theme";

export const Clientpage = styled.section `

  .flex,.flex-column {
    display: flex;
  }

  .flex-column {
    flex-direction: column;    
    align-items: center;
  }

  .wrapper {
    max-width: 1920px;
    margin: 5rem 0 5rem 0;
    padding: 0 10%;
  }

  h2,h3 {
    color: #0d2daa;
  }

  h1 {
    font-size: ${Theme.textSize.titleLg};
    color: ${Theme.colors.blue};
    font-weight: 500;

    span {
      font-size: ${Theme.textSize.titleLg};
      color: ${Theme.colors.blue};
      font-weight: 500;
      }
  }

  h2 {
    font-size: ${Theme.textSize.titleMobileLg};
    }

  h3 {
    font-size: ${Theme.textSize.titleSm};
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
    background-color: #fafafa;
    justify-content: space-between;
    gap: 5rem;
    user-select: none;
    
    h1 {
      font-size: ${Theme.textSize.titleClientXLg};
    }
    h2 {
      font-size: ${Theme.textSize.titleMobileSm};
      color: ${Theme.colors.blue};
      
    }
    span {
      font-size: ${Theme.textSize.titleClientXLg};      
      color: ${Theme.colors.blue};
    }


    .outdoor-wrapper {
      align-items: center;
      justify-content: space-evenly;
      gap: 8rem;
    }

    .outdoor {
      max-width: 500px;
      align-items: flex-start;
      text-align: left;
      gap: .5rem;

      .link {
        justify-content: flex-start;
        padding: 1rem 0;
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
    background-color: #0d2daa;

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
    background:transparent;
    
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
  }

  .access {
    gap: 5rem;
    
    .tutorial-wrapper {
      align-items: center;
      justify-content: center;
      padding: 0;
      gap: 2rem;
    }

    .tutorial {
      justify-content: space-around;
      align-items: center;
      gap: 3rem;

      .desktop-tutorial,
      .mobile-tutorial {
        user-select: none;
        padding-bottom: 1rem;
        gap: 1rem;
        border-radius: 20px;
        box-shadow: 0 2px 8px rgb(0,0,0,0.15);
        border: none;
        justify-content: center;
        max-width: 448px;
        max-height: 448px;
        background-color: #fafafa;

        iframe {
          display: flex;
          align-items: center;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;     
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

  .steps-section {
    margin: 3rem 0 6rem 0;
  }

  .steps {      
    gap: 5rem;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    h3,p {
      font-size: ${Theme.textSize.textMobileMd};
    }

    .flow-steps {
      min-width: 215px;
    }

    .flow-next {
      padding: 1rem .25rem;
    }
  }

  .gains-section {

    background-color: #0d2d7d;
  }

  .gains {
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 5rem;
    
    h2,h3 {
      color: ${Theme.colors.white};
    }
  
    .features {
      max-width: 1024px;     
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
      row-gap: 2rem;
      column-gap: 2rem;
      margin-bottom: 3rem;
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


  .sign-up-section {
    scroll-margin-top: 8rem; 
    background-color: #fafafa;
    margin-bottom: -5rem;
  }

  .sign-up {
    width: 100%;
    gap: 5rem;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    .sign-up-cta {
      gap: 3rem;
      max-width: 450px;
    }
    .sign-up-text {
      gap: 2rem;
      text-align: left;
      align-items: flex-start;
    }

    .link {
      align-items: flex-start;
      width: 100%;
      gap: 2rem;
    }
    button {
      width: 300px;
    }

    .client-center-download {
      width: 190px;
      gap: 1.5rem;
      img {
        width: 190px;
        height: auto;
      }
      .download-options {
        gap: 3rem;
        position: relative;
        .appstore,
        .playstore {          
          width: 48px;
          img {
            width: 48px;
            height: auto;
          }
        }
        &::before {
          position: absolute;
          content: "";
          width: 2px;
          height: 40px;
          background-color: #759dcc;
          border-radius: 40px;
          bottom: .25rem;
          left: 50%;
        }
      }
    }

  }

  
  /*scroll-effect START*/
      
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

    .scroll-effect {
      opacity: 0;
      transform: translateY(1rem);
      transition: all .5s ease-in-out;
    }

    .scroll-effect.visible.fade-up {
      animation: fadeInUp .6s ease-out forwards;
    }

    .scroll-effect.visible.fade-down {
    animation: fadeInDown 0.6s ease-out forwards;
  }

  /*scroll-effect END */



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
        padding: 0 2rem;
      }
    }
    
    .gains {
      .features {
        gap: 1rem;
        row-gap: 2rem;
      }
    }

  } 

  @media (max-width: 1170px) {
    
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

  @media (max-width: 1040px) {
    
    header {      
      .outdoor-wrapper {        
        margin-top: 3rem;
        flex-direction: column-reverse;
      }
      .outdoor {
        max-width: 400px;
      }
    }

    .sign-up {
      flex-direction: column-reverse;
      .sign-up-text {
        text-align: center;
        align-items: center;
      }
    }
  }

  @media (max-width: 975px) {
    
    header {
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
          width: 100%;
          justify-content: center;
          gap: 2rem;

          button {
            width: 100%;
          }
        }
      }
    }

      .img {
        width: 280px;
        img {
          width: 280px;
          height: auto;
        }
      }
        
    p {
      font-size: ${Theme.textSize.textMobileLg};
    }

    .gains {
      padding: 0;
    }

    .sign-up {
      .link {
        width: 100%;
        justify-content: center;
        gap: 2rem;
        flex-direction: column;

        button {
          width: 100%;
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

    .sign-up {
      .link {
        gap: 2rem;
      }
    }
  }

  @media (max-width: 800px) {

    .gains {
      .features {
        padding: 0 10vw;
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

    .access {
      .tutorial {
        .desktop-tutorial,
        .mobile-tutorial {
          max-width: 350px;
          iframe {
            max-width: 350px;
            height: 200px;
          }      
        }    

        .tutorial-description {
          p {
            font-size: ${Theme.textSize.textMobileSm};
          }
        }
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

    .gains {
      .features {
        padding: 0;
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