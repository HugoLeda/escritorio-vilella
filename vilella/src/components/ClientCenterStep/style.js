import styled from "styled-components";
import Theme from "../../styles/theme";

export const Steps = styled.section `

  .flex {
    display: flex;
  }

  .flow-steps {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    text-align: center;

  }


  .number {
    background-color: ${Theme.colors.babyBlue};
    width:50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

  }

  .icon {
    align-items: center;
    span {
      text-align: center;
    }
  }

  .description {
    h3 {
      color: ${Theme.colors.gray1};
    }
    h3,p {
      font-size: ${Theme.textSize.textLg};
      margin: 0;
    }
  }



  @media (max-width: 1170px) {
    
    h3 {
      font-size: ${Theme.textSize.textMobileMd};
    }     
    p {
      font-size: ${Theme.textSize.textMobileSm};
    }


  }

  @media (max-width: 975px){
    
    .flow-steps {
      padding: .5rem 0;      
    }

    .flow-steps {
      gap: 1rem;

    }
  }

  @media (max-width: 800px) {


    .flow-steps {
      h3, p {
        font-size: ${Theme.textSize.textSm};
      }
    }
        

  }


  @media (max-width: 480px){


    .number {
      width: 37.5px;
      height: 37.5px;
      span :nth-child(1) {
        width: 75%;    
        height: 75%;
        
      }
    }

  }
    
`