import React from 'react';
import navLogo from '../assets/NavLogo.svg';
import '../App.css';

export default function NavBar({ showNav}) {
	return (
		<>
			<div className={`navBar ${showNav ? 'show' : ''}`}>
				<div className='navContent'>
					<img
						src={navLogo}
						alt='Brittney Epperson <A phoenix who CODES/>'
						id='navLogoImage'
					/>
					<div className='navLinks'>
						<a
							href='#home'
							className='navLink'
						>
							HOME
						</a>
						<a
							href='#skills-padding'
							className='navLink'
						>
							MY SKILLS
						</a>
						<a
							href='#work-padding'
							className='navLink'
						>
							MY WORK
						</a>
						<a
							href='#contact'
							className='navLink'
						>
							CONTACT
						</a>
					</div>
				</div>
			</div>
			<div className={`navGradient ${showNav ? 'show' : ''}`}></div>
		</>
	);
}
