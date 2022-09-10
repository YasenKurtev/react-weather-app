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
    height: 3.3vh;

    .dev{
        font-size: 18px;
    }

    .contact{
        font-size: 18px;
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
        font-size: 25px;
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
`