import styled from "styled-components";

export let StyledDailyCard = styled.div`
    color: ${props => props.theme.textColor};
    width: 12%;
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 10px;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    p{
        margin: 0;
        text-align: center;
        font-weight: 600;
    }

    p:nth-child(1){
        font-size: 0.8rem;
    }

    p:nth-child(2){
        font-size: 0.8rem;
    }

    img{
        width: 1rem;
    }

    .weather-info{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        width: 80%;
        padding: 4px 1px;
        background-color: ${props => props.theme.cardsBackgroundColor};
        border-radius: 10px;
    }

    @media (min-width: 320px) and (max-width: 575px){
        width: 70px;
        gap: 10px;
        padding: 7px 2px;
    }
    
    @media (min-width: 576px) and (max-width: 767px){
        width: 90px;
        gap: 10px;
        padding: 7px 2px;
    }
    
    @media (min-width: 768px) and (max-width: 991px){
        padding: 10px 0;
    }
    
    @media (min-width: 992px) and (max-width: 1199px){
        padding: 10px 0;
    }
`