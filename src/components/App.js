import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home'; // ควรเป็น './Home' ถ้า Home.js อยู่ในโฟลเดอร์ components
import Invite from './bot'; // ควรเป็น './Invite'
import Support from './Support'; // ควรเป็น './Support'
import './App.css'; // ตรวจสอบว่าไฟล์ CSS นี้อยู่ในโฟลเดอร์ที่ถูกต้อง

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="https://discord.com/oauth2/authorize?client_id=1261274366721790006&permissions=1698730973068352&integration_type=0&scope=bot" target="_blank" rel="noopener noreferrer">Invite</a></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </nav>
        </header>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/invite" component={Invite} />
          <Route path="/support" component={Support} />
        </div>
        <footer className="App-footer">
          <p>Developer: pondsan1412</p>
          <p>made with love by pondsan1412</p>
          <div className="social-links">
            <a href="https://www.facebook.com/pondcomp" target="_blank" rel="noopener noreferrer">
              <img src="./assets/facebook-logo.png" alt="Facebook" />
            </a>
            <a href="https://github.com/pondsan1412" target="_blank" rel="noopener noreferrer">
              <img src="./assets/github-logo.png" alt="GitHub" />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
