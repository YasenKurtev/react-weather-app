import styled from "styled-components";

export let StyledMyCitiesCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 95%;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 10px;
    padding: 10px;

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
        font-size: 0.9rem;
        font-weight: 600;
    }

    .local-time i{
        font-size: 0.6rem;
    }

    .temp{
        font-size: 1.3rem;
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

    .weather-info img{
        width: 1.7rem;
    }

    .condition i{
        font-size: 0.7rem;
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
    }
    
    .btn p{
        margin: 0;
        font-size: 0.5rem;
        font-weight: 600;
    }

    .btn:nth-child(2) p{
        padding-left: 2px;
    }
    
    .btn i{
        font-size: 0.5rem;
    }
    
    .btn:hover{
        background-color: ${props => props.theme.selectedIconBackgroundColor};
        cursor: pointer;
        border-radius: 5px;
    }

    @media (min-width: 320px) and (max-width: 575px){
        
    }

    @media (min-width: 576px) and (max-width: 767px){
        
    }
    
    @media (min-width: 768px) and (max-width: 991px){
        .temp{
            font-size: 1.3rem;
            font-weight: 600;
        }
    }
    
    @media (min-width: 992px) and (max-width: 1199px){
        .temp{
            font-size: 1.3rem;
            font-weight: 600;
        }
    }
`