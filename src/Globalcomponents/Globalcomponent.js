import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        letter-spacing: 1px;
        font-family: 'Courier New', Courier;
        color: white;
        
        
    };
    body {
        background-image: linear-gradient(to right, #957DAD, #E0BBE4);
    }
    
`;


export default GlobalStyle;