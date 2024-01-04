import './styles/main.scss';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Wrapper } from './components/Wrapper';
import { Tiles } from './components/Tiles';
import { Featured } from './components/Featured';
import { Gallery } from './components/Featured';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header/>
        <Navbar/>
        <Tiles/>
        <Featured/>
        <Gallery/>
      </Wrapper>
    </div>
  );
}

export default App;
