import styled from 'styled-components'
import Theme from '../../styles/theme'

export const Banner = styled.div`

  .services-banner {
    position: relative;
    overflow: hidden;

    h2, p {
      color: ${Theme.colors.white};
      user-select: none;
    }
  }

  .slides {
    display: flex;
    transition: transform 0.5s ease; 
  }

  .banner-item {
    flex-shrink: 0;
    width: 100%; 
    padding: 5rem 10% 8rem 10%;
    opacity: 1;
  }

  .content {
    gap: 5rem;
  }

  .title-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    max-width: 530px;
    gap: 2rem;    

    
    .button {
      width: 100%;
      align-items: flex-start;
      a {
        text-decoration: none;
      }
      
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        background-color: ${Theme.colors.white};
        user-select: none;    
        text-transform: uppercase;

        &:hover {
          box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.3);
          .headset {
            animation: swingSmooth 0.5s ease forwards;
          }
        }
      }    
    }
    .headset {
      transition: transform 0.5s ease;
    }

    @keyframes swingSmooth {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(15deg); }
      50% { transform: rotate(-15deg); }
      75% { transform: rotate(10deg); }
      100% { transform: rotate(0deg); }
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
    box-shadow: none;
  }

  .nav-button.prev,
  .nav-button.next {
    color: ${Theme.colors.white};
    background-color: transparent;
  }

  .nav-button.prev { left: 2rem; }
  .nav-button.next { right: 2rem; }

  .nav-button:disabled {
    opacity: 0.3;
    cursor: auto;
  }

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


  @media (max-width: 1100px) {
    .content {
      flex-direction: column;
      align-items: center;

      
    .title-text .button {
      display: flex;
      justify-content: center;
      align-items: center;
    }

      h2, p {
        text-align: center;
      }
    }

    .topics {
      display: none !important;
    }
  }

  @media (max-width: 655px) {

    .content h2 {
      font-size: 2.5rem;
    }

    .nav-button.prev { left: 1rem; }
    .nav-button.next { right: 1rem; }
  }

  @media (max-width: 625px) {
        
    .content h2 {
      font-size: 2.5rem;
    }
  }

    @media (max-width: 595px) {
    
      .content h2 {
        font-size: 2rem;
      }

      .title-text {
        padding: 0 1rem;
      }      
  }

  @media (max-width: 520px) {
    .title-text {
      padding: 0;
    }
  }

  @media (max-width: 480px) {

    
    .nav-button.prev { left: .5rem; }
    .nav-button.next { right: .5rem; }

    .content {
      h2 {
        font-size: ${Theme.textSize.titleClientXxSm};
        padding: 0;
      }

      p {
        font-size: 1rem;
        padding: 0 1.5rem;
      }
    }
  }

  @media (max-width: 420px) {

    .banner-item {
      padding: 5rem 0 6rem 0;
    }
    .content {
      padding: 0 8%;
      h2 {
        font-size: 1.75rem;
        padding: 0;
      }
    }
  }

  @media (max-width: 390px) {
    .content {
      .title-consultiva {
      font-size: 1.6rem;
    }
    }
  }

    @media (max-width: 360px) {
    .content {
      .title-consultiva,
      .title-certificado {
        font-size: 1.5rem;
      }
      p {
        font-size: .9rem;
      }
    }
  }

`