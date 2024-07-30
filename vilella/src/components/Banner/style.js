import styled from 'styled-components'
import media from "styled-media-query"
import Theme from '../../styles/theme'

export const BannerContainer = styled.section`

  max-width: 1000vw;
  user-select: none;

  h3 {
    font-size: ${Theme.textSize.titleMobileLg};
    font-weight: 600;
  }

  p {
    font-size: ${Theme.textSize.textMobileLg};
    font-weight: 500;
  }

  .cover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;    
  }

  .cover-img, img {
    width: 100%;    
    height: calc(100vh - 2.4rem - 67px);
    object-fit: cover;
  }


  .st-caption {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding: 2rem;

    border-radius: 3px;
    background-color: rgba(147, 198, 255, 0.5);
    box-shadow: 0 0 8px rgb(0,0,0,0.2);

    h3 { 
      color: ${Theme.colors.blue1}; 
    }
  }
  
  .nd-caption {
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    padding: 2rem;
    
    h3 { 
      color: ${Theme.colors.defwhite}; 
    }    
  }

  button {
    width: 130px;
    height: 40px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgb(0,0,0,0.5);
    border: none;

    background-color: ${Theme.colors.blue1};
    color: white;
        
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
      color: ${Theme.colors.blue1};
      a {
        color: ${Theme.colors.blue1};
      }
    }
  }

  ${media.lessThan("large")`  
    margin-bottom: 2rem;
    .cover-img, img {
      height: calc(100vh - .5rem - 67px);
    }
    
    .display {
      background-color: transparent;
      display: none;    
    }
 `}   

  ${media.lessThan("medium")`
    .cover-img, img {              
      height: auto;
      object-fit: fill;
    }
  `}    
`