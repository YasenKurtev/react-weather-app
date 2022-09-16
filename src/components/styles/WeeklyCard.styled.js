import styled from "styled-components";

export let StyledWeeklyCard = styled.div`
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
        font-size: 0.8rem;
    }

    p:nth-child(2){
        font-size: 1rem;
    }

    img{
        width: 1.7rem;
    }

    .weather-info{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 150px;
        padding: 4px 1px;
        background-color: ${props => props.theme.cardsBackgroundColor};
        border-radius: 10px;
    }

    @media (min-width: 320px) and (max-width: 575px){
        flex-direction: row;
        justify-content: space-between;
        width: 96%;
        padding: 5px;
        padding-left: 10px;

        .weather-info{
            width: 100px;
        }
    }

    @media (min-width: 576px) and (max-width: 767px){
        .weather-info{
            width: 100px;
        }
    }
    
    @media (min-width: 768px) and (max-width: 991px){
        width: 20%;

        .weather-info{
            width: 110px;
        }
    }
    
    @media (min-width: 992px) and (max-width: 1199px){
        width: 20%;

        .weather-info{
            width: 110px;
        }
    }
`