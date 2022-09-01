import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Container from './components/styles/Container.styles';
import GlobalStyles from './components/styles/Global';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  );
}

export default App;
