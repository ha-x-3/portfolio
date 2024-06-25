import React from 'react';
import navLogo from '../assets/NavLogo.svg';
import '../App.css';

export default function NavBar({ showNav}) {
	return (
		<>
			<div className={`navBar ${showNav ? 'show' : ''}`}>
				<img
					src={navLogo}
					alt='Brittney Epperson <A phoenix who CODES/>'
				/>
				<div className='navLinks'>
					<a href='#home'>HOME</a>
					<a href='#skills'>MY SKILLS</a>
					<a href='#work'>MY WORK</a>
					<a href='#contact'>CONTACT</a>
				</div>
			</div>
			<div className={`navGradient ${showNav ? 'show' : ''}`}></div>
		</>
	);
}
