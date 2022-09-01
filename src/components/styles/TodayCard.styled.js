import styled from "styled-components";

export let StyledTodayCard = styled.div`
color: #f9fafa;
width: 30%;
background-color: rgb(255, 255, 255, 0.3);
border-radius: 10px;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

.weather-info{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.temp{
    font-size: 50px;
    font-weight: 600;
    margin: 0;
}

.condition{
    margin:0;
    font-size: 20px;
}

.low-high{
    display: flex;
    gap: 10px;
}

.low-high p{
    margin: 0;
}

h1{
    font-size: 40px;
    margin:0;
}

img{
    width: 100px;
}
`