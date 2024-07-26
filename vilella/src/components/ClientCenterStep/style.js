import styled from "styled-components";

export const Steps = styled.section `
  display: flex;
  gap: 5rem;

  .tutorial {
    display: flex;
    justify-content: space-around;
    border-radius: 6px;
    box-shadow: 0 0px 4px rgb(0,0,0,0.2);
    gap: 2rem;
    padding: 1.5rem;
    
    .img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 300px;
      img {
        width: 300px;
        height: auto;
      }
    }

    main {
      display: flex;
      justify-content:center;
    }

  }

  @media (max-width: 950px) {
    .tutorial {
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;

      .img {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 320px;
        img {
          width: 320px;
          height: auto;
        }
      }
      
      .steps {
       gap: 0; 
      }
    }
  }

  @media (max-width: 480px){

  }
    
`