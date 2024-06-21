import React, { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MySkills from './components/MySkills';
import MyWork from './components/MyWork';
import './App.css';

function App() {

  const [showNav, setShowNav] = useState(false);
  const [startParallax, setStartParallax] = useState(false);
  const mySkillsRef = useRef(null);
  const myWorkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
		const scrollThreshold = window.innerHeight * 0.05;
		setShowNav(window.scrollY > scrollThreshold);

		if (myWorkRef.current && mySkillsRef.current) {
			const myWorkRect = myWorkRef.current.getBoundingClientRect();
			const mySkillsRect = mySkillsRef.current.getBoundingClientRect();
			const triggerPoint = window.innerHeight * 0.95; // 5% of viewport height from bottom

			setStartParallax(
				myWorkRect.top < triggerPoint && mySkillsRect.bottom > 0
			);
		}
	};

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
		<div className='App'>
			<NavBar showNav={showNav} />
			<Home />
			<MySkills
				ref={mySkillsRef}
				startParallax={startParallax}
			/>
			<MyWork ref={myWorkRef} />
		</div>
  );
}

export default App;
