import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Container from './components/styles/Container.styles';
import GlobalStyles from './components/styles/Global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </>
  );
}

export default App;
