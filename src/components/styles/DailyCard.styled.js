import styled from "styled-components";

export let StyledDailyCard = styled.div`
color: #f9fafa;
    width: 12%;
    background-color: rgb(255, 255, 255, 0.3);
    border-radius: 10px;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 5px;

    p{
        margin: 0;
        text-align: center;
        font-weight: 600;
    }

    p:nth-child(1){
        font-size: 20px;
    }

    p:nth-child(2){
        font-size: 20px;
    }

    img{
        width: 30px;
    }

    .weather-info{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
`