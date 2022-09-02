import { StyledMap } from "./styles/Map.styled"

let Map = () => {

    let script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB_RAPuOtRKWJy2mC4Za7tn-gtzlXAjJro&callback=initMap";
    script.async = true;

    function initMap(){
        let plovdiv = {lat: 42.15, lng: 24.75};
        let map = new google.maps.Map()
    }

    return (
        <StyledMap>
            <div id="map"></div>
            <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_RAPuOtRKWJy2mC4Za7tn-gtzlXAjJro&callback=initMap">
            </script>
        </StyledMap>
    )
}

export default Map