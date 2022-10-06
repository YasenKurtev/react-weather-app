import { render, screen } from '@testing-library/react';
import Header from './Header.js';
import App from '../App.js';

test('Renders Header component', () => {
    render(<App><Header /></App>);

    let appTitleElement = screen.getByText('WeatherApp');
    expect(appTitleElement).toBeInTheDocument();

    let locationButton = screen.getByText('Get location');
    expect(locationButton).toBeInTheDocument();

    let myCitiesButton = screen.getByText('My cities');
    expect(myCitiesButton).toBeInTheDocument();

    let searchForm = screen.getByPlaceholderText('Search for a city...');
    expect(searchForm).toBeInTheDocument();

    let unitsButtons = screen.getByText('Units');
    expect(unitsButtons).toBeInTheDocument();

    let themeButtons = screen.getByText('Dark mode');
    expect(themeButtons).toBeInTheDocument();
});