import styled from "styled-components";

export const HeaderContainer = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5rem 3rem;

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
            display: inline;
            margin: 10px;
            float: left;
        }
        li a {
            text-decoration: none;
            text-transform: uppercase;

            color: inherit;
            font-family: arial;
            font-size: 16px;
            font-weight: 500;
        }
        li a:hover {
            font-weight: 700;
            color: #00116f;
        }
        
    }
`