import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameEngine from './Game/GameEngine';
import GameStory from './Game/GameStory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<GameStory/>} />
        <Route path="/play" element={<GameEngine/>} />
      </Routes>
    </Router>
  );
}

export default App;