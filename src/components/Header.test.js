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

test('units buttons functionality', () => {
    render(<App><Header /></App>);

    let units = localStorage.getItem('units');

    let celsiusButton = screen.getByRole('radio', { name: 'celsius' });
    let fahrenheitButton = screen.getByRole('radio', { name: 'fahrenheit' });

    if (units === 'celsius') {
        expect(celsiusButton.checked).toBe(true);
    } else if (units === 'fahrenheit') {
        expect(fahrenheitButton.checked).toBe(true);
    }
});