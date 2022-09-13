import styled from "styled-components";

export let StyledHeader = styled.header`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    label, input{
        display: block;
    }

    input{
        width: 100%;
        height: 30px;
        font-size: 16px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border: 2px solid transparent;
        outline: none;
        color: rgba(44, 62, 80, 1);
    }

    form input:focus::placeholder{
        color: rgba(44, 62, 80, 0.3);
    }

    form{
        display:flex;
        width: 30%;
    }

    .search-btn{
        cursor: pointer;
        background-color: white;
        border: 0;
        border-left: 2px solid grey;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 15%;
        transition: transform 0.2s;
    }

    .clear-btn{
        cursor: pointer;
        background-color: white;
        border: 0;
        width: 15%;
        transition: transform 0.2s;
    }

    .clear-btn i:hover{
        transform: scale(1.2);
        color: #e74c3c;
    }

    .search-btn i:hover{
        transform: scale(1.2);
        color: #2ecc71;
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

    .location-cities{
        display: flex;
        flex-direction: column;
    }

    .location-btn{
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        color: ${props => props.theme.textColor};
        font-size: 15px;
        font-weight: 600;
        padding: 6px;
        border:0;
        background-color: transparent;
    }

    .location-btn i{
        font-size: 18px;
    }

    .location-btn p{
        margin: 0;
    }

    .location-btn:hover{
        color: ${props => props.theme.selectedIconBackgroundColor};
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