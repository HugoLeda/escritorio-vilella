import styled from "styled-components";
import media from "styled-media-query";
import Theme from "../../styles/theme";

export const Servicespage = styled.section `
  
  .wrapper {
    max-width: 1920px;
    margin: 5rem 0 5rem 0;
    padding: 0 10%;
  }
  
  .flex,
  .flex-column {
    display: flex;
  }
  
  .flex-column {
    flex-direction: column;
    align-items: center;
  }

  h1,h2 {
    font-size: ${Theme.textSize.titleClientLg};
    color: #0d2daa;//color: ${Theme.colors.blue};
  }

  p {
    font-size: ${Theme.textSize.textLg};
    color: ${Theme.colors.gray1};
    
  }
  

  .text {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    p {
      font-size: ${Theme.textSize.textSm};
    }

    span {
      font-weight: 500;
      border-radius: 40px;          
      padding: .2rem .5rem;
    }
  }
  
  .items {
    gap: 3rem;
  }

  
  button {
    padding: .2rem 1rem;
    height: 45px;

    border: none;    
    border-radius: 6px;
    box-shadow: 0 2px 8px rgb(0,0,0,0.2);
    transition: ease-out all .2s;
    background-color: transparent;
    font-weight: 400;
    user-select: none;

    a {
      text-decoration: none;
      text-transform: uppercase;
    }
  }

  header {
    position: relative;
    background-color: #EFF6FF;    
    padding: 0 10%;
    align-items: center;
    user-select: none;
    
    .outdoor {
      margin: 5rem 0;
      gap: 8rem;      
      max-width: 1000px;
    }
   
    .service-outdoor {
      flex-direction: column;
      justify-content: center;
      gap: 2rem;      

      .link {
        flex-direction: row;
        align-items: flex-start;
      }

      h1 {
        font-size: ${Theme.textSize.titleClientXLg};
      }
    }    
    
    .img {
      position: relative;
      justify-content: center;
      width: 400px;
      user-select: none;

      img {
        width: 400px;
        height: auto;
        z-index: 2;
      }
    }

    .img::before {
      position: absolute;
      content: "";      
      width: 300px;
      height: 5rem;
      top: 60%;
      background: rgba(10, 101, 185, 0.6);
      filter: blur(50px);
      border-radius: 50%;
    }
    

    button {
      background-color: #0d2daa;
      a {
        text-decoration: none;
        align-items: center;
        color: ${Theme.colors.white};
      }
    
      &:hover {
        background-color: ${Theme.colors.babyBlue};
        a {
          color: ${Theme.colors.blue1};
          font-weight: 500;
        }
      } 
    }
    
    .next-section {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -1rem;
    }
  }

  header::before {
    content: " ";
    position: absolute;
    background-color: #EFF6FF;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
  }

  #business-consulting {
    scroll-margin-top: 1rem; 
  }

  .business-consulting-wrapper {
    margin: 8rem 0;
    gap: 3rem;
    width: 1005;
   
    
    .consulting-button { 
      button {        
        background-color: #eff6ff;
        color: ${Theme.colors.blue3};
        border-radius: 40px;
        padding: 0 1rem;     
        box-shadow: none;
        text-transform: uppercase;
        user-select: none;
      }     
    }

    .accounting-advisory {
      gap: 3rem;
      padding: 0;
      justify-content: space-between;
      width: 100%;
      
      .advisory-content {
        width: 100%;
        justify-content: center;
        gap: 5rem;
      }

      .icon {
        width: 150px;
        padding-top: 2rem;
        span {
          border-radius: 50%;
          padding: 1rem;
          border: 2px solid #1a3a8a;
          width: 150px;
          height: 150px;
          align-items: center;
          justify-content: center;
          //padding-left: 1.5rem;
        }
      }

      .advisory-benefits-wrapper {
        gap: 2rem;
        max-width: 600px;
        align-items: flex-start;
      }

      .advisory-benefits {
        gap: 1rem;
        max-width: 550px;
        align-items: center;
        span {          
          border-radius: 50%;
          background-color: #0d2daa;
          padding: .5rem;
          
        }
        p {
          margin: 0;
        }
      }

      .option-cta {
        a {
          text-decoration: none;

          button {
            background-color: #0d2daa;
            text-transform: uppercase;            
            color: ${Theme.colors.white}; 
            
            &:hover {
              background-color: ${Theme.colors.babyBlue};
              color: ${Theme.colors.blue1};
              font-weight: 500;
            } 
          }
        }        
      }
    }

    button.active {
      background-color: #93c5ff;
      color: ${Theme.colors.white};
    }

    .advisory-content h2 {
      margin-bottom: 1rem;
    }

    .advisory-benefits {
      gap: 1rem;
      margin-bottom: 0.5rem;
    }

  }

  .why-choose-us {
    background-color: #eff6ff;
    
    .why-choose-us-wrapper {
      margin-bottom: 12rem;
      gap: 5rem;
    }

    .why-choose-us-title {
      gap: 2rem;
       
      span {
        background-color: ${Theme.colors.white};
        color: ${Theme.colors.blue};
        user-select: none;
        
        text-transform: uppercase;  
        text-align: center;
        font-weight: 500;
        border-radius: 40px;          
        padding: .2rem .5rem;
      }
    }
    
  }

  .excelence {
    position: relative;
    bottom: 5rem;
    background-color: #0d2daa;
    padding: 2rem 5rem;      
    justify-content: space-between;    
    gap: 5rem;
    border-radius: 40px;
    user-select: none;
    
    .excelence-title {
      gap: 1rem;
      align-items: flex-start;
    }

    
    .excelence-icons {
      align-items: center;
      gap: 1rem;
    }

    h2,span,p {
      color: ${Theme.colors.white};      
    }

    p {
      margin: 0;
    }
  }


  .each-client {
    margin-top: 0;
    p {
      color: ${Theme.colors.gray1};
    }

    .office-actions {
      text-align: center;
      user-select: none;
      flex: 1;
      gap: 4rem;
      .act {
        max-width: 200px;
        p {
          color: ${Theme.colors.gray1};
          margin: 0;
        }
      }
    }
  }
  
  .where-to-find-us {
    
    h3 {
      font-size: ${Theme.textSize.textLg};
    }
    p {      
      font-size: ${Theme.textSize.textSm};
      margin: 0;
    }
    a {
      text-decoration: none;
      color: ${Theme.colors.gray1};
    }

  }
  
  .cta {
    margin-bottom: 0;
    gap: 3rem;

    .cta-title {
      gap: 2rem;
      p {      
        color: ${Theme.colors.gray1};
        margin: 0;
        //font-size: ${Theme.textSize.textMobileMd};
      }
    }
    
    .spot {
      border: 1px solid rgba(168, 208, 255, 0.5);
      box-shadow: 0 2px 8px rgb(0,0,0,0.1);
      border-radius: 6px;
      padding: 1rem 2rem;
      max-width: 300px;
      align-items: center;
      gap: 1rem;

      h3 {margin:0;}
      p {
        margin: 0;
        color: ${Theme.colors.gray1};
      }

      
      .phone,
      .mail {      
        align-items: center;
        gap: 1rem;
      }
    }


    .button {
      padding-top:2rem;
    }

    button {
      width: 300px;
      background-color: #0d2daa;
      a {
        text-decoration: none;
        color: ${Theme.colors.white};
      }
      
      &:hover {
        background-color: ${Theme.colors.babyBlue};
        a {
          color: ${Theme.colors.blue1};
          font-weight: 500;
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
      animation: fadeInUp 1s ease-out forwards;
    }

    .scroll-effect.visible.fade-down {
    animation: fadeInDown 0.8s ease-out forwards;
  }

  /*scroll-effect END */


  @media (max-width: 1200px) {

    
    header {

      .service-outdoor {
        h1 {
          font-size: ${Theme.textSize.titleClientLg};
        }
        p {
          font-size: ${Theme.textSize.textMd};
        }
      }      
    }

  }


  
  @media (max-width: 1170px) {

    .wrapper {
      margin: 5rem 0;
    }

    header {
      
      .outdoor {
        flex-direction: column-reverse;
        gap: 2rem;
      }

      .link {
        justify-content: center;
      }

      .service-outdoor {
        padding: 0 2rem;
        text-align: center;
        
        h1 {        
          font-size: ${Theme.textSize.titleMobileMd};
        }
        p {
          font-size: ${Theme.textSize.textMobileSm};
        }
      }
      

      .img {
        width: 100%;
        img {
          width: 300px;
        }
      }

      .img::before {  
        width: 250px;
        height: 4rem;
        top: 60%;
      }

      
      }

    header .banner span {
      display: none;
    }

    .business-consulting-wrapper {
      
      h2 {        
        font-size: ${Theme.textSize.titleClientXxSm};
        text-align: center;
      }

      .consulting-button {        
        line-height: 1.15;        
      }

      .accounting-advisory {
        .advisory-content {
          gap: 3rem;

          .icon {
            padding: 0;
          }
        }

      }
    }

    .advisory-content {
      flex-direction: column;      
      align-items: center;
      gap: 2rem;
      
      p {
        font-size: ${Theme.textSize.textMobileSm};
      }

    }

    .why-choose-us {

      .why-choose-us-wrapper {
        gap: 3rem;
      }
      h2 {        
        font-size: ${Theme.textSize.titleClientSm};
        text-align: center;
      }            
    }


    .each-client {
      margin: 0;
      .each-client-title {        
        text-align: center;
        gap: 2rem;
        h2 {        
          font-size: ${Theme.textSize.titleClientSm};
          padding: 0 2rem;
        }
        p {
          font-size: ${Theme.textSize.textMobileMd};
        }
      }

      .office-actions {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        //flex-direction: column;

        .act {
          gap: 0;
          max-width: 280px;
          .description {
            h2 {
              font-size: ${Theme.textSize.textLg};
            }
          }

          .icon-number {
            align-items: center;
            justify-content: center;
          }
        }
      }
    }


    .cta {
      margin-bottom: 0;

      .cta-title {
        text-align: center;
      }

      h2 {
        font-size: ${Theme.textSize.titleClientXxSm};
      }
      p {
        font-size: ${Theme.textSize.textMobileMd};
      }
      .where-to-find-us {
        flex-direction: column;
        gap: 2rem;
      }

      
    .button {
      padding-top: 0;
    }
      button {
        max-width: 284px;
      }
    }
  }
  
  @media (max-width: 1140px) {
    
    .excelence {
      text-align: center;
      padding: 3rem;
      top: -6rem;
      gap: 3rem;

      .excelence-icons {
        align-items: center;
        justify-content: center;
        display: none;
      }
      
      h2 {        
        font-size: ${Theme.textSize.titleMobileLg};
      }
    }

  }
  
  @media (max-width: 800px) {

    header {
      padding: 0;
      
      .img {
        img {
          width: 200px;
          height: auto;
        }
      }
      .img::before {  
        width: 150px;
        height: 3rem;
        top: 60%;
      }

    }

    .outdoor {
      margin: 0;
    }

    .excelence-wrapper {
      height: 0;
      margin-bottom: 8rem;
    }

    .excelence {
      max-width: 300px;
      padding: 2rem;
      bottom: 0rem;
      p {
        display: none;
      }
    }
  }

  @media (max-width: 600px) {
    
    header {
      .service-outdoor {
        h1 {
          font-size: ${Theme.textSize.titleMobileLg};
          padding: 0 2rem;
        }
        p {
          font-size: ${Theme.textSize.textMobileSm};
          padding: 0 2rem;
        }
      }
      .img {
        img {
          width: 200px;
          height: auto;
        }
      }            
    }

    .each-client {   
      .office-actions {
        .act {
          gap: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 500px) {

    header {
      .outdoor {
        margin-top: 3rem;
      }
      .service-outdoor {
        h1 {
          font-size: ${Theme.textSize.titleMobileMd};
          padding: 0;
        }
        p {
          font-size: ${Theme.textSize.textMobileSm};
          padding: 0;
        }
      }
    }

    .each-client {
      margin-top: 1rem;
    }
  }

  @media (max-width: 405px) {

    button {
      padding: .5rem;
    }
    .business-consulting-wrapper {
      .consulting-button {
        gap: 1rem;
      }

      button {
        display: flex;
        align-items: center;
        line-height: 1.2;
      }
    }
  }


`