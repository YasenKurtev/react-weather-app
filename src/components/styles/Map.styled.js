import styled from "styled-components";

export let StyledMap = styled.div`
    color: ${props => props.theme.textColor};
    width: 70%;
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 10px;
    overflow: hidden;
    // padding: 10px 10px 6px 10px;

    .mapboxgl-control-container {
        display: none;
    }

    #map{
        height: 346px;
        border-radius: 10px;
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
        // padding: 10px 0;

        #map{
            display: flex;
            width: 100%;
            height: 258px;

            // padding-left: 3.4%;
            // width: 90%;
        }
    }

    @media (min-width: 576px) and (max-width: 767px){
        width: 50%;
        height: 258.6px;
        // padding: 10px 0;

        #map{
            display: flex;
            width: 100%;
            height: 258px;

            // padding-left: 3.4%;
            // width: 90%;
        }
    }
    
    @media (min-width: 768px) and (max-width: 991px){
        width: 60%;
        height: 277.2px;
        // padding: 10px 0;

        #map{
            display: flex;
            width: 100%;
            height: 277px;

            // padding-left: 3.4%;
            // width: 90%;
        }
    }
    
    @media (min-width: 992px) and (max-width: 1199px){
        width: 63%;
        height: 296.8px;
        // padding: 10px 0;

        #map{
            display: flex;
            width: 100%;
            height: 296px;
            
            // padding-left: 3.4%;
            // width: 90%;
        }
    }
`