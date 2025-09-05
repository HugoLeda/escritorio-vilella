import styled from "styled-components"
import Theme from "../../styles/theme"

export const Lgpdpage = styled.div `
  max-width: 1920px;
  margin: 5rem auto 0 auto;
  padding: 0 10%;
  
  display: flex;
  flex-direction: column;
  gap: 10rem;

  .flex,
  .flex-column,
  .flex-row {
    display: flex;
  }

  .flex-row {
    flex-direction: row;
  }

  .flex-column {
    flex-direction: column;
  }

  h1,h2,h3,h4 {
    font-weight: 600;
  }

  h1,h2 {
    user-select: none;
    color: ${Theme.colors.blue1};
  }

  h2 {
    font-size: ${Theme.textSize.titleMd};
  }

  h3,h4 {
    font-size: ${Theme.textSize.titleSm};
    color: ${Theme.colors.gray1};
  }

  p {
    font-size: ${Theme.textSize.textLg};
    line-height: 1.5;
  }

  header {
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    width: 100%;   
    user-select: none; 

    .outdoor {
      gap: .5rem;
      width: 60%;
      word-wrap: break-word;

      h1 {
        font-size: ${Theme.textSize.titleClientXLg};

        span {
          font-size: ${Theme.textSize.titleClientXLg};
          color: ${Theme.colors.blue3};
          font-weight: 600;
        }
      }
      h2 {
        font-size: ${Theme.textSize.titleMobileSm};
      }
    }

    .img {
      justify-content: center;
      width: 460px;
      user-select: none;

      img {
        width: 450px;
        height: auto;
      }
    }

    button {
      font-size: ${Theme.textSize.textMobileSm};
      font-weight: 700;
      color: ${Theme.colors.white};
      text-decoration: none;
      
      &:hover {
        color: ${Theme.colors.blue1};
      }
    }

  }

  
  .link {
    padding-top: 1rem;

    button {
      width: 170px;
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
  }

  main {
    justify-content: center;
    text-align: center;
    gap: 10rem;

    .law-view {
      align-items: center;
      justify-content: center;
      gap: 2rem;
      text-align: center;
      
      p {
        width: 80%;
      }
      

      
      .rights {
        gap: 2rem;      
        user-select: none;
        p {
          width: 100%;
          font-size: ${Theme.textSize.textMobileSm};    
        }
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
        gap: 1rem;
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
    gap: 3rem;    
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

  .dpo-forms {
    gap: 1rem;
  }

  .contact-dpo {
    justify-content: space-around;
    align-items: center;
    text-align: center;
    gap: 2rem;


    .contact-box {
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
      .outdoor {
        h1 {
          font-size: ${Theme.textSize.titleMobileMd};
          span {
            font-size: ${Theme.textSize.titleMobileMd};
          } 
        }
      }
      
      .img {
        width: 380px;
        img {
          width: 380px;
          height: auto;
        }
      }
    }

  }

  @media (max-width: 1080px) {
    

    .office-actions {
      flex-direction: column;
    }    

    .contact-dpo {
      .contact-box {
        display: flex;
        flex-direction: column;
        width: 75%;
      }      
    }

    .rights {
      flex-direction: column;
    }


  }

  @media (max-width: 926px) {
    
    margin-top: 3rem;
    gap: 5rem;

    p {
      font-size: ${Theme.textSize.textMobileLg};
    }
    
    header {
      flex-direction: column-reverse;
      justify-content: center;
      gap: 2rem;
      .outdoor {
        width: 100%;
        .link {
          justify-content: center;
        }
      }
    }

    main {
      gap: 5rem;

      .compromise {
        gap: 2rem;
        p {
          font-size: ${Theme.textSize.textMobileMd};
        }
      }

    }

    .embrasi {
      .compliance {
        gap: 3rem;
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
      gap: 2rem;
      .compliance {
        flex-direction: column;
      }
    }    

    .contact-dpo {
      .contact-box {
        display: flex;
        flex-direction: column;
        width: 90%;
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
    h3 {
      font-size: ${Theme.textSize.titleCardSm};
    }
    p {
      font-size: ${Theme.textSize.textMobileMd};
    }


    header {
      .img {
        width: 330px;
        img {
          width: 330px;
          height: auto;
        }
      }
      
      .outdoor {
        h2 {
          font-size: ${Theme.textSize.textMobileLg};
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
      p {
        font-size: ${Theme.textSize.textMobileSm};
      }
      .compliance { 
        .compliance-checks {
          p {
            font-size: ${Theme.textSize.textMobileSm};
          }
        }
      }
    }

    .contact-dpo {
      .contact-box {
        display: flex;
        flex-direction: column;
        width: 100%;
        p {

        }
      }      
    }   

  }
  
  @media (max-width: 400px) {
  }

`