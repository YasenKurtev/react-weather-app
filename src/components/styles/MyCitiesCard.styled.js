import styled from "styled-components";

export let StyledMyCitiesCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 385px;
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
        cursor: pointer;
        border-radius: 5px;
    }

    @media (min-width: 320px) and (max-width: 575px){
        width: 250px;
    }

    @media (min-width: 576px) and (max-width: 767px){
        width: 277px;
    }
    
    @media (min-width: 768px) and (max-width: 991px){
        width: 304px;
    }
    
    @media (min-width: 992px) and (max-width: 1199px){
        width: 331px;

        
    }
`