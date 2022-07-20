import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Service from './pages/Service'
import Gallery from './pages/Gallery'
import Clinic from './pages/Clinic'
import Contact from './pages/Contact'
import Buy from './pages/Buy'
import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/clinic" element={<Clinic/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/buy" element={<Buy/>}/>
    </Routes>
    </div>
  );
}

export default App;
