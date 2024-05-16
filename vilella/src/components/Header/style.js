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
  
  .menu-section {
    display: none;
  }

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
      font-size: ${Theme.textSize.textSm};
      font-weight: 500;

      transition: linear all .2s;      

      padding-top: 10px;
    }

    a:hover {
      font-weight: 700;
      color: ${Theme.colors.blue1}; 
    }
        
  }

  ${media.lessThan("large")`

    padding: 0.25rem 1rem;    

    nav.menu-desk {
      display: none;      
    }

    .menu-section {
      display: block;
      cursor: pointer;
    }    

    .menu-section.on {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(255, 255, 255, 0.90);      
      z-index: 100; 
      
      display: flex;   
      flex-direction: column; 
      justify-content: flex-start;
      align-items: flex-end;      

      padding: 1rem 1rem 0 0;

      .menu-toggle {                        
        .one {                  
          transform: rotate(45deg);  
        }
        
        .two {
          opacity: 0;
        }

        .three {
          transform: rotate(-45deg);
        }
      }
    }

    .menu-mobile {
      display: none;
    }

    .menu-mobile.on {
      display: flex;    
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    
      li { list-style-type: none; text-align: center; }
      
      a {
        display: block;
        padding: .8rem 0; /* Ajuste o preenchimento conforme necessário */
        position: relative;

        cursor: pointer;
        text-decoration: none;
        text-transform: uppercase;

        color: inherit;
        font-size: ${Theme.textSize.textMobileXSm};
        font-weight: 500;

        transition: linear all .2s;      
      }

      a:hover {
        font-weight: 700;
        color: ${Theme.colors.blue1}; 
      }

      a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px; 
        background-color: rgba(43, 43, 43, 0.2); /* Cor da linha com transparência */
      }

    }  
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