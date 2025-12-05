import styled from "styled-components"
import Theme from "../../styles/theme"

export const Lgpdpage = styled.div `

  .wrapper {
    max-width: 1920px;
    margin: 5rem auto 0 auto;
    padding: 0 10%;
  }

  .flex,
  .flex-column {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  h1,h2 {
    user-select: none;
    color: ${Theme.colors.blue1};
  }

  h2 {
    font-size: ${Theme.textSize.titleMd};
  }

  p {
    font-size: ${Theme.textSize.textLg};
    line-height: 1.5;
  }

  header {
    background-color: #eff6ff;
  }

  
  .outdoor-wrapper {
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    width: 100%;   
    user-select: none; 
    margin-bottom: 5rem;
  }
  .outdoor-text {
    gap: 1rem;
    max-width: 550px;

    h1 {
      font-size: ${Theme.textSize.titleClientXLg};
    }
  }

  .img {
    justify-content: center;
    width: 430px;
    user-select: none;

    img {
      width: 430px;
      height: auto;
    }
  }
  
  .link {
    padding-top: 1rem;

    button {
      padding: 0 1rem;
      height: 45px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgb(0,0,0,0.2);
      border: none;
      user-select: none;
      background-color: #0d2daa;
      cursor: pointer;
      transition: ease-out all .2s;

      a {
        text-transform: uppercase;
        font-size: ${Theme.textSize.textMobileSm};
        font-weight: 500;
        color: ${Theme.colors.white};
        text-decoration: none;
        align-items: center;
        justify-content: center;
        gap: .25rem;

        .icon {
          color: #fff;
          transition: transform 0.5s ease;
          
          @keyframes swingSmooth {
            0% { transform: translateY(0px); }
            25% { transform: translateY(1px); }
            50% { transform: translateY(-1px); }
            75% { transform: translateY(1px); }
            100% { transform: translateY(0px); }
          }
        }
      }
      &:hover {
        background-color: ${Theme.colors.babyBlue};
        a {
          color: #0d2daa;
          .icon {
            color: #0d2daa;
            animation: swingSmooth 0.5s ease forwards;
          }
        }
      }
    }
  }

  main {
    justify-content: center;
    text-align: center;
    gap: 5rem;
    margin-bottom: 5rem;
  }


  .law-view {
    align-items: center;
    justify-content: center;
    gap: 3rem;
    text-align: center;
    
    p {
      width: 80%;
    }
    
    
    .rights {
      gap: 1.5rem;      
      user-select: none;
      p {
        width: 100%;
        font-size: ${Theme.textSize.textMobileSm};    
      }
    }
  }

  .compromise {
    align-items: center;
    gap: 5rem;

    p {
      color: ${Theme.colors.gray1};
      font-size: ${Theme.textSize.textLg};
    }

    .compromise-title {
      gap: 2rem;
    }

    .office-actions {
      gap: 2rem;    
      user-select: none;
      p {
        font-size: ${Theme.textSize.textSm};
      }
    }
  }


  .embrasi {
    background-color: #eff6ff;
    align-items: center;
  }

  .compliance-wrapper {
    gap: 3rem;    
    margin: 5rem 0;
    h2 { 
      position: relative;
  
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -.5rem; 
        width: 100%;
        max-width: 100px;
        height: 5px;
        background-color: ${Theme.colors.blue3};
        box-shadow: 1px 2px 8px rgba(0, 119, 255, 0.5);
        border-radius: 3px;
      }
    }
    .compliance {
      justify-content: space-between;
      width: 100%;
      gap: 3rem;
      .compliance-text {
        flex: 4;
        justify-content: center;
        text-align: left;
        gap: 1rem;              
      }

        h3{
          color: ${Theme.colors.red2};
        }

        a {
          color: #2F5AAE;
        }

      }
      .compliance-checks {
        justify-content: space-around;
        gap: 1rem;
        flex: 3;
        user-select: none;
        p {
          font-size: ${Theme.textSize.textSm};
        }
      }
  }
  
  #contact-us {
    scroll-margin-top: 2rem; 
  }

  .contact-dpo-form {
    gap: 3rem;
    max-width: 1200px;
    justify-content: space-around;
  }

  .contact-wrapper {
    justify-content: space-around;
    align-items: center;
    text-align: center;
    gap: 2rem;


    .your-voice-matters {
      width: 100%;      
      gap: 2rem;
    }

    .dpo,
    .form {
      flex: 1;
      background-color: #fcfcfc;
      padding: 2rem;
      border-radius: 6px;
      box-shadow: 0 1px 8px rgb(0,0,0,0.2);
      gap: .5rem;

      .whatsapp,
      .mail {
        padding: .5rem 1rem;
        border-radius: 6px;
        box-shadow: 0 2px 5px rgb(0,0,0,0.2);
        border: none;
        user-select: none;
        text-transform: uppercase;
        cursor: pointer;
        transition: ease-out all .2s;

        a {
          font-size: ${Theme.textSize.textMobileSm};
          font-weight: 700;
          text-decoration: none;
        }

        &:hover {
          background-color: ${Theme.colors.babyBlue};
          a {
            color: ${Theme.colors.blue1};
          }
        }

        
      }
      .whatsapp {
        background-color: #25D366;
        a {
          color: ${Theme.colors.white};
        }
      }

      .mail {
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
            
    }
    
    .dpo {      
      justify-content: space-between;      
      text-align: center;
      gap: 2rem;
    }

    .form {
      justify-content: space-between;
      gap: 1rem;
      h2 {
        font-size: ${Theme.textSize.titleSm};
      }
      p {
        font-size: ${Theme.textSize.textMobileSm};
        margin: 0;
        color: ${Theme.colors.red2};
      }      
    }



    .dpo-icons{
      justify-content: space-around;
      width : 100%;
      gap: 1rem;
      span {
        font-weight: 300;
        color: ${Theme.colors.gray1};
      }
      a {
        text-decoration: none;
      }
      .dpo-icon {        
        gap: .5rem;
      }  
    }

    .dpo-info {
      align-items: center;
      gap: 2rem;
      user-select: none;

      h2  {
        font-size: ${Theme.textSize.titleSm};
        margin:0;
      }
      p {        
        color: ${Theme.colors.gray1};
        font-size: ${Theme.textSize.textMobileSm};
      }
    }

    .dpo-title {
      align-items: center;
      gap: 1rem;
    }

    .dpo-redirect {
      gap: 1rem;
    }
  }



  @media (max-width: 1190px) {
    
    header {
    .outdoor-wrapper {      
      gap: 5rem;
      justify-content: center;

      .outdoor {
        h1 {
          font-size: ${Theme.textSize.titleMobileMd};
          span {
            font-size: ${Theme.textSize.titleMobileMd};
          } 
        }
        .outdoor-text {
          max-width: 400px;
        }
      }
      
      .img {
        width: 350px;
        img {
          width: 350px;
          height: auto;
        }
      }
    }
  }

  }

  @media (max-width: 1080px) {

    header {
    .outdoor-wrapper {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      .outdoor {
        .outdoor-text {
          width: 100%;
          max-width: 400px;
          text-align: center;
          align-items: center;        
        }
      }
    }}
        
    main{
      gap: 0;
      .law-view {
        gap: 2rem;
      }
      .office-actions {
        flex-direction: column;
      }
    }

    .contact-dpo {
      .contact-dpo-form {
        display: flex;
        flex-direction: column;    
        max-width: 500px; 
      }      
    }

    .rights {
      flex-direction: column;
    }

  }

  @media (max-width: 926px) {
    
    p {
      font-size: ${Theme.textSize.textMobileLg};
    }
    
    main {
      .compromise {
        gap: 2rem;
        p {
          font-size: ${Theme.textSize.textMobileMd};
        }
      }
    }

    .embrasi {
      .compliance {
        gap: 2rem;
        .compliance-text {
          justify-content: flex-start;
          gap: 1rem;
        }
      }
    }    

  }

  @media (max-width: 840px) {
      
    main {
      .law-view {
        p {
          width: 100%;
        }
      }
    }
      
    .embrasi {
      .compliance {
        gap: 1rem;
        p {
          font-size: ${Theme.textSize.textMobileMd};
        }
        flex-direction: column;
      }
    }    

  }

  @media (max-width: 600px) {
    
    h1,h2 {
      font-size: ${Theme.textSize.titleClientSm};
      span {
        font-size: ${Theme.textSize.titleMobileMd};
      }
    }
    p {
      font-size: ${Theme.textSize.textMobileMd};
    }

    header {
      .outdoor-wrapper{
        margin-top: 3rem;
      .outdoor {
        h2 {
          font-size: ${Theme.textSize.textMobileLg};
        }
            
        .link {
          justify-content: center;
          width: 100%;
          button {
            width: 100%;
          }
        }
      }
      
      .img {
        width: 260px;
        img {
          width: 260px;
          height: auto;
        }
      }
    }
    }

    .law {
      .owner-rights {
        .law-features {
          gap: 1rem;
        }
      }
    }

    .embrasi {
      .compliance { 
        .compliance-checks {
          p {
            font-size: ${Theme.textSize.textMobileSm};
          }
        }
      }
    }

  }

`