import { StyledMap } from "./styles/Map.styled"
import mapboxgl from "mapbox-gl";
import { useRef, useEffect, useState } from 'react';

mapboxgl.accessToken = "pk.eyJ1IjoieWFzZW4xMCIsImEiOiJjbDdqbDFvMzIwdGNhM3ZycDhwMjYyZ2ZuIn0.flthnfiYxf8XRCrTEOVAbw"

let Map = ({ coordinates }) => {

    let script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB_RAPuOtRKWJy2mC4Za7tn-gtzlXAjJro&callback=initMap";
    script.async = true;

    const map = useRef(null);
    let coords = { lng: coordinates.lon, lat: coordinates.lat };

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [coords.lng, coords.lat],
            zoom: 11
        });
    }, [coords]);

    return (
        <StyledMap>
            <div id="map"></div>
        </StyledMap>
    )
}

export default Map