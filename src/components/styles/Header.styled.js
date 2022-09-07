import styled from "styled-components";

export let StyledHeader = styled.header`
    background-color: rgb(255, 255, 255, 0.3);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    border-radius: 10px;

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

    form i{
        font-size: 20px;
        color: grey;
    }

    .theme-selector i{
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
        background-color: #abb2b9;
        cursor: pointer;
        border: 0;
        padding: 6px;
        border-radius: 50px;
        transition: transform 0.2s;
    }

    .theme-btn i{
        color: #2c3e50;
    }

    .theme-btn:hover{
        transform: scale(1.2);
        background-color: white;
    }

    .location-btn{
        color: #f9fafa;
        cursor: pointer;
        font-size: 15px;
        font-weight: 600;
        padding: 6px;
        border:0;
        transition: transform;
        background-color: transparent;
    }

    .location-btn:hover{
        transform: scale(1.1);
    }

    .location-btn i{
        font-size: 23px;
        color:  #2c3e50;
    }

    .location-btn p{
        margin: 0;
    }

    .units-buttons{
        display: flex;
        align-items: center;
    }

    .units-selector{
        display:flex;
        flex-direction: column;
    }

    .units-selector p{
        margin: 0;
        text-align: center;
        color: #f9fafa;
        font-weight: 600;
    }

    .units-buttons button{
        cursor: pointer;
        font-size: 20px;
        font-weight: 600;
        color: #2c3e50;
        border: 0;
        background-color: transparent;
        padding: 6px;
    }

    .units-buttons button:hover{
        color: white;
    }

    /* HIDE RADIO */
    [type=radio] { 
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* IMAGE STYLES */
    [type=radio] + i {
        font-size: 25px;
        cursor: pointer;
        padding: 3px;
        color: #2c3e50;
        transition: transform 0.2s;
    }

    [type=radio] + i:hover {
        transform: scale(1.2);
    }

    /* CHECKED STYLES */
        [type=radio]:checked + i {
        background-color: white;
        border-radius: 50px;
        padding: 3px;
    }

    @media (max-width: 768px){
        flex-direction: column;
    }
`