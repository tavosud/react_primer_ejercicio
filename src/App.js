import logo from './logo.svg';
import './App.css';
import ComponentA from './components/componentA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentA />
      </header>
    </div>
  );
}

export default App;
