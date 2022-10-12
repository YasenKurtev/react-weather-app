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
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; /* for Firefox */
        overflow-x: scroll;
    }

    .weekly-container::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
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
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; /* for Firefox */
        overflow-x: scroll; 
    }

    .daily-container::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
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

    @media (min-width: 320px) and (max-width: 575px){
        .today-map{
            flex-direction: column;
            gap: 10px;
            padding-top: 10px;
        }

        .weather-details{
            padding-top: 10px;
        }

        .daily-forecast-container{
            padding-top: 15px;
            padding-left: 10px;
            padding-right: 10px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: center;
        }

        .daily-container{
            padding-top:15px;
            display: flex;
            gap: 10px;
        }

        .daily-container p:nth-child(1){
            width: 90px;
        }

        .weekly-forecast-container{
            padding-top: 15px;
            padding-left: 10px;
            padding-right: 10px;
            flex-direction: column;
            gap: 5px;
            align-items: center;
        }

        .weekly-container{
            padding-top:15px;
            flex-direction: column;
        }

        .daily-title{
            font-size: 1rem;
        }

        .weekly-title{
            font-size: 1rem;
        }

        .daily-time{
            font-size: 0.67rem;
        }

        .weekly-day{
            font-size: 0.67rem;
        }
    }

    @media (min-width: 576px) and (max-width: 767px){
        .daily-container p:nth-child(1){
            width: 100px;
        }

        .daily-title{
            font-size: 1rem;
        }

        .weekly-title{
            font-size: 1rem;
        }

        .daily-time{
            font-size: 0.67rem;
        }

        .weekly-day{
            font-size: 0.67rem;
        }

        .daily-forecast-container{
            padding-top: 15px;
            padding-left: 10px;
            padding-right: 10px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: center;
        }

        .weekly-forecast-container{
            padding-top: 15px;
            padding-left: 10px;
            padding-right: 10px;
            flex-direction: column;
            gap: 5px;
            align-items: center;
        }
    }
`