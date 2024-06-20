import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import './App.css';

function App() {

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div className='App'>
      {showNav && <NavBar />}
      <Home />
    </div>
  )
}

export default App
