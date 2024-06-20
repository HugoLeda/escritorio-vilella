import styled from "styled-components";
import Theme from "../../styles/theme";

export const CardSection = styled.section `
  .flex {
    display: flex;
  }   

  .content {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .title {
        height: 50px;

        align-items: center;        
        gap: .5rem;

        h2 {
          font-size: ${Theme.textSize.titleMobileLg};
          color: ${Theme.colors.blue1};
          font-weight: 600;

          margin: 0;
        }
        

        .img {          
          height: ${Theme.textSize.titleMobileLg};
          
          justify-content: center;
          align-items: center;

          img {
            height: 75%;
            width: auto;
          }
        }
      }

      .know-more {
        justify-content: space-evenly;
        align-items: center;
      }
    }        
  }  

  .flex-normal {
    background-color: rgb(0,0,0,0.03);
    .info {
      padding: 2rem 0 2rem 2rem;
    }
    .image {
      width: auto;
      height: 370px;
      clip-path: polygon(100% 100%, 0% 100%, 50% 0%, 100% 0%);
    }
  }

  .flex-reverse {    
    flex-direction: row-reverse;
    background-color: ${Theme.colors.white};

    .info {
      padding: 2rem 2rem 2rem 0;
    }

    .image {
      width: auto;
      height: 370px;
      clip-path: polygon(0% 0%, 100% 0%, 50% 100%, 0% 100%);
    }
  }
 
  p {
    font-size: ${Theme.textSize.textLg};
    line-height: 1.5;    
  }

  button {
    width: 130px;
    height: 40px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgb(0,0,0,0.5);
    border: none;

    background-color: ${Theme.colors.blue1};

    cursor: pointer;
    transition: ease-out all .3s;

    a {
      font-size: ${Theme.textSize.textSm};
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
    
`;