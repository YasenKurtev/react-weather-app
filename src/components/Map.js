import { StyledMap } from "./styles/Map.styled"
import mapboxgl from "mapbox-gl";
import { useRef, useEffect } from 'react';

mapboxgl.accessToken = process.env.REACT_APP_MAP_KEY_APPID;

let Map = ({ coordinates }) => {

    //Initialize map for current city
    let script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB_RAPuOtRKWJy2mC4Za7tn-gtzlXAjJro&callback=initMap";
    script.async = true;

    const map = useRef(null);
    let coords = { lng: coordinates.lon, lat: coordinates.lat };

    useEffect(() => {
        if (map.current) return; //Initialize map only once
        map.current = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [coords.lng, coords.lat],
            zoom: 11
        });
    }, [coords.lat, coords.lng]);

    return (
        <StyledMap>
            <section className="map-box-container">
                <div id="map"></div>
            </section>
        </StyledMap>
    )
}

export default Map;