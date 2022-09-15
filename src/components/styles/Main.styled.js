import styled from "styled-components";

export let StyledMain = styled.main`
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;

    .today-map{
        display: flex;
        gap: 20px;
        padding-top: 20px;
    }

    .weekly-container{
        padding-top:20px;
        display: flex;
        gap: 10px;
    }

    .weekly-forecast-container{
        padding-top:20px;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .weekly-day{
        margin: 0;
        font-size: 0.6rem;
        font-weight: 600;
        border-bottom: 2px solid ${props => props.theme.textColor};
    }

    .weather-details{
        padding-top: 20px;
    }

    .weekly-title{
        margin: 0;
        font-size: 0.9rem;
        font-weight: 600;
    }

    .daily-container{
        padding-top:20px;
        display: flex;
        gap: 10px;
    }

    .daily-forecast-container{
        padding-top:20px;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .daily-title{
        margin: 0;
        font-size: 0.9rem;
        font-weight: 600;
    }

    .daily-time{
        margin: 0;
        font-size: 0.6rem;
        font-weight: 600;
        border-bottom: 2px solid ${props => props.theme.textColor};
    }

    .daily-time-container{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .weekly-day-container{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .error-message{
        color: #f9fafa;
        font-size: 25px;
        font-weight: 600;
        margin: 0;
    }

    .error-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        gap: 20px;
    }

    .error-container i{
        font-size: 70px;

    }

    @media (max-width: 576px){
        .today-map{
            flex-direction: column;
            gap: 10px;
            padding-top: 10px;
        }

        .weather-details{
            padding-top: 10px;
        }

        .daily-forecast-container{
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: center;
        }

        .daily-container{
            padding-top:10px;
            display: flex;
            gap: 10px;
            overflow: scroll;
        }

        .daily-container p:nth-child(1){
            width: 70px;
        }

        .weekly-forecast-container{
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            flex-direction: column;
            gap: 5px;
            align-items: center;
        }

        .weekly-container{
            padding-top:10px;
            flex-direction: column;
        }
    }

    @media (max-width: 768px){
    }

    @media (max-width: 992px){
    }

    @media (max-width: 1200px){
    }
    `
