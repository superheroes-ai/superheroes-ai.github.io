import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamePlay from './Game/GamePlay';
import GameIntro from './Game/GameIntro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<GameIntro/>} />
        <Route path="/play" element={<GamePlay/>} />
      </Routes>
    </Router>
  );
}

export default App;