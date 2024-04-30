import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: stretch;

  padding: 16px 0;
  margin-top: 5rem;

  background-color: #00116f;
  color: #fafafa;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
  }

  h3 {
      font-weight: 600;
      font-size: 22px;
    }

  .contact {
    display: flex;
    justify-content: space-between;
    
    line-height: 1.5em;
    
    h3.network{
      margin-top: 20px;
    }
    span {
        margin: 0 2px;
      }

    div.social-items {     
      width: 100%;
      
      .social-item {
        display: flex;
        flex-direction: row;
        
        width: 100%;
      }
    }  
  }

  .services {
    display: flex;
    justify-content: flex-start;

    ul {
      font-size: 20px;
    }
    li {
      display: block;
      list-style: none;
      line-height: 1.15em;
    }
  }

  .client-center {
    font-size: 1.2em;
    text-align: center;
    a {
      text-decoration: none;
      color: inherit;
    }
    span {
      text-transform: uppercase;
    }
    img {
      width: 100px;
      height: auto;
    }
  }  

`