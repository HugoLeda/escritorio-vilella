import styled from "styled-components";
import Theme from "../../styles/theme";

export const Faq = styled.section `
  

  .flex {
    display: flex;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }
  
  .faq-items {
    padding: .8rem 0;
    border: none;
    cursor: pointer;

    
    .ask-wrapper {
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      border-radius: 40px;
      padding: 1.5rem 2rem;
      box-shadow: 0 4px 12px rgb(0,0,0,0.1);
    }

    h3 {
      color: ${Theme.colors.gray1};
      font-size: ${Theme.textSize.titleCardXSm}; 
      font-weight: 500;
      margin: 0;
      width: 90%;
    }

    p {
      text-align: justify;
      padding: 1.5rem 1rem 0 1rem;
    }

    .faq-answer {
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transform: translateY(-5px);
      transition:
        max-height 0.5s ease,
        opacity 0.2s linear 0.1s,
        transform 0.4s ease;
      a {
        color: ${Theme.colors.gray1};
      }
    }

    .faq-answer.open {
      max-height: 500px;
      opacity: 1;
      transform: translateY(0);
    }

    .arrow {
      width: 12px;
      height: 12px;
      border-color: ${Theme.colors.blue1};
      border-right: 2px solid;
      border-bottom: 2px solid;
      
      transform: rotate(45deg);
      transition: transform .3s ease;    
    }
    .arrow.open {
      transform: rotate(225deg);
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

  @media (max-width: 480px) {

    .faq-items {
      h3 {
        font-size: ${Theme.textSize.textMobileLg};
      }
      p {
        font-size: ${Theme.textSize.textMobileSm};
      }
    }

  }


`