import logo from './logo.jpg'
import  './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>School dashboard</h1>
        <img src={logo} className="app-logo"  alt="logo" />
      </header>

    <body className="App-body">
      <p>Login to access the full dashboard</p>
    </body>
    <footer className="App-footer">
      <p>Copyright 2020 - holberton School</p>
    </footer>
    </div>
  );
}
