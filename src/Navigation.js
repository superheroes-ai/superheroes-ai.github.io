import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container px-4 px-lg-5">
            <Link to="/play" class="navbar-brand">Play</Link>
        </div>
        </nav>
    </div>
  );
}

export default Navigation;