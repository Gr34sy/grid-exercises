import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Wrapper } from './components/Wrapper';
import { Tiles } from './components/Tiles';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header/>
        <Navbar/>
        <Tiles />
      </Wrapper>
    </div>
  );
}

export default App;
