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
gap: 7px;
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
    font-size: 1rem;
}

.low-high{
    display: flex;
    gap: 10px;
}

.low-high p{
    margin: 0;
    font-size: 0.7rem;
}

h1{
    font-size: 1.4rem;
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
    padding-top: 10px;
}

.default-city-div p{
    padding: 0;
}

.default-city-div i{
    font-size: 0.6rem;
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
    font-size: 0.6rem;
    font-weight: 600;
}

.add-button i{
    font-size: 0.6rem;
}

.add-button:hover{
    background-color: ${props => props.theme.selectedIconBackgroundColor};
    cursor: pointer;
    border-radius: 5px;
}

@media (min-width: 320px) and (max-width: 575px){
    width: 100%;
    padding: 10px 0;

    .add-button p{
        font-size: 0.7rem;
    }

    .add-button i{
        font-size: 0.7rem;
    }

    .default-city-div i{
        font-size: 0.7rem;
    }

    .default-city-div{
        align-items: flex-start;
    }
}

@media (min-width: 576px) and (max-width: 767px){
    width: 50%;
    padding: 10px 0;

    .add-button p{
        font-size: 0.7rem;
    }

    .add-button i{
        font-size: 0.7rem;
    }

    .default-city-div i{
        font-size: 0.7rem;
    }

    .default-city-div{
        align-items: flex-start;
    }
}

@media (min-width: 768px) and (max-width: 991px){
    width: 40%;
    padding: 10px 0;

    .add-button p{
        font-size: 0.7rem;
    }

    .add-button i{
        font-size: 0.7rem;
    }

    .default-city-div i{
        font-size: 0.7rem;
    }

    .default-city-div{
        align-items: flex-start;
    }
}

@media (min-width: 992px) and (max-width: 1199px){
    width: 35%;
    padding: 10px 0;

    .add-button p{
        font-size: 0.7rem;
    }

    .add-button i{
        font-size: 0.7rem;
    }

    .default-city-div i{
        font-size: 0.7rem;
    }

    .default-city-div{
        align-items: flex-start;
    }
}
`