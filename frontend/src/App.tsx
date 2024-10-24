import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Info from './pages/Info/Info';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/info" element={<Info />} />
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
