import styled from 'styled-components'
import Theme from '../../styles/theme'

export const BannerContainer = styled.section`

  /*for both banners */

  #banner {
    user-select: none;
  }

  .flex,
  .flex-column {
    display: flex;
  }
  
  .flex-column {
    flex-direction: column;
  }

  .wrapper {
    max-width: 1920px;
    margin: auto;
    padding: 8rem 10%;
  }
  
  .banner-text {
    gap: 3rem;
  }

  .text {    
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    max-width: 600px;
    height: 100%;

    p {
      font-size: ${Theme.textSize.titleCardSm};
      font-weight: 400;
      position: relative;
      
      span {
        text-transform: none;
        padding: 0;
        color: ${Theme.colors.blue3};
      }
    }
  }

  
  button {
    padding: .2rem 1rem;
    height: 45px;
    border: none;    
    transition: ease-out all .2s;
    background-color: transparent;

    a {
      text-decoration: none;      
      font-weight: 400;
      text-transform: uppercase;
    }
  }

  
  .button {
    gap: 1rem;
    align-items: flex-end;
    //height: 100%;
  }

  
  .image {
    display: flex;
    align-items: center;
    border-radius: 40px;
    position: relative;

    img {
      pointer-events: none;
      width: 350px;      
      height: 350px;
      object-fit: cover;
      border-radius: 40px;
      object-position: 0% 50%;
    }
  }



  /*office banner  */

  .office {
    justify-content: center;
    gap: 5rem;
  }

  .banner-office {
    gap: 5rem;
    background-color: #EFF6FF;

    .text {
      p {
        color:${Theme.colors.blue};
        
        span {
          text-transform: none;
          padding: 0;
          color: ${Theme.colors.blue3};
        }

        &::before {
          position: absolute;
          content: " ";
          background: linear-gradient(to right, #93c5ff, #eff6ff, #eff6ff);
          width: 100%;
          height: 2px;
          bottom: -1.5rem;
          border-radius: 40px;
        }
      }

      span {
        text-transform: uppercase;  
        text-align: center;
        font-weight: 500;
        border-radius: 40px;          
        padding: .2rem .5rem;
      }
    }

    h1 {
      font-size: ${Theme.textSize.titleClientXLg};
    }

    h1,h2 {    
      color: ${Theme.colors.blue};
    }


    .specialists,
    .services {
      border-radius: 8px;
    }
    
    .specialists {
      background-color: #0d2daa;
      a {
        color: ${Theme.colors.white};
      }    
      &:hover {            
        background-color: ${Theme.colors.babyBlue};
      a {
        color: ${Theme.colors.blue};
      }    
      }
    }
    
    .services {
      border: 1px solid #0d2daa;
      background-color: transparent;
      a {
        color: ${Theme.colors.blue};
      }    
      &:hover {            
        background-color: ${Theme.colors.babyBlue};
        border: 1px solid ${Theme.colors.babyBlue};
      a {
        color: ${Theme.colors.white};
      }    
      }
    }


    .image {
      &::after {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: ${Theme.colors.babyBlue};
        border-radius: 1rem;
        left: 0rem;
        bottom: -3rem;
        box-shadow: -3rem -3rem 0 0 ${Theme.colors.blue1};      
      }

      &::before {
        content: "";
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: ${Theme.colors.blue2};
        border-radius: .75rem;
        right: 2rem;
        top: -1.5rem;    
      }
    }
  }


  /* team banner */

  
  .team {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 5rem;
  }

  .banner-team {
    background: linear-gradient(to right, #00116f, #0d2daa);
    
    .text {
      gap: 0;
      p {
        color: ${Theme.colors.white};
        
        &::before {
          position: absolute;
          content: " ";
          background: linear-gradient(to right, #93c5ff, #0d2daa);
          width: 100%;
          height: 2px;
          bottom: -1.5rem;
          border-radius: 40px;
        }
      }
    }

    .image {        
      display: flex;
      align-items: center;
      img {
        object-position: 40% 50%;
      }

      &::after {
        content: "";
        position: absolute;
        width: 75px;
        height: 75px;
        background-color: ${Theme.colors.babyBlue};
        border-radius: 1rem;
        left: -2rem;
        bottom: 18rem;
        box-shadow: 2rem -2rem 0 0 ${Theme.colors.white};      
      }

      &::before {
        content: "";
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: ${Theme.colors.blue};
        border-radius: .75rem;
        right: 2rem;
        top: 20rem;    
      }
    }

    h1 {
      font-size: ${Theme.textSize.titleClientXLg};
      display: flex;
      align-items: center;
      gap: 1rem;
      .years {
        font-size: 8rem;
        font-weight: 400;
      }
    }

    h1,h2 {
      color: ${Theme.colors.white};
    }

    .our-team,
    .work-with-us {
      border-radius: 8px;
    }
    
    .our-team {
      border: 1px solid ${Theme.colors.white};
      background-color: transparent;
      a {
        color: ${Theme.colors.white};
      }    
      &:hover {            
        background-color: ${Theme.colors.babyBlue};
        border: 1px solid ${Theme.colors.babyBlue};
      a {
        color: ${Theme.colors.white};
      }    
      }
    }
    
    .work-with-us {
      border: 1px solid #f33;
      background-color: transparent;
      a {
        color: ${Theme.colors.red2};
      }    
      &:hover {            
        background-color: ${Theme.colors.babyBlue};
        border: 1px solid ${Theme.colors.babyBlue};
      a {
        color: ${Theme.colors.white};
      }    
      }
    }

  }

  


  @media (max-width: 1180px) {
    
    #banner {
      min-height: 600px;
    }

    .image {
      img {
      width: 300px;
      height: 300px;
    }
  }

    .office {
      gap: 0;
    }

    .banner-office {
      
      .image {
        &::after {
          width: 75px;
          height: 75px;
          left: 1rem;
          bottom: -2rem;
          box-shadow: -3rem -3rem 0 0 ${Theme.colors.blue1};      
        }

        &::before {
          border-radius: .75rem;
          right: 2rem;
          top: 0;    
        }
      }
    }
    
    .team {
      gap: 2rem;
    }

    .banner-team {
        
      .image {
        img {
          object-position: 40% 50%;
        }

        &::after {
          left: -2rem;
          bottom: 15rem;    
        }

        &::before {
          right: 2rem;
          top: 18.5rem;    
        }
      }
    }
  }
  
  @media (max-width: 1080px) {
  
    .banner {
        gap: 3rem;
      }

    .image {
      img {
        width: 275px;
        height: 275px;
      }

    }

    h1 {
      font-size: ${Theme.textSize.titleMd};
    }
     
    .text {
      p {
        font-size: ${Theme.textSize.textMd};
      }
    }

    .banner-team {
      .image {
        &::before {
          right: 2rem;
          top: 18rem;    
        }
      }
    }

  }

  
  @media (max-width: 1024px) {

    
    #banner,
    .banner-office,
    .banner-team {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 600px;
    }

    
    .wrapper {
      width: 100%;
      max-width: none;
      padding: 0;
      margin: 0;
    }

    .banner-text {
      width: 100%;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: left;
    }

    .banner-office .image,
    .banner-team .image {
      display: none;
    } 
      
    .banner-text {
      gap: 2rem;

      a {
        width: 100%;
      }
    }

    .banner-office {
      .main-title {
        gap: 1rem;
      }
      p {
        font-size: ${Theme.textSize.textLg};
        &::before {          
          background: linear-gradient(to right, #93c5ff, #eff6ff);
        }
      }

    }

    .button {
      flex-direction: column;
      align-items: center;
      width: 100%;
      
      .specialists,
      .services {
        width: 100%;
      }
    }

    .team {
      flex-direction: column-reverse;
    }
  
    .banner-team {

      .main-title {
        gap: 1rem;
      }

      button {
        width: 100%;
        max-width: 600px;
      }

    }

  }

  @media (max-width: 790px) {
    
    .wrapper {
      padding: 5% 10%;
    }

    .text {
      max-height: 500px;
    }

    .banner-office {
      h1 {        
        font-size: ${Theme.textSize.titleClientMd};
      }
    }
    .banner-team {
      align-items: center;

      .text {
        justify-content: center;
        gap: 2rem;
      }


      .banner-text {
        height: 100%;
        position: relative;
      
        &::before {
          position: absolute;
          content: " ";
          background: linear-gradient(to right, #00116f, #93c5ff, #0d2daa);
          width: 75%;
          height: 2px;
          bottom: 35%;
          border-radius: 40px;

        }
      }

      .banner-team-title {
        justify-content: center;
      }

      p {
        text-align: center;
        font-size: ${Theme.textSize.textLg};
        &::before {          
          display: none;    
        }
      }
    }

    .wrapper {
      height: calc(80vh - 2.4rem - 67px);
    }
  }

  @media (max-width: 600px) {


    .banner-team {

    .banner-team-title {
      justify-content: center;
    }

      h1 {
        font-size: ${Theme.textSize.titleCardLg};
        .years {
          font-size: 6rem;
        }
      }
    }
  }

  @media (max-width: 390px) {
    
    .banner-office {

      button {
        padding: 0;
        a {
          font-size: .9rem;
        }
      }
      .text {
        h1 {
          font-size: ${Theme.textSize.titleMobileMd};
        }
        p {
          font-size: ${Theme.textSize.textMobileLg};
          &::before {
            //display: none;
          }
        }
      }
    }

    .banner-team {
      h1 {
        gap: .5rem;
      }
    }
  }

`