import styled from "styled-components";

export let StyledMap = styled.div`
    color: ${props => props.theme.textColor};
    width: 70%;
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 10px;
    padding: 10px 10px 6px 10px;

    .mapboxgl-control-container {
        display: none;
    }

    #map{
        height: 10.3rem;
        border-radius: 10px;
    }

    @media (min-width: 320px) and (max-width: 575px){
        width: 100%;
        height: 10.7rem;
        padding: 10px 0;

        #map{
            display: flex;
            padding-left: 3.5%;
            width: 90%;
            height: 10.7rem;
        }
    }

    @media (min-width: 576px) and (max-width: 767px){
        width: 100%;
        height: 10.7rem;
        padding: 10px 0;

        #map{
            display: flex;
            padding-left: 3.5%;
            width: 90%;
            height: 10.7rem;
        }
    }
    
    @media (min-width: 768px) and (max-width: 991px){
        width: 65%;
        height: 10.7rem;
        padding: 10px 0;

        #map{
            display: flex;
            padding-left: 3.5%;
            width: 90%;
            height: 10.7rem;
        }
    }
    
    @media (min-width: 992px) and (max-width: 1199px){
        width: 65%;
        height: 10.7rem;
        padding: 10px 0;

        #map{
            display: flex;
            padding-left: 3.5%;
            width: 90%;
            height: 10.7rem;
        }
    }
`