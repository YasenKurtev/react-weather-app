import './App.css';
import Header from './components/Header';
import Container from './components/styles/Container.styles';
import GlobalStyles from './components/styles/Global';
import Main from './components/Main';
import Footer from './components/Footer';
import { SettingsProvider } from './components/contexts/settingsContext';

function App() {

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <SettingsProvider>
          <Main />
        </SettingsProvider>
        <Footer />
      </Container>
    </>
  );
}

export default App;
