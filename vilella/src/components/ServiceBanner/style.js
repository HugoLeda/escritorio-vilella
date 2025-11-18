import styled from 'styled-components'
import Theme from '../../styles/theme'

export const Banner = styled.div`

  .services-banner {
    position: relative;
    
    h2,p {
      color: ${Theme.colors.white};
      user-select: none;
    }
  }

  .banner-item {
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease;
    
    padding: 5rem 10% 8rem 10%;
  }

  .banner-item.active {
    display: block;
    opacity: 1;
  }

  .content {
    gap: 5rem;
  }

  .title-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    max-width: 530px;
    gap: 2rem;    

    
    .button {
      width: 100%;
      align-items: flex-start;
      button {
      background-color: ${Theme.colors.white};
      user-select: none;
    }
    }
  }

  .topics {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    min-width: 320px;
  }

  .topic {
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 1px solid ${Theme.colors.white}; 
    padding: 1rem;
    gap: 1rem;
    width: 100%;
    p {margin: 0;}
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    font-size: 2rem;
    cursor: pointer;
    border-radius: 50%;
    padding: 0 1rem;
  }

  .nav-button.prev,
  .nav-button.next {
    color: ${Theme.colors.white};
    background-color: transparent;
  }

  .nav-button.prev { left: 2rem; }
  .nav-button.next { right: 2rem; }

  /* Dots */
  .dots {
    margin-top: 15px;
    text-align: center;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 4px;
    border-radius: 50%;
    border: 1px solid #fff;
    background: transparent;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .dot.active {
    background: #fff;
  }


  @media (max-width: 1080px) {

    .content {
      flex-direction: column;
      align-items: center;
      h2 {        
        text-align: center;
        font-size: ${Theme.textSize.titleClientMd};
      }

      
      p {
        text-align: center;
        font-size: ${Theme.textSize.textMobileMd};
      }

      .button {
        width: 100%;
        align-items: center;
        justify-content: center;
        button {
          align-items: center;
          justify-content: center;
        }
      }
    }

    .topics {
      display: none !important;
    }

    
    .nav-button {
      font-size: 1.5rem;
      padding: 0 1rem;
    }
    
    .nav-button.prev { left: .5rem; }
    .nav-button.next { right: .5rem; }

  }

  @media (max-width: 500px) {
    .content {
      h2 {        
        font-size: ${Theme.textSize.titleClientXxSm};
      }
      
      p {
        font-size: ${Theme.textSize.textMobileMd};
      }
    }
  }

`