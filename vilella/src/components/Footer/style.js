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

    div.social-items {     
      width: 50%;      

      .social-item {
        display: flex;
        flex-direction: row;
        
        width: 100%;
      }
    }
  }

  .client-center {
    font-size: 1.2em;
    text-align: center;

    img {
      width: 100px;
      height: auto;
    }
  }  

`