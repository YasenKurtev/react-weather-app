import styled from "styled-components";

export let StyledTodayCard = styled.div`
color: ${props => props.theme.textColor};
width: 35%;
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
    gap: 5px;
}

.temp{
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;
}

.condition{
    margin:0;
    font-size: 0.8rem;
}

.low-high{
    display: flex;
    gap: 10px;
}

.low-high p{
    margin: 0;
    font-size: 0.5rem;
}

h1{
    font-size: 1.2rem;
    margin:0;
}

img{
    width: 3.3rem;
}

.default-city-btn{
    border: 0;
    background-color: transparent;
    cursor: pointer;
    font-size: 0.5rem;
    font-weight: 600;
    color: ${props => props.theme.defaultCityColor};
}

.default-city-btn:hover{
    text-decoration: underline;
}

.default-city{
    margin: 0;
    font-size: 0.5rem;
    font-weight: 600;
    color: ${props => props.theme.defaultCityColor};
}

.default-city-div{
    display: flex;
    align-items: center;
    gap: 5px;
}

.default-city-div p{
    padding-bottom: 5px;
}

.default-city-div i{
    font-size: 0.5rem;
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
    font-size: 0.5rem;
    font-weight: 600;
}

.add-button i{
    font-size: 0.4rem;
}

.add-button:hover{
    background-color: ${props => props.theme.selectedIconBackgroundColor};
    cursor: pointer;
    border-radius: 5px;
}

@media (min-width: 320px) and (max-width: 575px){
    width: 100%;
    height: 10.7rem;
    padding: 10px 0;
}

@media (min-width: 576px) and (max-width: 767px){
    width: 100%;
    height: 10.7rem;
    padding: 10px 0;
}

@media (min-width: 768px) and (max-width: 991px){
    padding: 10px 0;
}

@media (min-width: 992px) and (max-width: 1199px){
    padding: 10px 0;
}
`