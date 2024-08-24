import logo from './logo.jpg'
import  './App.css';
import { getFullYear, getFooterCopy } from './utils.js';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>School dashboard</h1>
        <img src={logo} className="app-logo"  alt="logo" />
      </header>
      <div className="App-body">
      <p>Login to access the full dashboard</p>
    </div>
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </footer>
  </div>
  );
}
