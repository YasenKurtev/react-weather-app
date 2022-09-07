import './App.css';
import Header from './components/Header';
import Container from './components/styles/Container.styles';
import GlobalStyles from './components/styles/Global';
import Main from './components/Main';
import Footer from './components/Footer';
import { SettingsProvider } from './components/contexts/settingsContext';
import { useState } from 'react';

function App() {
  let [data, setData] = useState();

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header data={data} setData={setData} />
        <SettingsProvider>
          <Main data={data} setData={setData} />
        </SettingsProvider>
        <Footer />
      </Container>
    </>
  );
}

export default App;
