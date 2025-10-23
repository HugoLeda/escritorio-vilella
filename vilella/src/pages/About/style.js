import styled from "styled-components";
import Theme from "../../styles/theme";

export const Aboutpage = styled.div`

  .flex,
  .flex-column {
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

  
  .items {
    gap: 2rem;
  }

  h1,h2 {
    font-size: ${Theme.textSize.titleCardLg};
    span {
      color: ${Theme.colors.babyBlue};
    }
    
  }
  p {
    font-size: ${Theme.textSize.textMd};
  }

  span {
    font-weight: 500;
  }

  button {
    width: 300px;
    height: 45px;
    border-radius: 6px;
    
    user-select: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: ease-out all .2s;
    background-color: transparent;
    
    a {
      text-decoration: none;
      font-weight: 500;
    }

  }


  header {
    background: linear-gradient(to right, #00116f, #1a3a8a, #0d2daa);
    //background-color: ${Theme.colors.blue2};
    color: ${Theme.colors.white};    

    .outdoor {
      gap: 5rem;
      justify-content: space-evenly;
      user-select: none;
    }

    .outdoor-items {
      gap: 5rem;
    }

    .outdoor-text,
    .outdoor-cards {
      flex: 1;
    }

    .outdoor-text {
      text-align: center;
      justify-content: center;
      h1 {
        width: 500px;
      }
    }

    .outdoor-cards {
      width: 400px;
      height: 400px;
    }
        

  .decor-frames {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 200px;
      height: 200px;
      background-color: ${Theme.colors.babyBlue};
      border-radius: 1rem;
      right: 5rem;
      bottom: 3rem;
      box-shadow: -8rem -6rem 0 0 ${Theme.colors.blue1};      
    }
  } 


    button {
      border: 1px solid ${Theme.colors.white};
      a {
        color: ${Theme.colors.white};
      }

      &:hover {
        background-color: ${Theme.colors.white};
        border: none;

      a {
        color: ${Theme.colors.blue2};
      }
      }      
    }
  }

  #history,
  #timeline {
    h1,h2 {
      color: ${Theme.colors.gray1};
    }
    span {
      color: ${Theme.colors.blue2};
    }

  }


  .history-text {
    align-items: flex-start;
    gap: 1rem;
    
    h2 {
      margin: 0;
    }
    span {
      font-size: ${Theme.textSize.titleSm};
    }
  }

  
  .img {
    border-radius: 1rem;
    width: 500px;
    height: 400px;
    object-fit: cover;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 75px;
      height: 75px;
      background-color: ${Theme.colors.babyBlue};
      border-radius: 1rem;
      right: -1rem;
      bottom: -2rem;
      box-shadow: -3rem -2rem 0 0 ${Theme.colors.blue1};
      
    }
  }

  figure {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 75px;
      height: 75px;
      background-color: ${Theme.colors.babyBlue};
      border-radius: 1rem;
      right: -1rem;
      top: 24rem;
      box-shadow: -3rem -2rem 0 0 ${Theme.colors.blue1};
      
    }
  } 


  #bsc {
    background-color: ${Theme.colors.gray1};
    color: ${Theme.colors.white};
  }


  .bsc-items {
    gap: 10rem;
    padding: 0;
  }

  .excelence {
    gap: 5rem;
    text-align: center;

    .excelence-text {
      span {
        text-transform: uppercase;
      }
      h2 {
        span {
          text-transform: none;
        }
      }
    }

    .excelence-cards {
      gap: 3rem;
    }
    
  }


  .advantages {
    gap: 5rem;
    justify-content: space-between;
    width: 100%;
    
    padding-right: 5rem;

    .advantages-text {
      align-items: flex-start;

      h2 {
        position: relative;
        &::after {
          position: absolute;
          content: " ";
          width: 90%;
          height: 2px;  
          background: linear-gradient(to right, #2b2b2b, #606060, #f2f2f2);
          border-radius: 0 40px 40px 0;
          right: 0;
          bottom: -1rem;
        }
      }

    }
  }


  /*AboutAdvantages START*/

  .diamond {
    position: relative;
    width: 300px;
    height: 220px;
  }

  /* cada circle posiciona com translate (somente posicionamento) */
  .circle {
    position: absolute;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${Theme.colors.white};
  }

  /* centro deve ficar exatamente no meio */
  .circle.center {
    width: 120px;
    height: 120px;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .circle[data-pos="top"] {
    top: -1rem;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .circle[data-pos="left"] {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }

  .circle[data-pos="right"] {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
  }

  .circle .inner {
    transition: transform .2s ease;
    opacity: 0.6;
  }

  /* estado ativo — escala */
  .circle.active .inner {
    transform: scale(1.15);
    z-index: 3;
    opacity: 100%;
  }

  
  .dots {
    text-align: center;
    padding-top: 2rem;
  }

  .dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    background: ${Theme.colors.lightGray};
    border-radius: 50%;
    margin: 0 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .dot.active {    
    background: transparent;
    border: 1px solid ${Theme.colors.lightGray};
  }



  /*AboutAdvantages END */



  /*AboutJourney START */

  

  #timeline {
    scroll-margin-top: 8.75rem; 
    background-color: ${Theme.colors.white};
    color: black;

    span {
      text-transform: uppercase;
    }
  }

  .timeline {
    margin: 5rem 0;
  }

  .timeline-start-end {
    user-select: none;
    p {
      padding: 1rem 5rem 0;
      text-align: center;
      width: 75%;
    }
  }

  .timeline-between {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -2rem;
      bottom: -2rem;
      left: 50%;
      width: 2px;
      background-color: ${Theme.colors.blue3};
      box-shadow: 1px 2px 8px rgba(117, 157, 204, 0.7);
      transform: translateX(-50%);
      z-index: 0;
    }
  
  }


  #call-to-action {
    background-color: ${Theme.colors.lightGray};
    margin-bottom: -5rem;

    p {
      text-align: center;
    }
  
    .items {
      gap: 2rem;
    }

    button {
      border: 1px solid ${Theme.colors.blue2};
      a {
        color: ${Theme.colors.blue2};
      }

      &:hover {
        background-color: ${Theme.colors.babyBlue};
        border: none;

        a {
          color: ${Theme.colors.white};
        }
      }
    }
  }


  .invite-text {
    gap: 2rem;

    span {
      display: block;
      color: ${Theme.colors.gray1};
      font-weight: 300;

    }
  }

    
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


  @media (max-width: 1170px) {

    
    h1,h2 {
      font-size: ${Theme.textSize.titleCardMd};
      span {
        color: ${Theme.colors.babyBlue};
      }
      
    }
    p {
      font-size: ${Theme.textSize.textMd};
    }

    span {
      font-weight: 500;
    }

    header {
      .decor-frames {
        display: none;
      }

      
    .outdoor-text {
      h1 {
        width: 400px;
      } 
    }

    }

    .outdoor-items {
      flex-direction: column-reverse;
      .outdoor-cards {
      }
    }

    .history {
      flex-direction: column-reverse;

      .img {
        width: 100%;
      }
    }

    
  figure {
    &::after {
      bottom: -3rem;
      box-shadow: -3rem -2rem 0 0 ${Theme.colors.blue1};      
    }
  } 


    #call-to-action {
      
      h2,p {
        width: 100%;
        text-align: center;
      }      


    }

  }

  
  @media (max-width: 1224px) {

    header {
      .decor-frames {
        display: none;
      }

      
    .outdoor-text {
      padding-top: 2rem;
    }

    }
    
    .excelence-cards {
     
      
      h3 {
        font-size: ${Theme.textSize.titleCardXSm};
        font-weight: 600;
      }

        
      p {
        font-size: ${Theme.textSize.textMobileSm};
      }

    }


  }

  @media (max-width: 1160px) {
 
    .excelence-cards {
      flex-direction: column;

    }
  }  


  @media (max-width: 960px) {


    header {

      .decor-frames {
        display: none;
      }

      
      .outdoor-text {
        padding-top: 5rem;
        h1 {
          width: 330px;
        } 

      }

    }    

    .advantages {
      flex-direction: column;
      align-items: center;
      gap: 6rem;
      padding-right: 0;

      .advantages-text {
        align-items: center;
        text-align: center;
        padding: 0 2rem;
      }

      .advantages-cards {
        flex-wrap: wrap;
      }

        .circle.center {
          top: 100%;
        }

        .circle[data-pos="top"] {
          top: -1.5rem;
        }

        .circle[data-pos="left"] {
          top: 45%;
          left: 15%;
        }

        .circle[data-pos="right"] {
          top: 45%;
          right: 15%;
        }

        
        .dots {
          padding-top: 5rem;
        }

    }

    
    .timeline-start-end:nth-child(1) {
      display: none;      
    }

    .timeline-between {  
      &::before {
        left: 5%;
        top: 7rem;
        bottom: 8rem;
      }  
    }

    .timeline-start-end p {
      width: 100%;
      padding: 1rem 2rem;
    }

  }

  @media (max-width: 370px) {

  }

`