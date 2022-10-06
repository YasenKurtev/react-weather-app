import { render, screen } from '@testing-library/react';
import Header from './Header.js';
import App from '../App.js';

describe('Header component', () => {
    test('renders app title', () => {
        render(<App><Header /></App>);

        let appTitleElement = screen.getByText('WeatherApp');
        expect(appTitleElement).toBeInTheDocument();
    })
})