import styled from "styled-components";
import media from "styled-media-query";
import Theme from '../../styles/theme';

export const HeaderContainer = styled.header`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 3rem;

  background-color: ${Theme.colors.white};
  color: ${Theme.colors.gray1};

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
      color: ${Theme.colors.blue1}; 
    }

    .menu-section {
      display: none;
    }    
  }

  ${media.lessThan("large")`

    padding: 0.25rem 1rem;    

    nav {
      display: none;      
    }

    .menu-section {
      display: block;
    }

    .menu-toggle{
      width: 40px;
      height: 30px;      
    }
    
    .one,
    .two,
    .three {
      background-color: ${Theme.colors.gray1};
      height: .25rem;
      width: 100%;
      margin: 6px 0;
      transition-duration: 0.3s;
      border-radius: 3px;
    }
  `}
`