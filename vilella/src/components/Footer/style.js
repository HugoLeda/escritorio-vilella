import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: stretch;
  
  width: 100vw;

  padding: 16px 0;

  background-color: #00116f;
  color: #fafafa;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;

  }

  .contact {
    display: flex;
    justify-content: space-between;
    
    h3.network{
      margin-top: 20px;
    }
    span {
        margin: 0 2px;
      }

    div.social-items {     
      width: 100%;
      
      .social-item-phone {
        display: flex;
        flex-direction: row;
        
        width: 100%;
      }
      .social-item-whatsapp {
        display: flex;
        flex-direction: row;
        
        width: 100%;
      }
      .social-item-email {
        display: flex;
        flex-direction: row;
        
        width: 100%;
      }
      .social-item-instagram {
        
        display: flex;
        flex-direction: row;

        width: 100%;
      }
    }  
  }

  .services {
    display: flex;
    justify-content: flex-start;

    li {
      display: block;
      list-style: none;

    }
  }


  .client-center {
    font-size: 1.2em;
    text-align: center;
    span {
      text-transform: uppercase;
    }
    img {
      width: 100px;
      height: auto;
    }
  }  

`