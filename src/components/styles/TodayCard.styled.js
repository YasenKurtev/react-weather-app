import styled from "styled-components";

export let StyledTodayCard = styled.div`
color: ${props => props.theme.textColor};
width: 30%;
background-color: ${props => props.theme.backgroundColor};
border-radius: 10px;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
position: relative;

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

.default-city-btn{
    border: 0;
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.defaultCityColor};
}

.default-city-btn:hover{
    text-decoration: underline;
}

.default-city{
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.defaultCityColor};
}

.default-city-div{
    display: flex;
    gap: 5px;
}

.add-button{
    position: absolute;
    right: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 3px;
}

.add-button p{
    margin: 0;
    font-size: 13px;
    font-weight: 600;
}

.add-button i{
    font-size: 13px;
}

.add-button:hover{
    background-color: ${props => props.theme.selectedIconBackgroundColor};
    cursor: pointer;
    border-radius: 5px;
}
`