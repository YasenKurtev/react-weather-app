import { createGlobalStyle } from "styled-components";

let GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Work+Sans:wght@600&display=swap');

body, html{
    background-image: linear-gradient(to bottom right, red, yellow);
    font-family: 'Poppins', sans-serif;
    height: 100%;
}
`

export default GlobalStyles