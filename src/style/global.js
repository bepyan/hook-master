import { createGlobalStyle } from "styled-components";
import theme from "./theme";


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        color: ${theme.color.font};
        font-family: 'Do Hyeon', sans-serif;;
    }
    html{
        background-color: ${theme.color.background};
        user-select: none;
    }
    body{
        box-sizing: border-box;
        &::-webkit-scrollbar{
            display: none; /* Chrome, Safari, Opera*/
        }
    }
    p {
        font-size: 20px;
    }
    a {
        font-size: 20px;
        text-decoration: none;
        &:hover {
            font-weight: 600;
        }
    }
         
    button {
        background-image: linear-gradient(to right,  ${theme.color.background} 0%, ${theme.color.font}  50%, ${theme.color.background}  100%);
        &:hover{
            background-position: right center; /* change the direction of the change here */
            color: ${theme.color.background};
            text-decoration: none;
        }
    }
    button {
        margin: 10px;
        padding: 15px 45px;
        text-align: center;
        text-transform: uppercase;
        transition: 0.5s;
        background-size: 300% auto;
        color: ${theme.color.font};            
        box-shadow: 0 0 10px #eee;
        border: none;
        border-radius: 10px;
        font-size: 40px;
        cursor: pointer;
    }
         
`;

export default GlobalStyle;