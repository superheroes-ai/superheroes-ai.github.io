import React from 'react';
import Navigation from '../Navigation';
import gameData from './Stories/Game';

function GameIntro() {
const headerStyle = {
    backgroundImage: "url('background.png')"
    };

  return (
    <div>
      <Navigation />

      <header className="masthead" style={headerStyle}>
          <div className="container position-relative px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="col-md-10 col-lg-8 col-xl-7">
                      <div className="page-heading">
                          <h2>{gameData.title}</h2>
                          <span className="subheading">{gameData.introduction}</span> 
                      </div>
                  </div>
              </div>
          </div>
      </header>
    </div>

  );
}

export default GameIntro;