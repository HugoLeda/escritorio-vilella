import styled from "styled-components";

export const HeaderContainer = styled.header `
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    
    width: 100vw;

    padding: 16px 0;

    background-color: #ffffff;
    color: #2b2b2b;

    div {
        display: flex;
        }


    .header-logo {
        img {
            width: 200px;
            height: auto;
        }
    }

    .menu {
        li {
            display: inline-block;
            margin: 10px;
            
        }
        li a {
            text-decoration: none;
            
            color: inherit;
            font-size: 20px;
        }
        
    }
`