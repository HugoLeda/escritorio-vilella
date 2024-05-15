import styled, { ThemeProvider } from "styled-components";
import media from "styled-media-query";
import Theme from "../../styles/theme";

export const Homepage = styled.div `      
  max-width: 100vw;
  padding: 0 10%;

  display: flex;
  flex-direction: column;
  align-items: center;  
  gap: 5rem; 

  .flex {
    display: flex;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .transition {
    transition: linear all .3s;
  }

  h1, h2 {
    font-size: ${Theme.textSize.titleLg};
    font-weight: 600;
    color: ${Theme.colors.blue1};

    span {
      font-weight: 700;
      color: ${Theme.colors.red};
    }

  }
  
  h3 {
    font-size: ${Theme.textSize.titleMd};
  }
  
  p {
      font-size: ${Theme.textSize.textLg};
      line-height: 1.5;
    }

  .presentation-text {

    p {
      margin-top: 1rem;    
    }
  }

  .bsc-boxes {
    justify-content: center;
    gap: 3rem;
    
    .bsc-boxes-vision,
    .bsc-boxes-values {
      width: 450px;
      height: 450px;
      border-radius: 3px;
      box-shadow: 0 0 8px rgb(0,0,0,0.2);

      text-align: center;

      justify-content: center;
      align-items: center;

      .img {
        height: auto;
      }

      h3 {
        color: ${Theme.colors.gray1};
        span {
          color: ${Theme.colors.blue1};
          font-weight: 600;
        }
      }

      p {
        font-size: ${Theme.textSize.textMd};
        font-weight: 400;
      }

      button {
        width: 130px;
        height: 40px;
        border-radius: 6px;
        box-shadow: 0 0 8px rgb(0,0,0,0.2);
        border: none;

        background-color: ${Theme.colors.blue1};
        color: ${Theme.colors.white};
        
        cursor: pointer;
        transition: ease-out all .3s;

        font-size: 18px;
        font-weight: 700;
      }
    }

    .bsc-boxes-vision:hover,
    .bsc-boxes-values:hover {
      transform: scale(1.1);
    }

    button:hover {
      background-color: ${Theme.colors.babyBlue};
      color: ${Theme.colors.blue1};
    }
  }

  .history {
    gap: 5rem;

    h2 {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;

      .title-bigger {
      font-size: ${Theme.textSize.titleXlg};
      font-weight: 500;
      color: ${Theme.colors.blue1};
      
      }
    }
    
    .history-text-paragraph {
      align-content: flex-start;
      font-size: ${Theme.textSize.textLg};
    }

    .history-numbers {
      display: flex;
      flex-direction: column;
      text-transform: uppercase;
      justify-content: flex-end;
      align-items: center;

      text-align: center;

      span {
        font-size: ${Theme.textSize.textNum};
        font-weight: 700;
        color: ${Theme.colors.blue3};
      }

      p {
        font-weight: 600;
      }
    }
  }

  .solution-icons {
    justify-content: center;
    align-items: flex-end;
    gap: 3rem;

    text-align: center;

    .solution-icon {
      width: 350px;
      height: 300px;
      padding: 20px;

      justify-content: center;
      align-items: center;
      gap: .25rem;

      div {
        display: flex;
        justify-content: center;
        align-items: flex-end;

        width: 175px;
        height: 100px;        
      }      
    }

    .solution-icon:hover {
      transform: scale(1.2);
      border-radius: 3px;
      box-shadow: 0 0 8px rgb(0,0,0,0.2);
    }

    h3 {
      font-size: ${Theme.textSize.titleSm};
      font-weight: 500;
    }

    p {
      font-size: ${Theme.textSize.textSm};  
    }
  }

  .general-contact {
    .place-contact {
      justify-content: space-around;
      gap: 2rem;

      .find-us {           

        .social-item {
          display: flex;   
          align-items: center;        
          gap: .5rem;      

          font-size: ${Theme.textSize.textMd};
          line-height: 2rem;

          text-decoration: none;
          color: ${Theme.colors.gray1};

          .item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
          }

          span:nth-child(2) {
            width: 70%;
          }
        }

        h4 {
        font-size: ${Theme.textSize.textLg};
        font-weight: 500;
      }
        
      }
      
      .map-address {
        width: 400px;
        height: 350px;
        transition: linear all .3s;  
      }

      .map-address:hover {
        box-shadow: 0 0 8px rgb(0,0,0,0.4);
        transform: scale(1.1);
      }
    }
  }
  
  ${media.lessThan("large")`

    .mobile {
      flex-direction: column;
    }

    h1,h2 {
      //font-size: 66px;
    }

    .bsc-boxes {
      flex-direction: row;
      .bsc-boxes-vision,
      .bsc-boxes-values {
        width: 400px;
        height: 400px;
        border-radius: 3px;
        box-shadow: 0 0 8px rgb(0,0,0,0.2);

        text-align: center;

        justify-content: center;
        align-items: center;

        img {
          width: 220px;
          height: auto;
        }
      }
    }

    .history {
      flex-direction: column;
      gap: 2rem;
      h2 {
        .title-bigger {
          //font-size: 180px;
        }
        .title-shorter {
          //font-size: 66px;
        }
      }
      .history-numbers {
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 2rem;
      }
    }
    
    .solution-icons {
      flex-direction: column;
    }

    .place-contact {
      align-items: center;
      gap: 2rem;
    }

  `}

  @media (max-width: 980px) {
    .bsc-boxes {
      flex-direction: column;
    }
    
  
  }

  ${media.lessThan("medium")`
  
  //h1,h2 { font-size: 44px; }
  //h3 { font-size: 38px; }
  //p { font-size: 20px; }

  .bsc-boxes {
    justify-content: center;
    gap: 3rem;
    
    .bsc-boxes-vision,
    .bsc-boxes-values {
      width: 400px;
      height: 400px;
      border-radius: 3px;
      box-shadow: 0 0 8px rgb(0,0,0,0.2);

      text-align: center;

      justify-content: center;
      align-items: center;

      img {
        width: 220px;
        height: auto;
      }
    }
  }
  
  .history {
    h2 {
      .title-bigger { font-size: 120px; }
      .title-shorter { font-size: 44px; }
    }
    .history-numbers {
      display: flex;
      justify-content: center;
      flex-direction: column;
      
      gap: 1rem;
    }
  }

  .social-item {
    span {
      font-size: 20px;
    }
  }

  `}

  ${media.lessThan("small")`

  .bsc-boxes {
    justify-content: center;
    gap: 3rem;
    
    .bsc-boxes-vision,
    .bsc-boxes-values {
      width: 320px;
      height: 320px;
      border-radius: 3px;
      box-shadow: 0 0 8px rgb(0,0,0,0.2);

      text-align: center;
      h3 { font-size: 30px; }
      p { font-size: 18px; }

      justify-content: center;
      align-items: center;

      img {
        width: 150px;
        height: auto;
      }
    }
  }

  .history {
    h2 {
      .title-bigger { font-size: 110px; }
      .title-shorter { font-size: 36px; }
      gap: .2rem;
    }
    .history-numbers {
      display: flex;
      justify-content: center;
      flex-direction: column;
      
      span { font-size: 66px; }
      p { font-size: 18px; }

      gap: 1rem;
    }
  }

  .solution-icons {
    .solution-icon {
      width: 280px;
      height: 280px;
      padding: 15px;

      justify-content: flex-end;
      align-items: center;
      gap: .2rem;

      h3 { font-size: 26px; }
      p { font-size: 18px; }

    }
    div {
      img {
        width: 100px;
        height: auto;
      }
    }
  }    

  .general-contact {
    
    .place-contact {
      .find-us {           
        .social-item {
          display: flex;   
          align-items: center;        
          gap: .5rem;      

          font-size: 24px;
          line-height: 2rem;

          .item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
          }

          span:nth-child(2) {
            width: 70%;
          }
        }
      }
      
      .map-address {
        width: 320px;
        height: 300px;
        transition: linear all .3s;  
      }
    }
  }


`}

`