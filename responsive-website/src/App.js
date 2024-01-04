import { Navbar } from './components/Navbar';
import { Wrapper } from './components/Wrapper';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
      </Wrapper>
    </div>
  );
}

export default App;
