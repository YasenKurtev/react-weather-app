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
        justify-content: space-between;
        gap: 10px;
        margin: 0;
        padding: 0;
    }

    .social-item i{
        font-size: 0.9rem;
        padding: 5px;
        color: ${props => props.theme.iconsColor};
    }

    .social-item i:hover{
        border-radius: 50px;
        background-color: ${props => props.theme.selectedIconBackgroundColor};
    }

    .social-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
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
        flex-direction: row;
    }
    
    @media (min-width: 768px) and (max-width: 991px){
        padding: 10px 0;
    }
    
    @media (min-width: 992px) and (max-width: 1199px){
        padding: 10px 0;
    }
`