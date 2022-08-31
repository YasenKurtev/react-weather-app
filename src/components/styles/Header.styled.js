import styled from "styled-components";

export let StyledHeader = styled.header`
    background-color: aqua;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    label, input{
        display: block;
    }

    input{
        width: 100%;
        height: 30px;
        font-size: 18px;
        border-radius: 10px;
        border: 0;
    }

    form{
        display:flex;
        width:300px;
        padding: 20px;
        heigth: 100px;
    }

    button{
        cursor: pointer;
        background-color: transparent;
        border: 0;
        border-left: 1px solid grey;
        margin-left: -40px;
        width: 40px
    }

    i{
        font-size: 18px;
        color: grey
    }

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
    }

    img{
        width: 60px;
    }

    @media (max-width: 768px){
        flex-direction: column;
    }
`