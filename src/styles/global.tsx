import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
:root {
    --background: #F0F2F5;

}
body {
    background: var(--background);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
body, input, textarea, button {
    font-family: 'Heebo', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;
font-weight: 400;

}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}
`
