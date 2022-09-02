import { useState } from "react";

export default function getCoordinates() {
    if (!localStorage.getItem('coordinates')) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            console.log("It's not supported by this browser.");
        }

        function showPosition(position) {
            localStorage.setItem('coordinates', JSON.stringify({ lat: position.coords.latitude, lng: position.coords.longitude }));
        }

        function showError(error) {
            localStorage.setItem('coordinates', JSON.stringify({ lat: 12, lng: 12 }));
        }
    }
}