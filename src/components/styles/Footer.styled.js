import styled from "styled-components";

export let StyledFooter = styled.footer`
    background-color: ${props => props.theme.backgroundColor};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-top: 20px;
    height: 3.3vh;
`