import './App.css';
import Header from './components/Header';
import Container from './components/styles/Container.styles';
import GlobalStyles from './components/styles/Global';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeLight, themeDark } from "./utils/themes"
import useTheme from './hooks/useThemeHook';
import useUnits from './hooks/useUnitsHook';

function App() {
    let [data, setData] = useState();
    let [theme, changeTheme] = useTheme();
    let [units, changeUnits] = useUnits();

    return (
        <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
            <GlobalStyles />
            <Container>
                <Header props={{ data, setData, theme, changeTheme, units, changeUnits }} />
                <Main props={{ data, units }} />
                <Footer />
            </Container>
        </ThemeProvider>
    );
}

export default App;
