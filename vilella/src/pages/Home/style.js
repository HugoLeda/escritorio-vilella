import styled, { ThemeProvider } from "styled-components";
import media from "styled-media-query";
import Theme from "../../styles/theme";

export const Homepage = styled.div `      
  //all of the page
  max-width: 100vw;
  padding: 0 10%;

  display: flex;
  flex-direction: column;
  align-items: center;  
  gap: 5rem; 

  h1, h2 {
    user-select: none;
    font-size: ${Theme.textSize.titleLg};
    font-weight: 600;
    color: ${Theme.colors.blue1};

    span {
      font-weight: 700;
      color: ${Theme.colors.red};
    }
  }
  
  h3 {
    font-size: ${Theme.textSize.titleSm};
  }
  
  p {
    font-size: ${Theme.textSize.textLg};
    line-height: 1.5;
  }

  //flexbox helper
  .flex {
    display: flex;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  //transition helper
  .transition {
    transition: linear all .3s;
  }

  //main divs content
  .presentation {
    p {
      margin-top: 1rem;
    }
  }

  .bsc-boxes {
    justify-content: center;
    user-select: none;
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
        font-size: ${Theme.textSize.titleNum};
        font-weight: 500;
        color: ${Theme.colors.blue1};
      }
      .title-shorter {
        font-size: ${Theme.textSize.titleLg};
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
      user-select: none;

      span {
        font-size: ${Theme.textSize.textNum};
        font-weight: 700;
        color: ${Theme.colors.blue3};
      }

      p {
        font-size: ${Theme.textSize.textLg};
        font-weight: 600;
      }
    }
  }

  .solutions {
    justify-content: center;
    align-items: flex-end;
    gap: 3rem;

    text-align: center;
    user-select: none;

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
    
      &:hover {
        transform: scale(1.2);
        border-radius: 3px;
        box-shadow: 0 0 8px rgb(0,0,0,0.2);
    
      }
    }

    h3 {
      font-size: ${Theme.textSize.titleSm};
      font-weight: 500;
    }

    p {
      font-size: ${Theme.textSize.textSm};  
    }
  }

  .contact {
    width: 100%;
    justify-content: space-between;
    gap: 2rem;

    .find-us {        
      .social-item {
        display: flex;   
        align-items: center;        
        gap: .5rem;      

        font-size: ${Theme.textSize.textLg};
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

        span {
          font-size: ${Theme.textSize.textLg};
        }

        span:nth-child(2) {
          width: 70%;
        }
      }
      .office-hours {
        margin-top: 1rem;
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
  
  //media components
  ${media.lessThan("large")`

    .mobile {
      flex-direction: column;
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
      
      .history-numbers {
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 2rem;
      }
    }
    
    .solutions {
      gap: 1rem;
      .solution-icon:hover {
        transform: scale(1);
        box-shadow: none;
      }
    }

    .contact {
      align-items: center;
      gap: 2rem;
    }


    .map-address {
      width: 400px;
      height: 350px;
      box-shadow: 0 0 8px rgb(0,0,0,0.4);
    }

    .map-address:hover {
      transform: scale(1);
    }


  `}

  ${media.lessThan("medium")`

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

      .bsc-boxes-vision:hover,
      .bsc-boxes-values:hover {
        transform: scale(1);
      }
    }
    
    .history {

      .history-numbers {
        display: flex;
        justify-content: center;
        flex-direction: column;
        
        gap: 1rem;
        span { font-size: ${Theme.textSize.textMobileNum}; }
        p { font-size: ${Theme.textSize.textMobileSm}; }
      }
    }

    .solutions {
      gap: .5rem;

      .solution-icon {
        box-shadow: 0;
        
        &:hover {
          transform: scale(1);
          border-radius: 0;
          box-shadow: 0;
        }
      }
    }

    .contact {
      .find-us {
        .find-title {
          font-size: ${Theme.textSize.textLg};
          padding-top: .5rem; 
        }
        .social-item {
          display: flex;   
          align-items: center;   
          line-height: 2rem;

          span:nth-child(2) {
            font-size: ${Theme.textSize.textMobileMd};
            line-height: 1.5rem;
          }
        }
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
        h3 { font-size: ${Theme.textSize.titleMobileMd}; }
        p { font-size: ${Theme.textSize.textMobileMd}; }

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
        .title-bigger { font-size: ${Theme.textSize.titleMobileNum}; }
        .title-shorter { font-size: ${Theme.textSize.titleMobileLg}; }
        gap: .2rem;
      }
      .history-numbers {
        display: flex;
        justify-content: center;
        flex-direction: column;
        span { font-size: ${Theme.textSize.textMobileNum}; }

        gap: 1rem;
      }
    }

    .solutions {
      .solution-icon {
        width: 280px;
        height: 280px;
        padding: 15px;

        justify-content: flex-end;
        align-items: center;
        gap: .2rem;
      }

      div {
        img {
          width: 100px;
          height: auto;
        }
      }
    }    

    .contact {
      .find-us { 
        h2 {
          font-size: ${Theme.textSize.titleMobileLg}; 
        }
        .find-title {
          font-size: ${Theme.textSize.textLMobileg};
          padding-top: .5rem; 
        }
        p {
          font-size: ${Theme.textSize.textMobileSm}; 
        }
        .social-item {
          display: flex;   
          align-items: center;   
          line-height: 2rem;

          span:nth-child(2) {
            font-size: ${Theme.textSize.textMobileSm};
            line-height: 1.25rem;
          }
        }
      }

      .map-address {
        width: 320px;
      }
    }


`}

  //media for specific breaks
  @media (max-width: 980px) {
    .bsc-boxes {
      flex-direction: column;
    }
  }

  @media (max-width: 720px) {

    h1,h2 { font-size: ${Theme.textSize.titleMobileLg}; }
    p { font-size: ${Theme.textSize.textMobileMd}; }


    .history {
      h2 {
        .title-bigger {font-size: ${Theme.textSize.titleMobileNum};}
        .title-shorter {font-size: ${Theme.textSize.titleMobileMd}}
      }
    }
  }

  //@media (max-width: 600px) {}

`