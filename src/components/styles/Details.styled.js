import styled from "styled-components";

export let StyledDetails = styled.div`
    background-color: rgb(255, 255, 255, 0.3);
    color: #f9fafa;
    display:flex;
    justify-content: space-around;
    border-radius: 10px;
    padding: 10px;

p{
    margin: 0;
    font-size: 17px;
    font-weight: 600;
}

i{
    color: #2c3e50;
}

.stats{
    background-color: rgb(0, 0, 0, 0.3);
    border-radius: 10px;
    text-align: center;
    padding: 2px;
    margin-top: 5px;
}

.details-card{
    width: 12%;
}

.details-title{
    display: flex;
    gap: 5px;
    justify-content: center;
`