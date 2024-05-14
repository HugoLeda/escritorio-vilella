import styled from "styled-components";
import media from "styled-media-query";

export const HeaderContainer = styled.header`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 3rem;

  background-color: #ffffff;
  color: #2b2b2b;

  position: sticky;     
  top: 0;   
  z-index: 100;    

  .header-logo {
    .img {
      width: 200px;
      height: auto;
    }
  }

  .menu {        
    display: flex;        
    align-items: center;
    gap: 1rem;
    
    list-style-type: none;    
    li {             
      display: flex;        
      align-items: center;
    }

    a {
      display: inline;      
      cursor: pointer;

      text-decoration: none;
      text-transform: uppercase;

      color: inherit;
      font-family: arial;
      font-size: 16px;
      font-weight: 500;

      transition: linear all .2s;      

      padding-top: 16px;
    }

    a:hover {
      font-weight: 700;
      color: #00116f; 
    }

    .menu-section {
      display: none;
    }    
  }

  ${media.lessThan("large")`

  padding: 1.2rem 2.5rem;

    nav {
      display: none;
      background-color: aqua;
    }

    .menu-section {
      display: block;
    }

    .menu-toggle{
      width: 40px;
      height: 30px;
      margin-right: 20px;
    }
    
    .one,
    .two,
    .three {
      background-color:#000;
      height: 5px;
      width: 100%;
      margin: 6px auto;
      transition-duration: 0.3s;
    }
  `}
`