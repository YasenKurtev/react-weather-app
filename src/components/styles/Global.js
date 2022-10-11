import { createGlobalStyle } from "styled-components";

let GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Work+Sans:wght@600&display=swap');

    body, html{
        background-image: ${props => props.theme.bodyBackgroundColor};
        font-family: 'Poppins', sans-serif;
        padding: 0 5px;
        font-size: 30px;
        overflow-x: hidden;

        @media (min-width: 320px) and (max-width: 575px){
            font-size 20px;
        }

        @media (min-width: 576px) and (max-width: 767px){
            font-size 22px;
        }

        @media (min-width: 768px) and (max-width: 991px){
            font-size 24px;
        }

        @media (min-width: 992px) and (max-width: 1199px){
            font-size 26px;
        }
    }
`

export default GlobalStyles;