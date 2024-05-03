import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  
    font-family: "Archivo", sans-serif;    
    font-weight: 300;
    font-style: normal;
    font-variation-settings: "wdth" 100;

    margin: 0;
    padding: 0px;
    outline: 0;
    box-sizing: border-box;
  }
`
const theme = {
  colors: {
    bgblue: '#0d2d7d',
    defred: '#ff0000',
    defwhite: '#ffffff',
    babyblue: '#93c5ff',
    
    gray1: '#2b2b2b',
    gray2: '#606060',
    lightgray: '#fafafa',
    lightgray: '#f2f2f2',

    blue1: '#00116f',
    blue2: '#1a3a8a',
    blue3: '#759dcc',
    blue4: '#a8d0ff',
    
    red1: '#cc0000',
    red2: '#ff3333',
  },
};