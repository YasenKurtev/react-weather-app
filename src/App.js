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
    //Search data state
    let [data, setData] = useState();
    //Get theme
    let [theme, changeTheme] = useTheme();
    //Get units
    let [units, changeUnits] = useUnits();
    //Get My cities
    let [myCities, addCity, removeCity] = useMyCities();
    //My cities modal state
    let [openModal, setOpenModal] = useState(false);
    //Notification modal state
    let [notification, setNotification] = useState({ type: 'fetch', city: null });

    return (
        <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
            <GlobalStyles theme={theme === 'light' ? themeLight : themeDark} />
            <Container>
                <Header props={{ data, setData, theme, changeTheme, units, changeUnits, myCities, removeCity, setOpenModal, setNotification }} />
                <Main props={{ data, setData, units, myCities, addCity, removeCity, openModal, setOpenModal, notification, setNotification }} />
                <Footer />
            </Container>
        </ThemeProvider>
    );
}

export default App;
