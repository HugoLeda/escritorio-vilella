import styled from "styled-components";

export const HeaderContainer = styled.header`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 3rem;

    background-color: #ffffff;
    color: #2b2b2b;

    position: sticky;     
    top: 0;   
    z-index: 100;    
  }
  .header-logo {
    .img {
      width: 200px;
      height: auto;
    }
  }
  .align-menu {
    padding-top: .5rem;
    a {
      display: inline;
      padding: .4rem;
      cursor: pointer;

      text-decoration: none;
      text-transform: uppercase;

      color: inherit;
      font-family: arial;
      font-size: 16px;
      font-weight: 500;

      transition: linear all .2s;
    }
    a:hover {
      font-weight: 700;
      color: #00116f; 
    }
        
  }
`