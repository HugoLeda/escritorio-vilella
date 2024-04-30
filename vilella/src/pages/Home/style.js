import styled from "styled-components";

export const Homepage = styled.div `      
  max-width: 1000vw;
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
      height: 450px;
      border-radius: 3px;
      box-shadow: 0 0 8px rgb(0,0,0,0.2);

      text-align: center;
      line-height: 2.2em;

      justify-content: center;
      align-items: center;
      gap: 0.3rem;

      .img {
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
        line-height: 2.2em;
      }
      button {
        width: 130px;
        height: 40px;
        border-radius: 6px;
        box-shadow: 0 0 8px rgb(0,0,0,0.2);
        border: none;

        background-color: #00116f;
        color: white;
        
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
      background-color: #93c5ff;
      color: #00116f;
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
      transition: ease-in-out .2s;
    }
    .map-address:hover {
      box-shadow: 0 0 8px rgb(0,0,0,0.4);
    }
  }
`