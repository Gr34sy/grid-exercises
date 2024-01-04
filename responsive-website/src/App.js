import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Wrapper } from './components/Wrapper';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header/>
        <Navbar/>
      </Wrapper>
    </div>
  );
}

export default App;
