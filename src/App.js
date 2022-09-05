import './App.css';
import Header from './components/Header';
import Container from './components/styles/Container.styles';
import GlobalStyles from './components/styles/Global';
import Main from './components/Main';
import Footer from './components/Footer';
import { SettingsProvider } from './components/contexts/settingsContext';
import { useState } from 'react';

function App() {
  let [coords, setCoords] = useState({ lat: 0, lon: 0 });

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header setCoords={setCoords} />
        <SettingsProvider>
          <Main coords={coords} />
        </SettingsProvider>
        <Footer />
      </Container>
    </>
  );
}

export default App;
