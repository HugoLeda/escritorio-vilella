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
    margin: 8rem 0;
    padding: 0 10%;
  }

  .items {
    gap: 2rem;
  }

  h1,h2 {
    font-size: ${Theme.textSize.titleMd};
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
    position: relative;
    background-color: ${Theme.colors.blue};
    color: ${Theme.colors.white};
    padding: 0 10%;
    align-items: center;

    .outdoor {
      margin: 5rem 0;
      gap: 5rem;
      max-width: 1000px;
      justify-content: space-evenly;
      user-select: none;
    }

    .service-outdoor {
      flex-direction: column;
      justify-content: center;
      gap: 3rem;

      h1 {
        font-size: ${Theme.textSize.titleClientMd};
        max-width: 500px;
      }

      h1,p {
        text-align: center;
        margin:0;
      }

      .link {
        flex-direction: row;
        justify-content: center;
      }
    }

    .img {
      position: relative;
      justify-content: center;
      width: 400px;
      height: 400px;
      user-select: none;

      img {
        pointer-events: none;
        width: 400px;
        height: auto;
        z-index: 2;
      }
    }

    .decor-frames {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: ${Theme.colors.blue1};
        border-radius: 1rem;
        right: 0rem;
        top: 5rem;      
        box-shadow: none;
      }

      &::before {
        content: "";
        position: absolute;
        width: 200px;
        height: 200px;
        background-color: ${Theme.colors.babyBlue};
        border-radius: 1rem;
        right: 3rem;
        bottom: 3rem;
        box-shadow: -6rem -8rem 0 0 ${Theme.colors.white};
      }
    }

    button {
      border: 1px solid ${Theme.colors.white};
      background: transparent;

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

    .next-section {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -1rem;
    }
  }

  header::before {
    content: "";
    position: absolute;
    background: #0d2d7d;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
  }


  #history,
  #timeline {
    scroll-margin-top: 2rem; 

    h1,h2 {
      color: ${Theme.colors.gray1};
    }
    span {
      color: ${Theme.colors.blue2};
    }

  }

  .history {
    gap: 5rem;
  }


  .history-text {
    width: 100%;
    align-items: flex-start;
    gap: 1rem;
    max-width: 600px;

    h2 {
      margin: 0;
    }
    span {
      font-size: ${Theme.textSize.titleSm};
    }

    p {
      max-width: 600px;
    }
  }

  
  .image {
    display: flex;
    align-items: center;
    border-radius: 40px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 380px;
      height: 150px;
      background-color: #f2f2f2;
      border-radius: 2rem;
      right: 0;
      bottom: 0;
      box-shadow: 0 -13rem 0 0  ${Theme.colors.lightGray};
    }   

    img {
      position: relative;
      pointer-events: none;
      width: 350px;      
      height: 350px;
      object-fit: cover;
      border-radius: 2rem;
      object-position: 35% 50%;    
    }
  }


  #bsc {
    background-color: ${Theme.colors.blue};
    color: ${Theme.colors.white};
  }

  .bsc-items {
    gap: 8rem;
    padding: 0;
  }

  .excelence {
    gap: 3rem;
    text-align: center;
    margin-top: -2rem;

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
      p {
        font-size: ${Theme.textSize.textMobileMd};
      }
    }
    
  }


  .advantages {
    gap: 3rem;
    justify-content: space-around;
    width: 100%;
    //margin-bottom: 3rem;
    
    .advantages-cards {
      justify-content: space-around;
      gap: 3rem;
    }

  }


  /*AboutJourney START */
  
  #timeline {
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
    //user-select: none;
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
    margin-bottom: -8rem;
    
    .wrapper {
      margin-top: 5rem;
    }

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
    animation: fadeInUp .6s ease-out forwards;
  }

  .scroll-effect.visible.fade-down {
    animation: fadeInDown 0.6s ease-out forwards;
  }



  @media (max-width: 1224px) {

    header {
      .outdoor-text {
        padding-top: 2rem;
      }
    } 
    
    
    .history {
      .history-text {
        p {
          max-width: 550px;
        }
      }
      
      .image::before {
        right: -.5rem;
        bottom: 1rem;
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
  }
  

  @media (max-width: 1160px) {
 
    .bsc-items {
      gap: 5rem;
    }
    .excelence {
      gap: 3rem;
    }

    .excelence-cards {
      flex-direction: column;
    }
    
    .advantages {
      margin-bottom: 0;
    }

    .advantages-cards {
      flex-direction: column;
    }
  }  

  @media (max-width: 1140px) {

    header {
      .outdoor {
        gap: 3rem;
      }
    }
    
    #call-to-action { 
      h2,p {
        width: 100%;
        text-align: center;
      }
    }
  }

  @media (max-width: 1100px) {

    header {
      .outdoor {
        .decor-frames {
          display: none;
        }
      }
    }

    .history {
      margin: 5rem 0;
      padding: 0 18vw 0 20vw;
      .history-text {
        p {
          max-width: 100vw;
          text-align: justify;
        }
      }
      .image {
        display: none;
      }
    }
  }


  @media (max-width: 960px) {

    header {            

      .service-outdoor {
        gap: 3rem;
      }
      .outdoor-text {
        padding-top: 5rem;
        h1 {
          //width: 330px;
        } 
      }
    }    

    
    .history {
      padding: 0 10vw;
    }

    .advantages {
      flex-direction: column;
      align-items: center;
      padding-right: 0;
    }

    
    .timeline-start-end:nth-child(1) {
      display: none;
    }

    .timeline-between {  
      &::before {
        left: 5%;
        top: 6rem;
        bottom: 8rem;
      }  
    }

    .timeline-start-end p {
      width: 100%;
      padding: 1rem 2rem;
    }
    
  }

  @media (max-width: 624px) {

    header {      
      padding: 10%;
      .service-outdoor {    
        h1 {
          font-size: ${Theme.textSize.titleClientSm};
        }
      }
    }

    .history {
      margin: 5rem 0;
      p {
        font-size: ${Theme.textSize.textMobileMd};
      }
    }

    .excelence {
      h2 {
        padding: 0 2rem;
      }
    }

    .timeline {
      p {    
        font-size: ${Theme.textSize.textMobileSm};          
      }
    }

    .invite-text {
      padding: .25rem;
      span {
        padding-top: 1rem;
      }
    }
  }

  @media (max-width: 452px) {
    header {
      padding: 10%;
      
      .service-outdoor {            
        gap: 5rem;
        h1 {
          font-size: 1.95rem;
        }
        p {
          font-size: ${Theme.textSize.textMobileLg};
        }
      }
    }
    .excelence{
      .excelence-cards {
        p {
          font-size: 1rem;
        }
      }
    }

    .invite-text {
      p {
        font-size: 1.1rem;
      }
    }
  }
  

  @media (max-width: 390px) {
    header {
      .service-outdoor {         
        gap: 5rem;
        h1 {
          font-size: 1.9rem;
        }
        p {                 
          font-size: ${Theme.textSize.textMobileMd};
        }
      }

      button {
        a {
          padding: 0;
          font-size: 90%;
        }
      }
    }

    
    .history {
      .history-text {
        p {
          font-size: ${Theme.textSize.textMobileSm};
        }
      }
    }

    


    .advantages {
      padding: 0 10vw;
      
      .advantages-cards {         
        gap: 2rem;
        p {          
          font-size: 90%;
        }
      }
      .advantage-card {
        padding: 2rem;
      }

    }

    .timeline {
      P {
        font-size: 90%;
      }
      
    }
  }
 
  @media (max-width: 372px) {
    

    header {
      padding: 0 10vw;     

      .service-outdoor {    
        
        gap: 5rem;
        h1 {
          font-size: 1.75rem;
        }
        p {                 
          font-size: ${Theme.textSize.textMobileMd};
        }
      }

      button {
        width: 280px;
      }
    }

    .history {
      
      .history-text {
        p {
          font-size: ${Theme.textSize.textMobileSm};
        }
      }
    }

    .advantages {
      
      
      .advantages-cards {         
        gap: 2rem;
        p {          
          font-size: 90%;
        }
      }
      .advantage-card {
        padding: 2rem;
      }
    }


    .call-to-action {      
      
      button {
        width: 280px;
      }
    }
  }


`