import styled from "styled-components";

export let StyledDetails = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    display:flex;
    justify-content: space-around;
    border-radius: 10px;
    padding: 20px;

p{
    margin: 0;
    font-size: 0.6rem;
    font-weight: 600;
}

i{
    color: ${props => props.theme.iconColor};
    font-size: 0.7rem;
}

.stats{
    background-color: ${props => props.theme.cardsBackgroundColor};
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
    padding-bottom: 8px;
}

@media (min-width: 320px) and (max-width: 575px){
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    width: 100%;
    padding: 10px 0;

    .details-card{
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 10px;
    }

    .stats{
        width: 20%;
        margin: 0;
    }

    .details-title{
        width: 20%;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 0;
    }
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