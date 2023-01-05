import styled from "styled-components";

export let StyledMyCitiesCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;

    .city-container{
        display: flex;
        justify-content: space-between;
    }

    .city-name-container{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    
    .city-name{
        font-size: 1rem;
        font-weight: 600;
    }

    .local-time i{
        font-size: 0.7rem;
    }

    .temp{
        font-size: 1.4rem;
        font-weight: 600;
    }

    .info-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .weather-info-container{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .weather-info-container img{
        width: 1.7rem;
    }

    .condition i{
        font-size: 0.8rem;
    }

    .buttons-container{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .btn{
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 3px;
        cursor: pointer;
        border-radius: 5px;
        transition: 0.3s;
    }
    
    .btn p{
        margin: 0;
        font-size: 0.6rem;
        font-weight: 600;
    }

    .btn:nth-child(2) p{
        padding-left: 2px;
    }
    
    .btn i{
        font-size: 0.6rem;
    }
    
    .btn:hover{
        background-color: ${props => props.theme.selectedIconBackgroundColor};
    }
`