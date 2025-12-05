import styled from "styled-components";
import Theme from "../../styles/theme";

export const Actions = styled.div `
  
  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .act {
    justify-content: center;
    max-width: 240px;

    .icon {
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 70px;
      height: 70px;      
    }

    h2 {
      color: ${Theme.colors.gray1};
      font-size: ${Theme.textSize.titleXSm};
    }
    p {
      font-size: ${Theme.textSize.textSm};
    }

  }
  
  @media (max-width: 1080px) {

    .act {
      flex-direction: row;
      justify-content: flex-start;
      gap: 1.5rem;
      max-width: 500px;

      .icon-number {
        flex-direction: row;
      }

      .icon {
        background-color: ${Theme.colors.babyBlue};
        border-radius: 50%;
        width: 52.5px;
        height: 52.5px;
        
        span :nth-child(1) {
          width: 90%;    
          height: 90%;        
        }  
      }

        .description {
          text-align: left;
          p {
            margin: 0;
          }
        }
    }

  }

  
  @media (max-width: 690px) {

    .act {
      align-items: flex-start;
    }
    
  }


  @media (max-width: 600px) {

    .act {
      align-items: flex-end;

      .icon-number {
          flex-direction: column;
        }
    }
  }

`
