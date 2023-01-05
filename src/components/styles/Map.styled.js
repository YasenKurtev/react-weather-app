import styled from "styled-components";

export let StyledMap = styled.div`
    color: ${props => props.theme.textColor};
    width: 70%;
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;

    .mapboxgl-control-container {
        display: none;
    }

    #map{
        height: 346px;
    }

    .marker{
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/390px-Map_marker.svg.png");
        background-size: cover;
        width: 30px;
        height: 45px;
        cursor: pointer;
    }

    .mapboxgl-popup-content{
        color: black;
        font-weight: 600;
        font-size: 0.6rem;
        padding: 10px 20px;
    }

    @media (min-width: 320px) and (max-width: 575px){
        width: 100%;
        height: 258.6px;

        #map{
            width: 100%;
            height: 239px;
        }
    }

    @media (min-width: 576px) and (max-width: 767px){
        width: 50%;
        height: 258.6px;

        #map{
            width: 100%;
            height: 238px;
        }
    }
    
    @media (min-width: 768px) and (max-width: 991px){
        width: 60%;
        height: 277.2px;

        #map{
            width: 100%;
            height: 257px;
        }
    }
    
    @media (min-width: 992px) and (max-width: 1199px){
        width: 63%;
        height: 296.8px;

        #map{
            width: 100%;
            height: 277px;
        }
    }
`