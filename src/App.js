import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Invite from './components/bot';
import Support from './components/Support';
import Donate from './components/Donate';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">หน้าแรก</Link></li>
              <li><Link to="/support">บริจาค</Link></li>
              <li><Link to="/donate-list">รายชื่อผู้บริจาค</Link></li>
              <li><Link to="https://top.gg/bot/1261274366721790006">เชิญผ่านTop.gg</Link></li>
              <li><Link to="https://discord.gg/a5SMQkk2">ดิสคอร์ดของเรา</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invite" element={<Invite />} />
            <Route path="/support" element={<Support />} />
            <Route path="/donate-list" element={<Donate />}/>
            
          </Routes>
        </main>
        <footer className="App-footer">
          <p>Developer: pondsan1412</p>
          <p>สมทบทุนจ่ายค่าไฟ คลิกที่ปุ่ม donate ด้านบน</p>
          <div className="social-links">
            <a href="https://www.facebook.com/pondcomp" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Facebook" />
            </a>
            <a href="https://github.com/pondsan1412" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
