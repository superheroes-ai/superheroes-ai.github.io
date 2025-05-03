import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container px-4 px-lg-5">
            <Link to="/play" className="navbar-brand">Play</Link>
        </div>
        </nav>
    </div>
  );
}

export default Navigation;