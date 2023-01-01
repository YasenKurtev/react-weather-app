import styled from "styled-components";

export let StyledFooter = styled.footer`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-top: 20px;
    font-weight: 600;

    .dev{
        font-size: 0.7rem;
    }

    .contact{
        font-size: 0.7rem;
        margin: 0;
    }

    ul{
        list-style: none;
        display: flex;
        gap: 5px;
        margin: 0;
        padding: 0;
    }

    .social-item a{
        text-align: center;
    }

    .social-item i{
        font-size: 1.2rem;
        width: 1.2rem;
        padding: 6px;
        border-radius: 50px;
        color: ${props => props.theme.iconsColor};
        transition: 0.3s;
    }

    .social-item i:hover{
        background-color: ${props => props.theme.selectedIconBackgroundColor};
    }

    .social-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding-left: 7px;
    }

    @media (min-width: 320px) and (max-width: 575px){
        flex-direction: column;
        margin-top: 10px;
        padding: 0;
        padding-bottom: 10px;

        .weather-info{
            width: 90px;
        }
    }

    @media (min-width: 576px) and (max-width: 767px){
        padding: 10px 20px;
    }
    
    @media (min-width: 768px) and (max-width: 991px){
        padding: 10px 20px;
    }
    
    @media (min-width: 992px) and (max-width: 1199px){
        padding: 10px 20px;
    }
`