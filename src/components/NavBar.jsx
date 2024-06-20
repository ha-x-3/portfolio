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
					<a>HOME</a>
					<a>MY SKILLS</a>
					<a>MY WORK</a>
					<a>CONTACT</a>
				</div>
			</div>
			<div className={`navGradient ${showNav ? 'show' : ''}`}></div>
		</>
	);
}
