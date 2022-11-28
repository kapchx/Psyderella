import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import OnBoarding from './pages/OnBoarding';

function App() {
  return (
    <>
      <div>Test React</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/onBoarding" element={<OnBoarding />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
