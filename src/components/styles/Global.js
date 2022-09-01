import { createGlobalStyle } from "styled-components";

let GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Work+Sans:wght@600&display=swap');

body, html{
    background-image: linear-gradient(to bottom right, rgb( 192, 57, 43 ), rgb( 241, 196, 15 ));
    font-family: 'Poppins', sans-serif;
    height: 100%;
}

body{
    margin-top: 10px;
    overflow: hidden;
}
`

export default GlobalStyles