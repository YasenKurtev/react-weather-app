import styled from "styled-components";

export let StyledMain = styled.main`
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: column;
    height: 100%;

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

    .weather-details{
        padding-top: 20px;
    }

    .weekly-title{
        margin: 0;
        padding-top: 20px;
        text-align: center;
        font-size: 25px;
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
        font-size: 25px;
        font-weight: 600;
    }

    .daily-time{
        margin: 0;
        font-size: 20px;
        font-weight: 600;
        text-decoration: underline;
    }
    `
