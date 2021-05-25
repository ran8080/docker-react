import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the coolest animation. React logo is truly amazing.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          All good, no need to learn react today. Node.js is cooler ;)
        </a>
      </header>
    </div>
  );
}

export default App;
