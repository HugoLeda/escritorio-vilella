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
    font-size: 70px;
    font-weight: 600;
    color: ${Theme.colors.blue1};

    span {
      font-weight: 700;
      color: ${Theme.colors.defred};
    }

  }
  
  h3 {
    font-size: 40px;
  }
  
  p {
      font-size: 22px;
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
        font-size: 20px;
        font-weight: 400;
      }

      button {
        width: 130px;
        height: 40px;
        border-radius: 6px;
        box-shadow: 0 0 8px rgb(0,0,0,0.2);
        border: none;

        background-color: ${Theme.colors.blue1};
        color: ${Theme.colors.defwhite};
        
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
      background-color: ${Theme.colors.babyblue};
      color: #00116f;
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
      font-size: 200px;
      font-weight: 500;
      color: ${Theme.colors.blue1};
      }
    }
    
    .history-text-paragraph {
      align-content: flex-start;
      font-size: 22px;
    }

    .history-numbers {
      display: flex;
      flex-direction: column;
      text-transform: uppercase;
      justify-content: flex-end;
      align-items: center;

      text-align: center;

      span {
        font-size: 100px;
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
    align-items:flex-end;
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
        //align-items: center;
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
      font-size: 24px;
      font-weight: 500;
    }

    p {
      font-size: 18px;  
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

          font-size: 24px;
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
        font-size: 24px;
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
  
  ${media.lessThan("large")` //has to be defined first 

  .mobile {
    flex-direction: column;
  }

  h1,h2 {
    font-size: 66px;
  }

  .history {
    flex-direction: column;
    gap: 2rem;
    h2 {
      .title-bigger {
        font-size: 180px;
      }
      .title-shorter {
        font-size: 66px;
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

  ${media.lessThan("medium")`
  
  
  .history {
    .history-numbers {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
    }
  }

  .social-item {
    span {
      font-size: 20px;
    }
  }


  h1,h2 {
    font-size: 44px;
  }
  p {
    font-size: 18px;
  }

  h2 {
    
    span {
      .title-bigger {font-size: 100px;}
      .title-shorter {font-size: 44px;}
    }
  }

  `}

  ${media.lessThan("small")`
  
  
  `}
`