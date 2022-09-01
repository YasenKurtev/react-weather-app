import styled from "styled-components";

export let StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;

    .today-map{
        display: flex;
        gap: 10px;
        padding-top: 10px;
    }

    .weekly-container{
        padding-top:10px;
        display: flex;
        gap: 10px;
    }

    .weather-details{
        padding-top: 10px;
    }

    .weekly-title{
        margin: 0;
        padding-top: 10px;
        text-align: center;
        color: #f9fafa;
        font-size: 25px;
        font-weight: 600;
    }
`