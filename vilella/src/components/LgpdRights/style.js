import styled from "styled-components";
import Theme from "../../styles/theme";

export const Rights = styled.div `

  .flex-column {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .right-items {        
    width: 100%;
    height: 100%;
    min-width: 290px;
    min-height: 200px;
    max-width: 325px;
    
    gap: 1rem;
    padding: 2rem;
    border-radius: 40px;
    border: 1px solid #759dcc;
    text-align: left;
  }


  h3 {
    color: ${Theme.colors.gray1};
    font-size: ${Theme.textSize.textLg}; 
    font-weight: 500;
    padding-top: 1rem;
    margin: 0;
  }

  p {
    margin: 0;
  }



  @media (max-width: 1080px){

    .right-items {
      padding: 1.5rem;
    }

    h3 {
      padding-top: 1.5rem;
      font-size: ${Theme.textSize.textLg}; 
    }

  }

`