import { createGlobalStyle } from "styled-components";

let GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Work+Sans:wght@600&display=swap');

body, html{
    background-image: ${props => props.theme.bodyBackgroundColor};
    font-family: 'Poppins', sans-serif;
    min-height: 100%;
}
`

export default GlobalStyles

//rgb( 12, 174, 275 )
//rgb( 15, 71, 132 )
//linear-gradient(to bottom right, rgb( 15, 71, 132 ), rgb( 133, 89, 136 ));