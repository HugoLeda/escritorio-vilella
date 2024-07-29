import styled from "styled-components"
import Theme from "../../styles/theme"

export const Gains = styled.section`
  display: flex;  
  align-items: center;
  justify-content: center;
  gap: 1rem;    
  padding: 1rem 1rem;

  width: 50%;

  user-select: none;

  
  transition: linear all .2s;  

  &:hover {
      transform: scale(1.08);
    }

  .img {
    width: 75px;
    img {
      width: 65px;
      height: auto;
    }
  }    

  p {
    font-size: ${Theme.textSize.textSm};
    line-height: 1.5rem;
    margin: 0;
  }

  @media (max-width: 926px) {
    width: 100%;  

    &:hover {
      transform: none;
    }

  }
`