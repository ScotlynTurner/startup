import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
 
export default function App() {
  return (
    <div>
    <header className="container-fluid">
      <h1 className='title'>Space Adventure<div className="planetEmoji"></div></h1>
      <nav className="navbar fixed-top navbar-dark">
          <menu className="navbar-nav">
              <li className="nav-item" style="display: none"><a href="home.html">Home</a></li>
              <li className="nav-item" style="display: none"><a href="achievements.html">Achievements</a></li>
              <li className="nav-item" style="display: none"><a href="friends.html">Friends</a></li>
          </menu>
      </nav>
      <hr/>
    </header>
    
    <main>App components go here</main>

    <footer className="bg-dark text-white-50">
      <div className="container-fluid">
          <span className="text-reset">Author Name(s)</span>
          <a className="text-reset" href="https://github.com/ScotlynTurner/startup.git">Source</a>
      </div>
    </footer>
    </div>
  );
}