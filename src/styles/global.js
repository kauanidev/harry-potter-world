import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    #root {
        background: url(/bg.jpg) no-repeat center/cover;
        width: 100%;
        min-height: 100vh;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input, body, button, textarea {
        font-size: 1.6rem;
        font-family: "Marcellus", serif;
    }
`