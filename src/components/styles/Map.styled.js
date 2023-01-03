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
        background-image: url('https://png2.cleanpng.com/sh/f47efe90d45fabd268e03674252ec487/L0KzQYm3VMA2N5D9iZH0aYP2gLBuTfdwd5hxfZ92YYCwfbLyhgIub5D0f95uLX3kgMS0gB9ueKZ5feQ2aXPyfsS0jfFxNZR0Rd9qcD3wccPyhgIuPZJoTqY9NnPoc4O6VMEvPGQ2SqUAOUm0RYO5WcQ0OGk5UagCMj7zfri=/kisspng-google-map-maker-google-maps-computer-icons-map-co-map-marker-5ac6446cec2341.4312359915229430849672.png');
        background-size: cover;
        width: 40px;
        height: 40px;
        cursor: pointer;
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