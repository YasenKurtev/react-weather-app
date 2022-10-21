import styled from "styled-components";

export let StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};

    .first-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 45%;
    }

    .second-container{
        display: flex;
        justify-content: space-around;
        width: 18%;
    }

    .title-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
    }

    img{
        width: 2rem;
    }

    h1{
        font-size: 1.4rem;
        margin: 20px 0;
    }

    .location-cities-container{
        display: flex;
        flex-direction: column;
    }

    .location-cities-btn{
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        color: ${props => props.theme.textColor};
        font-size: 0.6rem;
        font-weight: 600;
        padding: 6px;
        border:0;
        background-color: transparent;
    }

    .location-cities-btn i{
        font-size: 0.7rem;
    }

    .location-cities-btn p{
        font-size: 0.7rem;
        margin: 0;
    }

    .location-cities-btn:hover{
        color: ${props => props.theme.selectedIconBackgroundColor};
    }

    form{
        display: flex;
        width: 30%;
        height: 1.3rem;
    }
    
    input[type=text]{
        -webkit-appearance: none;
        -webkit-border-radius:0;
        width: 100%;
        font-size: 0.6rem;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border: 2px solid transparent;
        outline: none;
        color: rgba(44, 62, 80, 1);
    }

    form input:focus::placeholder{
        color: rgba(44, 62, 80, 0.3);
    }

    .clear-btn{
        -webkit-appearance: none;
        cursor: pointer;
        background-color: white;
        border: 0;
        width: 15%;
    }

    .clear-btn i:hover{
        color: #e74c3c;
    }

    .search-btn{
        -webkit-appearance: none;
        cursor: pointer;
        background-color: white;
        border: 0;
        width: 15%;
        border-left: 2px solid grey;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .search-btn i:hover{
        color: #2ecc71;
    }

    form i{
        font-size: 0.7rem;
        color: grey;
    }

    .units-selector-container{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .units-selector-container p{
        font-size: 0.7rem;
        margin: 0;
        text-align: center;
        font-weight: 600;
    }

    .units-buttons-container{
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }

    .units-buttons-container label p{
        width: 0.8rem;
        border-radius: 50px;
    }

    .theme-selector-container{
        display:flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    .theme-selector-container p{
        font-size: 0.7rem;
        font-weight: 600;
        margin: 0;
    }

    .theme-buttons-container{
        display:flex;
        justify-content: space-between;
        gap: 10px;
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
        font-size: 0.8rem;
        cursor: pointer;
        padding: 4px;
        color: ${props => props.theme.iconColor};
    }

    [type=radio] + i:hover {
        background-color: ${props => props.theme.selectedIconBackgroundColor};
        border-radius: 50px;
        padding: 4px;
    }

    /* CHECKED STYLES */
        [type=radio]:checked + i {
        background-color: ${props => props.theme.selectedIconBackgroundColor};
        border-radius: 50px;
        padding: 4px;
    }

    /* IMAGE STYLES */
    [type=radio] + p {
        font-size: 0.7rem;
        cursor: pointer;
        padding: 4px;
        color: ${props => props.theme.unitsColor};
    }

    [type=radio] + p:hover {
        background-color: ${props => props.theme.selectedIconBackgroundColor};
    }

    /* CHECKED STYLES */
        [type=radio]:checked + p {
            background-color: ${props => props.theme.selectedIconBackgroundColor};
    }

    @media (min-width: 320px) and (max-width: 575px){
        flex-direction: column;
        gap:10px;
        width: 100%;
        padding: 0;
        padding-bottom: 10px;
        margin: 0;

        .first-container{
            flex-direction: column;
            width: 90%;
        }

        .second-container{
            width: 88%;
            justify-content: space-between;
        }

        form{
            width: 90%;
        }

        .units-selector-container{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;
        }

        .theme-selector-container{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        
        .theme-buttons-container{
            display:flex;
            gap: 10px;
        }

        .location-cities-container{
            width: 100%;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        .location-cities-btn{
            font-size: 0.7rem;
        }
    }

    @media (min-width: 576px) and (max-width: 767px){
        width: 100%;
        padding: 0;
        padding-bottom: 10px;
        margin: 0;
        justify-content: space-around;

        .first-container{
            flex-direction: column;
            width: 40%;
            padding-bottom: 10px;
        }

        .second-container{
            width: 15%;
            flex-direction: column;
            align-items: center;
            gap:10px;
            padding-top: 10px;
        }

        form{
            width: 40%;
        }

        .location-cities-container{
            width: 100%;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
        }
    }

    @media (min-width: 768px) and (max-width: 991px){
        width: 100%;
        padding: 0;
        margin: 0;
        justify-content: space-around;

        .first-container{
            flex-direction: column;
            width: 35%;
            padding-bottom: 10px;
        }

        .second-container{
            width: 25%;
            justify-content: space-evenly;
            align-items: center;
            gap:10px;
        }

        form{
            width: 30%;
        }

        .location-cities-container{
            width: 100%;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px){
        width: 100%;
        padding: 10px 0;
        justify-content: space-around;

        .first-container{
            justify-content: space-around;
        }

        .second-container{
            justify-content: space-around;
        }
    }
`