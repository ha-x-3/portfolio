import React from 'react';
import navLogo from '../assets/NavLogoWhite.svg';

export default function Contact() {
	return (
		<div className='contact'>
			<div className='contactContent'>
				<div className='contactHeading'>
					<h1>LET'S CONNECT</h1>
					<p>
						&lt; SIMPLY CHOOSE A{' '}
						<span className='bold'>PLATFORM</span> &#8725;&gt;
					</p>
				</div>
				<div className='contactLinks'>
					<a
						href='https://github.com/ha-x-3'
						target='_blank'
						className='contactDetail'
					>
						<i className='fa-brands fa-github-square'></i> Git hub
					</a>
					<a
						href='https://www.linkedin.com/in/brittney-epperson/'
						target='_blank'
						className='contactDetail'
					>
						<i className='fa-brands fa-linkedin'></i> Linked in
					</a>
					<a
						href='https://www.freecodecamp.org/Beppers87'
						target='_blank'
						className='contactDetail'
					>
						<i className='fa-brands fa-free-code-camp'></i>{' '}
						free Code Camp
					</a>
					<a
						href='https://www.facebook.com/brittney.epperson'
						target='_blank'
						className='contactDetail'
					>
						<i className='fa-brands fa-facebook-square'></i>{' '}
						Facebook
					</a>
					<a
						href='mailto:beppers87@hotmail.com'
						target='_blank'
						className='contactDetail'
					>
						<i className='fas fa-at'></i> Beppers87@hotmail.com
					</a>
				</div>
				<div className='footer'>
					<img
						src={navLogo}
						alt='Brittney Epperson // A Phoenix who CODES'
                        className='footerLogo'
					></img>
					<p>
						{' '}
						// BRITTNEYEPPERSON.COM //
						<span className='bold'> &#169;2024</span>
					</p>
				</div>
			</div>
		</div>
	);
}
