import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: stretch;

  padding: 1rem 0;
  margin-top: 5rem;

  background-color: #00116f;
  color: #fafafa;

  h3 {
    font-weight: 600;
    font-size: 22px;
  }

  .contact,
  .services,
  .client {
    display: flex;
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

      .holder {
        display: flex;
        flex-direction: column;
      }
    
      .social-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        color: #fff;

        width: 100%;
        span {
          font-size: 18px;
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
      font-size: 20px;
    }
    a {
      display: block;
      list-style: none;
      line-height: 1.3em;
    }
  }

  .client {
    text-align: center;
    a {
      text-decoration: none;
      transition: linear all .2s;
      color: inherit;
    }
    h3 {
      font-size: 1.2rem;
      cursor: pointer;
      text-transform: uppercase;
    }
    span {
      font-size: 1.5rem;
    }
    .img {
      width: auto;
      height: auto;
    }

    .client-access:hover {
      transform: scale(1.1);
    }
  }  

`