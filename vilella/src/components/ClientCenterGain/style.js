import styled from "styled-components"
import Theme from "../../styles/theme"

export const Gains = styled.section`
  
  .feature {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 320px;
    height: 205px;
    padding: 2.25rem;
    border: 1px solid ${Theme.colors.white};
    border-radius: 40px;         
        
    .icon {
      padding-bottom: 1rem;
      text-align: left;
    }
  }


  .description {
    text-align: left;
    h3 {
      font-size: ${Theme.textSize.titleCardXSm};
    }

    p {
      font-size: ${Theme.textSize.textSm};
      color: ${Theme.colors.white};
      line-height: 1.5rem;
      margin: 0;
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
      animation: fadeInUp 1s ease-out forwards;
    }

    .scroll-effect.visible.fade-down {
    animation: fadeInDown 0.8s ease-out forwards;
  }

  /*scroll-effect END */



`