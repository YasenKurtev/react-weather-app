import './App.css';
import Header from './components/Header';
import Container from './components/styles/Container.styles';
import GlobalStyles from './components/styles/Global';
import Main from './components/Main';
import Footer from './components/Footer';
import { SettingsContext, SettingsProvider } from './components/contexts/settingsContext';
import { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeLight, themeDark } from "./utils/themes"
import useTheme from './hooks/useThemeHook';
import useUnits from './hooks/useUnitsHook';

function App() {
  let [data, setData] = useState();
  let [theme, changeTheme] = useTheme();
  let [units, changeUnits] = useUnits();

  return (
    <>
      <SettingsProvider>
        <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
          <GlobalStyles />
          <Container>
            <Header data={data} setData={setData} theme={theme} changeTheme={changeTheme} units={units} changeUnits={changeUnits} />
            <Main data={data} setData={setData} units={units} />
            <Footer />
          </Container>
        </ThemeProvider>
      </SettingsProvider>
    </>
  );
}

export default App;
