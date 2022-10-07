import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header.js';
import TodayCard from './TodayCard.js';
import Main from './Main.js'
import App from '../App.js';
import userEvent from '@testing-library/user-event';

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

describe('units buttons functionality', () => {
    test('celsius button functionality', () => {
        render(<App><Header /></App>);

        userEvent.click(screen.getByRole('radio', { name: 'celsius' }));

        expect(localStorage.getItem('units')).toBe('celsius');
    });

    test('fahrenheit button functionality', () => {
        render(<App><Header /></App>);

        userEvent.click(screen.getByRole('radio', { name: 'fahrenheit' }));

        expect(localStorage.getItem('units')).toBe('fahrenheit');
    });
});

describe('theme buttons functionality', () => {
    test('light button functionality', () => {
        render(<App><Header /></App>);

        userEvent.click(screen.getByRole('radio', { name: 'light' }));

        expect(localStorage.getItem('theme')).toBe('light');
    });

    test('dark button functionality', () => {
        render(<App><Header /></App>);

        userEvent.click(screen.getByRole('radio', { name: 'dark' }));

        expect(localStorage.getItem('theme')).toBe('dark');
    });
});

test('clear button functionality', () => {
    render(<App><Header /></App>);

    fireEvent.change(screen.getByPlaceholderText('Search for a city...'), { target: { value: 'Plovdiv' } });
    userEvent.click(screen.getByRole('button', { name: 'clear' }));
    expect(screen.getByPlaceholderText('Search for a city...').value).toBe('');
});

test('search button functionality', () => {
    render(<App><Header /></App>);

    fireEvent.change(screen.getByPlaceholderText('Search for a city...'), { target: { value: 'Plovdiv' } });
    expect(screen.getByPlaceholderText('Search for a city...').value).toBe('Plovdiv');
})