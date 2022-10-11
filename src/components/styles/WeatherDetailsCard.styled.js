import styled from "styled-components";

export let StyledWeatherDetailsCard = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    display:flex;
    justify-content: space-around;
    border-radius: 10px;
    padding: 10px 0;

    p{
        margin: 0;
        font-size: 0.6rem;
        font-weight: 600;
    }

    i{
        color: ${props => props.theme.iconColor};
        font-size: 0.7rem;
    }

    .stats{
        background-color: ${props => props.theme.cardsBackgroundColor};
        border-radius: 10px;
        text-align: center;
        padding: 2px;
        padding-top: 4px;
        margin-top: 10px;
    }

    .details-card{
        width: 12%;

    }

    .details-title{
        display: flex;
        gap: 5px;
        justify-content: center;
    }

    @media (min-width: 320px) and (max-width: 575px){
        flex-direction: column;
        gap: 7px;
        width: 100%;
        padding: 10px 0;

        .details-card{
            display: flex;
            width: 100%;
            justify-content: center;
            gap: 50px;
        }

        .stats{
            width: 25%;
            margin: 0;
        }

        .details-title{
            width: 30%;
            justify-content: flex-start;
            align-items: center;
            padding-bottom: 0;
        }

        p{
            font-size: 0.7rem;
        }
    }

    @media (min-width: 576px) and (max-width: 767px){
        width: 100%;
        padding: 10px 0;

        p{
            font-size: 0.7rem;
        }
    }

    @media (min-width: 768px) and (max-width: 991px){
        width: 100%;
        padding: 10px 0;

        p{
            font-size: 0.7rem;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px){
        width: 100%;
        padding: 10px 0;

        p{
            font-size: 0.7rem;
        }
    }
`