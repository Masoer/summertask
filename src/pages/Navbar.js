import  styled  from "styled-components";
import {Link} from "react-router-dom"


export const Navbar = styled.ul `
    display:flex;
    justify-content: space-between;
    padding: 20px;
    margin: 0 auto;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: white;
    text-align: center;
    /* display:flex;
    justify-content: flex-start;
    border: 2px solid #9c404b;
    border-radius: 5px;
    background: #5B0F4C;
    font-family: helvetica, arial, sans-serif;
    padding: 30px;
    margin: 0 auto;
    text-align: left;
    position: sticky;
    top: 0;
    z-index: 1; */

`


export const StyledLink = styled(Link)`
    
    -webkit-text-stroke: 0.5px #9c404b;
    text-decoration: none;
    background: none;
    list-style: none;
    font-weight: bold;

`