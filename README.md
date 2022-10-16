# 🌦️ React Weather App

A weather app which displays daily and weekly weather for a current city.

## 💻 Used technologies and libraries

- ReactJS
- HTML
- CSS
- Styled Components
- Font Awesome Icons
- Open Weather Map API
- Mapbox GL JS

## ⚙️ Functionality

- Search city by name
- Search city by location / Geolocation API
- Toggle between light and dark theme
- Toggle between celsius and fahrenheit temperature units
- Store favorite cities (you can store up to 3 cities)
- Set default city
- View city on the map
- Daily weather forecast
- Hourly weather forecast
- 5-day weather forecast

The app uses local storage to save user preferences, such as theme, units, favorite cities and default city.

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
#### Dark theme
<img src="screenshots/dark-mode.png" alt="dark-theme-screenshot">

#### Light theme
<img src="screenshots/light-mode.png" alt="light-theme-screenshot">

#### My cities list
<img src="screenshots/my-cities-list-view.png" alt="my-cities-list-screenshot">

#### Mobile view
<p float="left">
  <img src="screenshots/mobile-view-1.png" alt="mobile-view-screenshot" width="32.9%">
  <img src="screenshots/mobile-view-2.png" alt="mobile-view-screenshot" width="32.9%">
  <img src="screenshots/mobile-view-3.png" alt="mobile-view-screenshot" width="32.9%">
</p>

#### Loading view, Fetch error view, My cities loading view, Max stored cities error view
<p float="left">
  <img src="screenshots/loading-view.png" alt="loading-view-screenshot" width="49.5%">
  <img src="screenshots/error-view.png" alt="error-view-screenshot" width="49.5%">
</p>
<p float="left">
  <img src="screenshots/my-cities-loading-view.png" alt="my-cities-loading-view-screenshot" width="49.5%">
  <img src="screenshots/max-cities-error-view.png" alt="max-cities-error-view-screenshot" width="49.5%">
</p>

## 📬 Feedback
Thank you for viewing my project!<br/>
If you have any questions, comments or you come across some bugs, please contact me through the contact info in my profile.<br/>
Any feedback is highly appreciated! 🙂
