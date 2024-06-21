import styled from 'styled-components'
import media from 'styled-media-query'
import Theme from '../../styles/theme'

export const FooterContainer = styled.footer`    
  
  .footer {
    display: flex;
    justify-content: center;
    align-items: stretch;

    padding: 2rem 0;
    margin-top: 5rem;

    background-color: ${Theme.colors.blue1};    
    color: ${Theme.colors.white};  
  }

  h3 {
    font-weight: 600;
    font-size: ${Theme.textSize.titleXSm};
  }

  .contact,
  .services,
  .client {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }  

  .contact {
    display: flex;
    justify-content: space-between;
    
    line-height: 1.5em;

    .socials {
      display: flex;
      flex-direction: column;
      gap: 1rem;            
    
      .social-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        color: ${Theme.colors.white};

        width: 100%;
        span {
          font-size: ${Theme.textSize.textSm};
        }

        .item {
          display: flex;
          align-items: center;
          width: 30px;
          height: 30px;
        }
      }
    } 
  }

  .services {
    display: flex;
    justify-content: flex-start;

    ul {
      font-size: ${Theme.textSize.textMd};
      list-style-type: none;
      padding: 0;
    }
    a {
      display: block;
      list-style: none;
      line-height: 1.3em;
    }
  }

  .client {
    text-align: center;
    transition: linear all .1s;
    
    a {
      text-decoration: none;
      color: inherit;
    }
    h3 {
      font-size: ${Theme.titleXSm};
      cursor: pointer;
      text-transform: uppercase;
    }
    span {
      font-size: ${Theme.textSize.textLg};
    }
    .img {
      width: auto;
      height: auto;
    }
    &:hover {      
      opacity: .75;      
    }
  }

  .copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0;

    background-color: ${Theme.colors.gray1};
    color: ${Theme.colors.white};
    font-size: ${Theme.textSize.textMobileXSm};
    text-align: center;
  
    .devs {
      font-size: ${Theme.textSize.textMobileXSm};
      span {
        gap: .2rem;
      }
      a {
        color: ${Theme.colors.white};
        text-decoration: none;
      }
    }
  }
  
  ${media.lessThan("medium")`
    .footer {
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      .contact {
        align-items: flex-start;
      
        .socials {
          display: flex;
          flex-direction: row;
          gap: 2rem;
        }
      
      }
      .services {
        align-items: flex-start;
      
        ul {
          columns: 2;
          gap: 2rem;
        }
      }
    }

  `}

  ${media.lessThan("small")`
    .footer {
      align-items: center;
      padding: 2rem;

      .contact {
        padding-bottom: 1rem;
        .socials {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      }  

      .services {
        align-items: flex-start;
      
        ul {
          columns: 1;
          gap: 2rem;
        }
      }
    }
    .copy{
      font-size: ${Theme.textSize.textMobileXSm};
    }
  `}  
  
  @media (max-width: 726px) {
    .footer {
    align-items: center;
    padding: 2rem;
      .contact {
        padding-bottom: 1rem;
        .socials {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      }  

      }
  }


`