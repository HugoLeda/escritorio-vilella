import styled from 'styled-components'
import media from "styled-media-query"
import Theme from '../../styles/theme'

export const BannerContainer = styled.section`
  margin-bottom: 5rem;
  max-width: 1000vw;

  h3 {
      font-size: ${Theme.textSize.titleLg};
      font-weight: 600;
    }
    p {
      font-size: ${Theme.textSize.textLg};
      font-weight: 500;
    }

  .cover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  .st-caption {
    display: flex;
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

  .cover-img, img {
    width: 100%;
  }

  .rd-caption {
    padding: 2rem;
    .rd-caption-text {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      
      h3 {
        color: ${Theme.colors.defwhite};
      }
    }
  }

  button {
    width: 130px;
    height: 40px;
    border-radius: 6px;
    box-shadow: 0px 10px 10px rgb(0,0,0,0.5);
    border: none;

    background-color: ${Theme.colors.blue1};
    color: white;
        
    cursor: pointer;
    transition: ease-out all .3s;

    font-size: ${Theme.textSize.textSm};
    font-weight: 700;

  }
  button:hover {
    background-color: ${Theme.colors.babyBlue};
    color: ${Theme.colors.blue1};
  }

 ${media.lessThan("large")`
 margin-bottom: 2rem;
 .carousel-caption {
    display: none;
  }
 `}   
`