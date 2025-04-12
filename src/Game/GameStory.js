import React, { useState } from 'react';
import Navigation from '../Navigation';

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
                          <h2>Doomsday Gambit</h2>
                          <span class="subheading">The fate of the world hangs in the balance... and you're the one trying to tip the scales towards destruction!
                          In this turn-based tactical game, step into the boots of a formidable villain. Face off against heroic defenders,
                          exploit their weaknesses, and unleash devastating abilities in your quest for global domination.</span> 
                      </div>
                  </div>
              </div>
          </div>
      </header>
    </div>

  );
}

export default GameStory;