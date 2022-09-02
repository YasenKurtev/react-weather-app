import styled from "styled-components";

export let StyledMap = styled.div`
    color: #f9fafa;
    width: 70%;
    background-color: rgb(255, 255, 255, 0.3);
    border-radius: 10px;
    padding: 10px 10px 6px 10px;

    .mapboxgl-control-container {
        display: none;
    }

    #map{
        height: 265px;
        border-radius: 10px;
    }
`