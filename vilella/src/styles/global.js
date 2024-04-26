import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0px;
    outline: 0;
    box-sizing: border-box;
  }
`
const theme = {
  colors: {
    darkblue: '#0d2d7d',
    brightred: '#ff0000',
    white: '#ffffff',
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