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
        height: 265px;
        border-radius: 10px;
    }
`