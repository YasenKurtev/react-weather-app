# 🌦️ React Weather App

A weather app for displaying daily and weekly weather for a current city.

## 💻 Used technologies and libraries

- ReactJS
- HTML
- CSS
- Styled Components
- Font Awesome Icons
- OpenWeatherMap API
- Mapbox GL JS

## ⚙️ Functionality

- Search city by name
- Search city by location / Geolocation API
- Light and Dark mode
- Celsius and Fahrenheit units
- Store favorite cities (you can store up to 3 cities)
- Set default city
- View city on the map
- Daily weather forecast
- Hourly weather forecast
- 5-day weather forecast

## 🌐 Live Demo

You can view a live demo of the app here:<br/>
--> <a href="https://yasenkurtev.github.io/react-weather-app/">React Weather App</a><br/>

## 🛠️ App setup

Install all dependencies with `npm install`

The app uses OpenWeatherMap and Mapbox. In order to start the project, you are going to need access keys for both.<br/>
You can create an account and get your key here:<br/>
<a href="https://www.mapbox.com/">OpenWeatherMap</a><br/>
<a href="https://openweathermap.org/">Mapbox</a>

Create a file called .env in the root directory of the project and add the following code in the file:
```
REACT_APP_API_KEY_APPID='your-OpenWeatherMap-key'

REACT_APP_MAP_KEY_APPID='your-Mapbox-key'
```

## Screenshots
#### Dark mode
<img src="screenshots/dark-mode.png" alt="dark-mode-screenshot">

#### Light mode
<img src="screenshots/light-mode.png" alt="light-mode-screenshot">

#### My cities list
<img src="screenshots/my-cities-list-view.png" alt="light-mode-screenshot">

#### Mobile view
<p float="left">
  <img src="screenshots/mobile-view-1.png" alt="light-mode-screenshot" width="33%">
  <img src="screenshots/mobile-view-2.png" alt="light-mode-screenshot" width="33%">
  <img src="screenshots/mobile-view-3.png" alt="light-mode-screenshot" width="33%">
</p>

#### Loading view, Fetch error view, My cities loading view, Max stored cities error view
<p float="left">
  <img src="screenshots/loading-view.png" alt="light-mode-screenshot" width="49.5%">
  <img src="screenshots/error-view.png" alt="light-mode-screenshot" width="49.5%">
</p>
<p float="left">
  <img src="screenshots/my-cities-loading-view.png" alt="light-mode-screenshot" width="49.5%">
  <img src="screenshots/max-cities-error-view.png" alt="light-mode-screenshot" width="49.5%">
</p>
