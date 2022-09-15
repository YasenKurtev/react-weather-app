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
import useMyCities from './hooks/useMyCitiesHook';

function App() {
    let [data, setData] = useState();
    let [theme, changeTheme] = useTheme();
    let [units, changeUnits] = useUnits();
    let [myCities, addCity, removeCity] = useMyCities();

    return (
        <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
            <GlobalStyles theme={theme === 'light' ? themeLight : themeDark} />
            <Container>
                <Header props={{ data, setData, theme, changeTheme, units, changeUnits, myCities, removeCity }} />
                {/* <Main props={{ data, setData, units, myCities, addCity, removeCity }} /> */}
                {/* <Footer /> */}
            </Container>
        </ThemeProvider>
    );
}

export default App;
