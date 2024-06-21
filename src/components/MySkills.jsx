import React, { useEffect, useRef } from 'react';

const MySkills = React.forwardRef(({ startParallax }, ref) => {
	const backgroundRef = useRef(null);

	useEffect(() => {
		// Set initial background position
		if (backgroundRef.current) {
			backgroundRef.current.style.backgroundPosition =
				'left 75px top 10px';
		}

		const handleParallax = () => {
			if (startParallax && backgroundRef.current) {
				const scrolled = window.scrollY;
				const currentY = 165 - scrolled * 0.5; // Start at 165 and move up
				backgroundRef.current.style.backgroundPosition = `left 75px top ${currentY}px`;
			}
		};

		window.addEventListener('scroll', handleParallax);
		return () => window.removeEventListener('scroll', handleParallax);
	}, [startParallax]);

	return (
		<div
			className='mySkills'
			ref={ref}
		>
			<div
				className='parallaxBackground'
				ref={backgroundRef}
			>
				<div className='skillsContent'>
					<div className='skillsHeading'>
						<h1>MY EXPERIENCE</h1>
						<p>
							&lt; A LIFE AND TECHNICAL{' '}
							<span className='bold'>PERSPECTIVE</span>{' '}
							&#8725;&gt;
						</p>
					</div>
					<div className='skills'>
						<div className='hardSkills'>
							<h1>HARD SKILLS</h1>
							<ul>
								<li>HTML</li>
								<li>CSS</li>
								<li>JAVASCRIPT</li>
								<li>JAVA</li>
								<li>SQL</li>
								<li>VSCODE</li>
								<li>INTELLIJ</li>
								<li>MY SQL WORKBENCH</li>
								<li>REACT</li>
								<li>GIT & GITHUB</li>
								<li>LIGHT AUTOMATED TESTING</li>
							</ul>
						</div>
						<div className='softSkills'>
							<h1>SOFT SKILLS</h1>
							<ul>
								<li>QUICK AND CURIOUS LEARNER</li>
								<li>ATTENTION TO DETAIL</li>
								<li>EXCELLENT TIME MANAGEMENT</li>
								<li>GREAT COLLABORATION AND TEAMWORK</li>
								<li>RESILIENCE AND ADAPTABILITY</li>
								<li>ABILITY TO FOLLOW DETAILED INSTRUCTION</li>
								<li>GOOD JUDGEMENT SKILLS</li>
								<li>
									PRECISE DELIVERY IN HIGH STRESS, FAST-PACED
									ENVIRONMENT
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default MySkills;
