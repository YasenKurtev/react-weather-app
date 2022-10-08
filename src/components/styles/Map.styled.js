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
        height: 330px;
        border-radius: 10px;
    }

    @media (min-width: 320px) and (max-width: 575px){
        width: 100%;
        height: 258.6px;
        padding: 10px 0;

        #map{
            display: flex;
            padding-left: 3.5%;
            width: 90%;
            height: 258px;
        }
    }

    @media (min-width: 576px) and (max-width: 767px){
        width: 50%;
        height: 258.6px;
        padding: 10px 0;

        #map{
            display: flex;
            padding-left: 3.5%;
            width: 90%;
            height: 258px;
        }
    }
    
    @media (min-width: 768px) and (max-width: 991px){
        width: 60%;
        height: 277.2px;
        padding: 10px 0;

        #map{
            display: flex;
            padding-left: 3.5%;
            width: 90%;
            height: 277px;
        }
    }
    
    @media (min-width: 992px) and (max-width: 1199px){
        width: 63%;
        height: 296.8px;
        padding: 10px 0;

        #map{
            display: flex;
            padding-left: 3.5%;
            width: 90%;
            height: 296px;
        }
    }
`