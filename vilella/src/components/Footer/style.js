import styled from 'styled-components'
import media from 'styled-media-query'
import Theme from '../../styles/theme'

export const FooterContainer = styled.footer`    
  background-color: ${Theme.colors.gray1};
  color: ${Theme.colors.white};  

  .flex, .flex-column {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .footer {
    max-width: 1920px;
    margin: auto;
    justify-content: space-around;
    padding: 3rem 0;
    margin-top: 5rem; 
  }

  h3 {
    font-weight: 600;
    font-size: ${Theme.textSize.titleXSm};
  }

  a {
    color: ${Theme.colors.white};
    text-decoration: none;
  }

  span {
    font-size: ${Theme.textSize.textSm};
  }


  .info {
    justify-content: space-between;
    gap: 3rem;
    
    .company-logo {
      gap: 1rem;
      img {
        width: 200px;
        height: auto;
      }

      .company-id {
        gap: 3rem;
        .id-1,
        .id-2 {
          p {
            margin: 0;
          }
          span {
            font-weight: 500;
          }
        }

        .id-1 {
          p {
            text-transform: uppercase;
          }
        }
      }
    }

    .socials {
      justify-content: space-between;
      gap: 1rem;
      a {
        cursor: pointer;
      }
    }
  }

  .services {
    .list ul {
      font-size: ${Theme.textSize.textSm};
      list-style-type: none;
      padding: 0;
      margin: 0;
      line-height: 2.75rem;
      align-items: stretch;

    }
  }

  .contact {
    justify-content: flex-start;
    line-height: 1.5em;
    gap: 2rem;    
    
    .social-item {
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      text-decoration: none;
      color: ${Theme.colors.white};

    .item {
      align-items: center;
      width: 30px;
      height: 30px;
    }
    }

    .client-center {
      align-items: center;
    }
    .client-center-button {
      background-color: transparent;
      border-radius: 20px;
      border: 1px solid ${Theme.colors.white};      
      padding: .5rem 2rem;  
      a {
        text-decoration: none;        
      }
      span {
      }
    }
  }

  .copyright {
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    margin: 0 100px;
    background-color: ${Theme.colors.gray1};
    color: ${Theme.colors.white};
    font-size: ${Theme.textSize.textMobileXSm};
    justify-content: center;
    padding: 1rem;
  
    .credits {
      span {
        font-size: ${Theme.textSize.textMobileSm};
        gap: .2rem;
      }
    }
  }
  
  @media (max-width: 900px) {

    .footer {
      justify-content: center;
      gap: 5rem;
    }

    .services {
      display: none;
    }

    .copyright {
      margin: 0 2rem;
      text-align: center;
      .credits {
        width: 100%;
      }
    }
  }

  @media (max-width: 740px) {
    .footer {
      flex-direction: column-reverse;
      align-items: center;      
      gap: 3rem;

      .info,
      .contact {
        max-width: 250px;
        width: 100%;
      }

      .info {        
        align-items: center;
        text-align: center;
        gap: 3rem;
        .company-id {
          gap: 2rem;
        }
      }
      
      .contact {
        .item {
          width: 25px;
        }
      }

      .call {
        align-items: center;
           
        h3 {
          text-align: center;
          width: 100%;
        }  
        a {          
          width: 100%;
          justify-content: center;
        }
      }
    }
  }

  /*${media.lessThan("medium")` //medium = 768px
    .footer {
      flex-direction: column-reverse;
      align-items: center;
      
      gap: 2rem;

      .info {
        gap: 1rem;        
      }
      .services {
        display: none;
      }

      .contact,
      .legal-terms {
        gap: 1rem;
      }
    }
  `}*/
  

  /*${media.lessThan("small")`
    .footer {
      gap: 2rem;

      .info {
        text-align: center;

        .rights-reserved {
          align-items: center;
        }
      }

      .contact {
        text-align: center;

        .social-item {
          justify-content: center;
        }
      }
    }

    .dev {
      gap: 2rem;
      margin: 0 30px;
    }
  `}*/
`