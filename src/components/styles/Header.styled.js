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

    h1{
        color: #f9fafa;
    }

    input{
        width: 100%;
        height: 30px;
        font-size: 18px;
        border-radius: 10px;
        border: 2px solid transparent;
        outline: none;
        transition: 0.5s;
    }

    input:focus{
        border: 2px solid black;
    }

    form{
        display:flex;
        width:300px;
        padding: 20px;
        heigth: 100px;
    }

    .search-btn{
        cursor: pointer;
        background-color: transparent;
        border: 0;
        border-left: 1px solid grey;
        margin-left: -40px;
        width: 40px
    }

    .clear-btn{
        cursor: pointer;
        background-color: transparent;
        border: 0;
        margin-left: -80px;
        width: 40px
    }

    .clear-btn i:hover{
        color: red;
    }

    .search-btn i:hover{
        color: green;
    }

    i{
        font-size: 18px;
        color: grey;
    }

    .logo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
    }

    img{
        width: 60px;
    }

    .theme-selector{
        display:flex;
        flex-direction: column;
        gap: 5px;
    }

    .theme-selector p{
        color: #f9fafa;
        font-weight: 600;
        margin: 0;
    }

    .theme-buttons{
        display:flex;
        justify-content: space-around;
    }

    .theme-btn{
        cursor: pointer;
        border: 0;
        padding: 6px;
        border-radius: 50px;
        transition: transform 0.2s;
    }

    .theme-btn:hover{
        transform: scale(1.2);
    }

    .location-btn{
        color: #f9fafa;
        cursor: pointer;
        font-size: 15px;
        font-weight: 600;
        padding: 6px;
        border:0;
        transition: transform 0.2s;
        background-color: transparent;
    }

    .location-btn:hover{
        transform: scale(1.1);
    }

    @media (max-width: 768px){
        flex-direction: column;
    }
`