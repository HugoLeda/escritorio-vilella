import styled from "styled-components";
import media from "styled-media-query";
import Theme from "../../styles/theme";

export const Homepage = styled.div `      
  
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
    gap: 5rem; 
  }
  
  .items {
    gap: 2rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    p {
      font-size: ${Theme.textSize.textSm};
    }

    span {
      text-transform: uppercase;  
      text-align: center;
      font-weight: 500;
      border-radius: 40px;          
      padding: .2rem .5rem;
    }
  }

  h1,h2 {
    color: ${Theme.colors.blue};
    font-size: ${Theme.textSize.titleMd};
  }
  

  button {
    padding: .2rem .5rem;
    height: 45px;

    border: none;    
    transition: ease-out all .2s;
    background-color: transparent;
    font-weight: 400;

    a {
      text-decoration: none;
      color: ${Theme.colors.blue2};
    }
  }
    

  .solutions {
    text-align: left;
    justify-content: space-between;
    gap: 5rem;

    span {
      background-color: ${Theme.colors.blue};
      color: ${Theme.colors.white};      
      padding: .2rem 1rem;
      user-select: none;
    }
      
    .partner {      
      max-width: 400px;
      align-items: center;
      height: 45px;
      justify-content: center;
      
      border-radius: 6px;
      border: 1px solid ${Theme.colors.blue};    
      transition: ease-out all .2s;
      background-color: transparent;
      color: ${Theme.colors.blue2};
      font-weight: 400;

      span {
        background-color: transparent;
        color: ${Theme.colors.blue2};
        text-transform: none;
        user-select: none;
      }
    }

    .solution-text,
    .for-you {
      flex: 1;
      max-width: 600px;      
    }

    .solution-text {
      justify-content: space-between;
    }

    .for-you {
      justify-content: flex-end;
      max-width: 500px;
      height: 350px;
      gap: 2rem;

      p {
        margin: 0;
      }

      .for-you-item {
        align-items: center;
        background: linear-gradient(to right, #EFF6FF, #fff);
        //background-color: rgba(168, 208, 255, 0.2);
        border-radius: 40px 0 0 40px;
        padding: .5rem 1rem;
        span {
          background-color: transparent;
        }
      }
    }

  }


  #specialties {
    background-color: #EFF6FF;
  }
  

  .specialties {
    text-align: center;
    span {
      background-color: ${Theme.colors.white};
      color: ${Theme.colors.blue};
      padding: .2rem 1rem;
      user-select: none;
    }

    .specialty-items {
      gap: 2rem;
      user-select: none;
      p {
        font-size: ${Theme.textSize.textMobileSm};
      }
    }
  }

  #tech-inovation {
    text-align: center;
    margin: 0;
  }

  .tech-inovation {
    gap: 5rem;
    p {
      max-width: 800px;
    }

    .tech-cards {
      gap: 2rem;
      justify-content: space-between;
      user-select: none;
    }

    .act {
      text-align: center;
      max-width: 190px;

      .description {
        width: 75%;
      }
    }
  }



  #client-center {
    background: linear-gradient(to right, #00116f, #0d2daa, #0d2daa);
    border-radius: 100px 0;
    color: ${Theme.colors.white};
  }

  .client-center {
    margin-bottom: 0;
    padding-top: 3rem;
    padding-bottom: 5rem;

    width: 100%;
    justify-content: space-between;
    gap: 5rem;


    .client-center-content {
      width: 100%;
      justify-content: space-evenly;
      gap: 5rem;

      .client-center-text {    
        max-width: 400px;  
        align-items: flex-start;
        gap: 2rem;
        span {
          background-color: ${Theme.colors.blue3};
          color: ${Theme.colors.white};
          user-select: none;          
        }
        
        h2 {
          color: ${Theme.colors.white};
          font-size: ${Theme.textSize.titleClientLg};
          span {
            background-color: transparent;
            text-align: left;
            padding: 0;
            color: ${Theme.colors.babyBlue};
            text-transform: none;
          }
        }
      }

      .client-center-benefits {
        align-items: center;      
        justify-content: center;  
        gap: 3rem;
        user-select: none;

        span {
          background-color: transparent;
        }
        h3 {
          font-size: ${Theme.textSize.textMobileMd};
          font-weight: 300;
        }

        .icon {
          gap: 2rem;
        }
      }
    }

    .img {
      position: relative;
      width: 350px;
      height: auto;
      top: 1rem;
      user-select: none;

      img {        
        pointer-events: none;
        animation: floatY 3s ease-in-out infinite;
        width: 350px;
        height: auto;
        display: block;
      }

      &::before {
        position: absolute;
        content: " ";
        width: 300px;
        height: 10px;
        bottom: 1rem;
        left: 5%;
        background: rgba(0, 0, 100, 0.6);
        filter: blur(10px);
        border-radius: 50%;
        animation: shadowPulse 3s ease-in-out infinite;
      }
      
      @keyframes shadowPulse {
        0%, 100% {
          width: 280px;
          filter: blur(8px);
          opacity: .9;
        }
        50% {
          width: 310px;
          filter: blur(10px);
          opacity: .6;
        }
      }
    }

    
    @keyframes floatY {
      0%, 100% {
        transform: translateY(10px);
      }
      50% {
        transform: translateY(-10px);
      }
    }


    button {
      border: 1px solid ${Theme.colors.white};
      background-color: transparent;
      a {
        color: ${Theme.colors.white};
      }
    }
  }

  .find-us {
    margin-bottom: 0;
    gap: 3rem;
    width: 100%;
  }

  .find-us-title {
    text-align: center;
    span {
      background-color: ${Theme.colors.blue};
      color: ${Theme.colors.white};      
      padding: .2rem 1rem;
      user-select: none;
    }
  }

  .find-us-content {
    justify-content: center;
    width: 100%;
    gap: 5rem;

      .map {
        box-shadow: 0 1px 10px rgb(0,0,0,0.1);
        border-radius: 8px;
        border: 1px solid rgba(168, 208, 255, 0.5);
        gap: 0;
        width: 100%;

        .spot {          
          padding: 1rem;     
          align-items: center;
          gap: 1rem;   
          width: 100%;        

          h3 {
            font-size: ${Theme.textSize.textLg};
          }
        }        
      }

      iframe {
        border-radius: 8px 8px 0 0;
        user-select: none;
      }

  }

  .where-to-find-us {
    gap: 1.5rem;
    flex-direction: column;
    justify-content: space-between;
    
    .spot {
      border: 1px solid rgba(168, 208, 255, 0.5);
      box-shadow: 0 1px 10px rgb(0,0,0,0.1);
      border-radius: 8px;
      width: 100%;
      max-width: 450px;
      
      padding: 1rem;
      align-items: center;
      gap: 1rem;    
      
      h3 {
        font-size: ${Theme.textSize.textLg};
      }
      p {margin: 0;}
      a {
        text-decoration: none;
        color: ${Theme.colors.gray1};
      }


      .mail {
        width: 100%;
        align-items: center;
        gap: 1rem;
      }

      
      .phone {     
        align-items: center;
        gap: 1rem; 
        width: 100%;
      }

      button {
        height: 2rem;
      }

      .whatsapp {
        background-color: #25D366;
        padding: 0 1rem;
        border-radius: 6px;
        box-shadow: 0 2px 5px rgb(0,0,0,0.2);
        border: none;
        user-select: none;
        text-transform: uppercase;
        cursor: pointer;
        transition: ease-out all .2s;
        align-items: center;
        

        a {
          font-size: ${Theme.textSize.textMobileSm};
          text-decoration: none;
          text-transform: uppercase;
          color: ${Theme.colors.white};
          font-weight: 500;
        }

        &:hover {
          background-color: ${Theme.colors.babyBlue};
          a {
            color: ${Theme.colors.blue1};
          }
        }
      }
    }
  }

  /*bullet to line animation button*/

  .specialties button,
  .tech-inovation button,
  .client-center button {
    position: relative;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .specialties button,
  .tech-inovation button {
    color: ${Theme.colors.blue};
  }

  .client-center button {
    color: ${Theme.colors.white};
  }


  .specialties button::after,
  .tech-inovation button::after,
  .client-center button::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 4px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease;
  }

  .specialties button::after,
  .tech-inovation button::after {
    background-color: ${Theme.colors.blue};
  }

  .client-center button::after {
    background-color: ${Theme.colors.white};
  }

  .specialties button:hover::after,
  .tech-inovation button:hover::after,
  .client-center button:hover::after {
    width: 100%;
    height: 1px;
    border-radius: 40px;
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



  @media (max-width: 1250px) {
    
    h1,h2 {
      font-size: ${Theme.textSize.titleMobileMd};
    }

    .solutions {
      flex-direction: column;
      gap: 3rem;

      .partner {
        display: none;
      }

      .for-you {
        max-width: 100%;
        align-items: flex-start;
        padding: 0 1rem;

        .for-you-item {
          padding: .5rem;
        }
      }
    }

    .specialty-items {
      flex-direction: column;
    
      .specialty-box {        
        max-height: 350px;
      
        align-items: center;
        justify-content: flex-end;
        gap: 2rem;
        padding-bottom: 1.5rem;
      }

    }
  }
  

  @media (max-width: 1080px) {

    .tech-inovation {  
      gap: 3rem;
      p {
        padding: 0;
      }

      .tech-cards{
        gap: 3rem;
        justify-content: center;

        .act {
          width: 150px;
          flex-direction: column;
          align-items: center;
          gap: 0;
          
          .icon-number {
            flex-direction: column;
          }

          .description {
            width: 100%;
            text-align: center;
          }
        }
      }
    }

  }

  @media (max-width: 1024px) {
    
    .find-us-content {
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;

      .map {        
        .spot {
          max-width: 500px;
        }
      }

      iframe {
        max-height: 250px;
      }

      .where-to-find-us {
        .spot {          
          max-width: 450px;
        }
      }
    }
  }


  @media (max-width: 1010px) {
    
    
    .tech-inovation {
      .tech-cards{
        //gap: 2rem;
        flex-wrap: wrap;
        justify-content: center;

        max-width: 500px;
      }
    }


    #client-center {
      border-radius: 0 100px 0 100px;
      padding-top: 0;
      
      h2 {
        font-size: ${Theme.textSize.titleMobileLg};
      }

      h3 {
        font-size: ${Theme.textSize.textMobileSm};
      }

      p {
        font-size: ${Theme.textSize.textMobileMd};
      }
    }

    .client-center {
      gap: 8rem;
      margin-top: 3rem;

    .client-center-content {
      align-items: center;
      gap: 3rem;

      .client-center-benefits {
        align-items: center;
        justify-content: space-around;
        width: 100%; 
        gap: 1rem;
        .icon {
          gap: 1.5rem;
        }
      }
    }

    .img {      
      top: 0;

      img {
        max-width: 300px;
      }

      &::before {
        bottom: -4rem;
      }
    }

    }

  }

  @media (max-width: 900px) {

    .client-center {
      gap: 8rem;
      margin-top: 3rem;

      .client-center-content {
        flex-direction: column;
        align-items: center;
        gap: 3rem;

        .client-center-benefits {
          align-items: center;
          width: 100%; 
          gap: 2rem;
        }
      }

      .img {      
        //top: 0;
        max-width: 250px;

        img {
          max-width: 250px;
          animation: none;
        }

        &::before {
          width: 250px;
          bottom: -4rem;
          animation: none;
        }
      }
    }
  }


  @media (max-width: 624px) {
        
    .solutions {
      margin-top: 4rem;
    }
    .tech-inovation {
      
      .tech-cards{
        gap: 3rem;

        .act {
          max-width: 150px;
        }
      }
    }

        
    #client-center {      
      h2 {
        font-size: ${Theme.textSize.titleMobileMd};
      }
    }
      
    .find-us-content {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      .map {        
        max-width: 350px;

        .spot {
          max-width: 350px;
        }
      }

      iframe {
        max-width: 350px;
        max-height: 250px;
      }

      .where-to-find-us {
        //align-items: center;
        .spot {          
          max-width: 350px;
        }
      }
    }
  }

  @media (max-width: 500px) {
   
    
    .solutions {
      .for-you {
        padding: 0;
      }
    }


    .tech-inovation {            
      .tech-cards{
        .act {
          max-width: 120px;
          .description {
            h2 {
              font-size: ${Theme.textSize.textMobileMd};
            }
          }
        }
      }
    }

    
    .find-us-content {
      .map {        
        .spot {
          width: 100%;
          max-width: 280px;
        }
      }

      iframe {
        max-width: 290px;
        max-height: 250px;
      }

      .where-to-find-us {
        .spot {        
          width: 100%;  
          max-width: 290px;
        }
      }
    }
  }

  
  @media (max-width: 400px) {
    
    #client-center {
      .client-center-benefits {
        gap: 0;
      }
    }
  }

`