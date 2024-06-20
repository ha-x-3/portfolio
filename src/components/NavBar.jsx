import React from 'react';
import navLogo from '../assets/NavLogo.png';
import '../App.css';

export default function NavBar() {
	return (
		<>
			<div className='navBar'>
				<img
					src={navLogo}
					alt='Brittney Epperson <A phoenix who CODES/>'
				/>
				<div className='navLinks'>
					<a>HOME</a>
					<a>MY SKILLS</a>
					<a>MY WORK</a>
					<a>CONTACT</a>
				</div>
			</div>
			<div className='navGradient'></div>
		</>
	);
}
