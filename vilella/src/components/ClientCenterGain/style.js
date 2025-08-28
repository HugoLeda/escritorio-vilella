import styled from "styled-components"
import Theme from "../../styles/theme"

export const Gains = styled.section`
  .feature {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;    
    width: 300px;
    transition: .1s linear;
  
  &:hover {
      transform: scale(1.08);
    }
  }

  .description {
      
    h3 {
      font-size: ${Theme.textSize.titleCardXSm};
      color: ${Theme.colors.gray1};
    }

    p {
      font-size: ${Theme.textSize.textMd};
      line-height: 1.5rem;
      margin: 0;
    }

  }



  @media (max-width: 926px) {

    .feature {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: left;
      gap: 1rem;
      height: 80px;
      

      .icon {
        span :nth-child(1){
          width: 80%;
        }
      }
      .description {
        width: 220px;
      }
    }

  }

  @media (max-width: 480px) {


    .feature {
      height: 70px;
    }

    .description {
      h3 {
        font-size: ${Theme.textSize.textMobileLg};
        line-height: 1.5;
        margin:0;
      }        
      p {
        font-size: ${Theme.textSize.textMobileSm};
        line-height: 1.25;
      }

    }

  }
`