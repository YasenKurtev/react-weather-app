import { createGlobalStyle } from "styled-components";

let GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Work+Sans:wght@600&display=swap');

body, html{
    background-image: linear-gradient(to bottom right, rgb( 15, 71, 132 ), rgb( 76, 152, 204 ));
    font-family: 'Poppins', sans-serif;
    min-height: 100%;
}

body{
    margin-top: 20px;
}
`

export default GlobalStyles

//rgb( 12, 174, 275 )