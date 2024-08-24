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
      <label htmlFor="email" onClick={() => {
        document.getElementById('email').focus();
      }}>Email</label>
      <input type="email" id="email" />
      <label htmlFor="password" onClick={() => 
        document.getElementById('password').focus()
      }>Password</label>
      <input type="password" id="password" />
      <button>OK</button>
    </div>
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </footer>
  </div>
  );
}
