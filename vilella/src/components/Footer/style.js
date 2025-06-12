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
    padding: 2rem 0;
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
    
    .rights-reserved {
      gap: 1rem;
      img {
        width: 200px;
        height: auto;
      }
    }

    .socials {
      justify-content: space-between;

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
      line-height: 2rem;
    }
  }

  .contact {
    justify-content: space-between;
    line-height: 1.5em;
    gap: 1rem;    
    
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
  }

  .dev {
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
  
  ${media.lessThan("medium")` //medium = 768px
    .footer {
      flex-direction: column-reverse;
      align-items: center;
      gap: 1rem;

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
  `}

  ${media.lessThan("small")`
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

  `}
`