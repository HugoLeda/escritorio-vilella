import styled from "styled-components";

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

  h1, h2 {
    font-size: 70px;
    font-weight: 600;
    color: #00116f;
    span {
      font-weight: 700;
      color: #ff0000;
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
      font-size: 22px;
      line-height: 1.5;      
    }
  }

  .bsc-boxes {
    justify-content: center;
    gap: 3rem;
    
    .bsc-boxes-vision,
    .bsc-boxes-values {
      width: 450px;
      height: 420px;
      border-radius: 3px;
      transition: scale 0.5 ease;
      box-shadow: 0 0 8px rgb(0,0,0,0.2);

      text-align: center;
      line-height: 2em;

      justify-content: center;
      align-items: center;
      gap: 0.3rem;

      img {
        height: auto;
      }

      h3 {
        color: #00116f;
        span {
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

        background-color: #00116f;
        color: white;
        
        font-size: 18px;
        font-weight: 700;
      }
    }

    .bsc-boxes-vision:hover,
    .bsc-boxes-values:hover {
      transform: scale(1.01);
    }
  }

  .history {
    
    h2 {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      
      .history-title-bigger {
      font-size: 200px;
      font-weight: 500;
      color: #00116f;
      }

    }
    
    .history-text {
      justify-content: space-around;
      font-size: 24px;
      
      gap: 10rem;
    }
    .history-text-paragraph {
      align-content: space-evenly;
      font-size: 22px;
    }
    .history-text-numbers {
      text-transform: uppercase;
      align-items: flex-start;
      span {
        font-size:100px;
        font-weight: 700;
        color: #759dcc;
      }
      p {
        font-weight: 600;
      }
    }
  }

  .solution-icons {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    gap: 3rem;
    
    text-align: center;
    
    h3 {
      font-size: 28px;
      font-weight: 400;
    }
    p {
      font-size: 20px;  
    }
  }

  .general-contact {
    justify-content: space-between;
    gap: 5rem;
    .find-us {
      font-size: 24px;
      line-height: 1.5;
      h4 {
        font-weight: 500;
        color: #00116f;
      }
    }
    
    .map-address {
      width: 400px;
      height: 350px;
    }
  }

`