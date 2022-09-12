import styled from "styled-components";

export let StyledMyCitiesCard = styled.div`
color: ${props => props.theme.textColor};
    width: 18%;
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    p{
        margin: 0;
        text-align: center;
        font-weight: 600;
    }

    p:nth-child(1){
        font-size: 20px;
    }

    p:nth-child(2){
        font-size: 30px;
    }

    img{
        width: 50px;
    }

    .weather-info{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 80%;
        padding: 4px 1px;
        background-color: ${props => props.theme.cardsBackgroundColor};
        border-radius: 10px;
    }
`