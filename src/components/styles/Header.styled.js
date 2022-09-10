import styled from "styled-components";

export let StyledHeader = styled.header`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    border-radius: 10px;

    label, input{
        display: block;
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
        border: 2px solid ${props => props.theme.iconColor};
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
        color:  ${props => props.theme.iconColor};
    }

    .location-btn p{
        margin: 0;
    }

    .units-buttons{
        display: flex;
        justify-content: space-between;
        gap: 5px;
    }

    .units-selector{
        display:flex;
        flex-direction: column;
    }

    .units-selector p{
        margin: 0;
        text-align: center;
        font-weight: 600;
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
        color: ${props => props.theme.iconColor};
        transition: transform 0.2s;
    }

    [type=radio] + i:hover {
        transform: scale(1.2);
    }

    /* CHECKED STYLES */
        [type=radio]:checked + i {
        background-color: ${props => props.theme.selectedIconBackgroundColor};
        border-radius: 50px;
        padding: 3px;
    }

    /* IMAGE STYLES */
    [type=radio] + p {
        font-size: 25px;
        cursor: pointer;
        padding: 3px;
        color: ${props => props.theme.unitsColor};
        transition: transform 0.2s;
    }

    [type=radio] + p:hover {
        transform: scale(1.2);
    }

    /* CHECKED STYLES */
        [type=radio]:checked + p {
        color: ${props => props.theme.selectedUnitsColor};
    }

    @media (max-width: 768px){
        flex-direction: column;
    }
`