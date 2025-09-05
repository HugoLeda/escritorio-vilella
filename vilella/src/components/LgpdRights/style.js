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
    min-height: 200px;
    max-width: 500px;

    justify-content: flex-start;
    align-items: stretch;
    gap: 2rem;
    padding: 2rem;    
    border-radius: 6px;
    background: radial-gradient(circle at top left, transparent 0%, transparent 0%);
    
    box-shadow: 0 1px 8px rgb(0,0,0,0.2);
    text-align: left;
    transition: transform .3s linear;

    &:hover {
      transform: scale(1.05);
      background: radial-gradient(circle at top left,  rgba(168, 208, 255, .8) 0%, rgba(0, 0, 255, 0) 80%); //${Theme.colors.blue4};
      
    }    
  }


  h3 {
    color: ${Theme.colors.gray1};
    font-size: ${Theme.textSize.titleCardXSm}; 
    font-weight: 500;
    padding-top: 2rem;
    margin: 0;
  }



  @media (max-width: 1080px){

    .right-items {
      padding: 1.5rem;
      background: radial-gradient(circle at top left, rgba(168, 208, 255, .5) 0%, rgba(0, 0, 255, 0) 70%);

      &:hover {
        transform: none;
        background: radial-gradient(circle at top left, rgba(168, 208, 255, .5) 0%, rgba(0, 0, 255, 0) 70%);
      }
    }

    h3 {
      padding-top: 1.5rem;
    }

  }

`