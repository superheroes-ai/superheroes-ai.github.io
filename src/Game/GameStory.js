import React from 'react';
import Navigation from '../Navigation';
import gameData from './GameData';

function GameStory() {
const headerStyle = {
    backgroundImage: "url('background.png')"
    };

  return (
    <div>
      <Navigation />

      <header class="masthead" style={headerStyle}>
          <div class="container position-relative px-4 px-lg-5">
              <div class="row gx-4 gx-lg-5 justify-content-center">
                  <div class="col-md-10 col-lg-8 col-xl-7">
                      <div class="page-heading">
                          <h2>{gameData.title}</h2>
                          <span class="subheading">{gameData.introduction}</span> 
                      </div>
                  </div>
              </div>
          </div>
      </header>
    </div>

  );
}

export default GameStory;