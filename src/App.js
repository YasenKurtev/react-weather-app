import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Container from './components/styles/Container.styles';
import GlobalStyles from './components/styles/Global';
import Main from './components/Main';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main />
      </Container>
    </>
  );
}

export default App;
