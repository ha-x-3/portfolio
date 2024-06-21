import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MySkills from './components/MySkills';
import MyWork from './components/MyWork';
import './App.css';

function App() {

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const scrollThreshold = window.innerHeight * 0.05;

      if (window.scrollY > scrollThreshold) {
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
       <NavBar showNav={showNav}/>
      <Home />
      <MySkills />
      <MyWork />
    </div>
  )
}

export default App;
