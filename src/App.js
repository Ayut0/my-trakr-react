import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { StyledApp } from './components/styles/App.styles';

function App() {
  return (
    <StyledApp>
        <Header />
        <Main />
    </StyledApp>
  );
}

export default App;
