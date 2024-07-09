import React, { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MySkills from './components/MySkills';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import './App.css';

function App() {
	const [showNav, setShowNav] = useState(false);
	const [startParallaxSkills, setStartParallaxSkills] = useState(false);
	const [startParallaxContact, setStartParallaxContact] = useState(false);
	const [homeInView, setHomeInView] = useState(true);
	const mySkillsRef = useRef(null);
	const contactRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollThreshold = window.innerHeight * 0.05;
			setShowNav(window.scrollY > scrollThreshold);

			if (mySkillsRef.current) {
				const mySkillsRect =
					mySkillsRef.current.getBoundingClientRect();
				const triggerPoint = window.innerHeight * 0.6; // 60% of viewport height

				setStartParallaxSkills(mySkillsRect.top < triggerPoint);
			}

			if (contactRef.current) {
				const contactRect = contactRef.current.getBoundingClientRect();
				const triggerPoint = window.innerHeight * 0.99; // 99% of viewport height

				setStartParallaxContact(contactRect.top < triggerPoint);
			}

			// Check if Home is in view
			setHomeInView(window.scrollY < window.innerHeight);
		};

		const handleMouseMove = (e) => {
			const hoverThreshold = 50; // 50px from the top of the viewport
			if (homeInView) {
				setShowNav(e.clientY < hoverThreshold);
			}
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [homeInView]);

	return (
		<div className='App'>
			<NavBar showNav={showNav} />
			<Home />
			<div
				id='skills-padding'
				style={{ paddingTop: '75px', marginTop: '-75px' }}
			></div>
			<MySkills
				ref={mySkillsRef}
				startParallax={startParallaxSkills}
			/>
			<div
				id='work-padding'
				style={{ paddingTop: '75px', marginTop: '-75px' }}
			></div>
			<MyWork />
			<Contact
				ref={contactRef}
				startParallax={startParallaxContact}
			/>
		</div>
	);
}

export default App;
