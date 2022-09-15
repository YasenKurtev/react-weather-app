import { createGlobalStyle } from "styled-components";

let GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Work+Sans:wght@600&display=swap');

body, html{
    background-image: ${props => props.theme.bodyBackgroundColor};
    font-family: 'Poppins', sans-serif;
    min-height: 100%;
    font-size: 30px;
    overflow-x: hidden;

    @media (min-width: 320px) and (max-width: 575px){
        font-size 20px;
    }

    @media (min-width: 576px) and (max-width: 767px){
        font-size 20px;
    }
    
    @media (min-width: 768px) and (max-width: 991px){
        font-size 22px;
    }
    
    @media (min-width: 992px) and (max-width: 1199px){
        font-size 22px;
    }
}


`

export default GlobalStyles

//rgb( 12, 174, 275 )
//rgb( 15, 71, 132 )
//linear-gradient(to bottom right, rgb( 15, 71, 132 ), rgb( 133, 89, 136 ));