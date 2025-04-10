import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import Practices from './pages/Practices';
import Explanations from './pages/Explanations';

function App() {
  return (
    <div>
      <h1>Notes Website</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/subjects">Subjects</a></li>
          <li><a href="/practices">Practices</a></li>
          <li><a href="/explanations">Explanations</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/practices" element={<Practices />} />
        <Route path="/explanations" element={<Explanations />} />
      </Routes>
    </div>
  );
}

export default App;