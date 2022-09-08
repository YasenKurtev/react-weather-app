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

function App() {
  let [data, setData] = useState();
  let [theme, changeTheme] = useTheme();

  return (
    <>
      <SettingsProvider>
        <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
          <GlobalStyles />
          <Container>
            <Header data={data} setData={setData} theme={theme} changeTheme={changeTheme} />
            <Main data={data} setData={setData} />
            <Footer />
          </Container>
        </ThemeProvider>
      </SettingsProvider>
    </>
  );
}

export default App;
