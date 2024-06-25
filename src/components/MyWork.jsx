import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import weatherApp from '../assets/weatherApp.png';
import reactCalculator from '../assets/reactCalculator.png';
import odinToDoList from '../assets/odinToDoList.png';
import odinRestaurant from '../assets/odinRestaurant.png';
import quoteGenerator from '../assets/quoteGenerator.png';
import odinJSLibrary from '../assets/odinJSLibrary.png';
import adminDashboard from '../assets/odinAdminDash.png';
import odinCalculator from '../assets/odinCalculator.png';
import launchChecklist from '../assets/launchChecklist.png';
import etchASketch from '../assets/etchASketch.png';
import fccDrumMachine from '../assets/fccDrumMachine.png';
import rockPaperScissors from '../assets/rockPaperScissors.png';
import odinProductLanding from '../assets/odinProductLanding.png';
import familyBbqSurvey from '../assets/familyBbqSurvey.png';
import relax from '../assets/relax.png';
import technicalSOP from '../assets/technicalSOP.png';
import htmlMeSomething from '../assets/htmlMeSomething.png';
import tribute from '../assets/tribute.png';

const projects = [
	{
		id: 1,
		title: 'Weather App',
		description:
			"The Odin Project's JavaScript/API Weather App exercise. Uses JavaScript, DOM manipulation, fetch from Weather API, and JSON data manipulation.",
		image: weatherApp,
		link: 'https://ha-x-3.github.io/weather-api/',
	},
	{
		id: 2,
		title: 'To-Do List',
		description:
			"The Odin Project's Webpack/JavaScript To-Do List exercise. Uses JavaScript modules, OOP Principles, DOM manipulation, and webpack.",
		image: odinToDoList,
		link: 'https://ha-x-3.github.io/odin-todo-list/',
	},
	{
		id: 3,
		title: 'React Calculator',
		description:
			"Free Code Camp's React calculator exercise. Uses React, JavaScript, and Front End Libraries. Calculator displays and uses formula/expression logic.",
		image: reactCalculator,
		link: 'https://ha-x-3.github.io/fcc-react-calculator/',
	},
	{
		id: 4,
		title: 'Restaurant Page',
		description:
			"The Odin Project's Webpack/JavaScript Restaurant Page exercise. Uses JavaScript modules while also learning how to configure webpack.",
		image: odinRestaurant,
		link: 'https://ha-x-3.github.io/odin-restaurant-page/',
	},
	{
		id: 5,
		title: 'React Quote Generator',
		description:
			"Free Code Camp's React quote generator exercise. Uses Front End Libraries, fetching JSON, and JavaScript.",
		image: quoteGenerator,
		link: 'https://ha-x-3.github.io/quote-generator/',
	},
	{
		id: 6,
		title: 'Library Tracker',
		description:
			"The Odin Project's library tracker exercise. Uses HTML, CSS, and JavaScript.",
		image: odinJSLibrary,
		link: 'https://ha-x-3.github.io/odin-js-object-library/',
	},
	{
		id: 7,
		title: 'JavaScript Calculator',
		description:
			"The Odin Project's calculator exercise. Uses HTML, CSS, and Javascript. Calculator has clear, hard clear, backspace, and negative operator keys. Uses immediate execution logic.",
		image: odinCalculator,
		link: 'https://ha-x-3.github.io/odin-calculator/',
	},
	{
		id: 8,
		title: 'Launch Checklist',
		description:
			"LaunchCode's launch checklist exercise. Uses HTML, CSS, Javascript, fetch, forms, and validation.",
		image: launchChecklist,
		link: 'https://ha-x-3.github.io/launch-checklist/',
	},
	{
		id: 9,
		title: 'Admin Dashboard',
		description:
			"The Odin Project's admin dashboard exercise. Uses HTML, CSS Grid and Flex, and light SVG manipulation.",
		image: adminDashboard,
		link: 'https://ha-x-3.github.io/odin-admin-dashboard/',
	},
	{
		id: 10,
		title: 'Etch-A-Sketch',
		description:
			"The Odin Project's HTML, CSS, and JavaScript exercise making an Etch-A-Sketch. Equipped with color-picker or random color draw settings.",
		image: etchASketch,
		link: 'https://ha-x-3.github.io/etch-a-sketch/',
	},
	{
		id: 11,
		title: 'React Drum Machine',
		description:
			"Free Code Camp's React exercise making an Drum Machine. Project is part of the Front End Development Libraries certification.",
		image: fccDrumMachine,
		link: 'https://ha-x-3.github.io/fcc-drum-machine-react/',
	},
	{
		id: 12,
		title: 'Rock, Paper, Scissors Game',
		description:
			'HTML, CSS, and JavaScript practice by making a simple Rock, Paper, Scissors game. Has round tracking; first player to score 5 wins.',
		image: rockPaperScissors,
		link: 'https://ha-x-3.github.io/rock-paper-scissors/',
	},
	{
		id: 13,
		title: 'Product Landing Site',
		description:
			"HTML and CSS practice by making The Odin Project's product landing activity.",
		image: odinProductLanding,
		link: 'https://ha-x-3.github.io/odin-product-landing-page/',
	},
	{
		id: 14,
		title: "Stephen's Family BBQ Survey",
		description:
			'HTML, CSS, and forms/input elements practice. Survey is for evaluating a family barbeque.',
		image: familyBbqSurvey,
		link: 'https://ha-x-3.github.io/bbq-survey-form/',
	},
	{
		id: 15,
		title: 'Heinz Relax Product Landing Page',
		description:
			'HTML and CSS practice making a parody product landing page.',
		image: relax,
		link: 'https://ha-x-3.github.io/relax-product-landing-page/',
	},
	{
		id: 16,
		title: 'Tesing For Your Blood Type',
		description:
			'HTML and CSS practice making a technical SOP for manual blood type testing.',
		image: technicalSOP,
		link: 'https://ha-x-3.github.io/technical-documentation-sop/',
	},
	{
		id: 17,
		title: "LaunchCode's HTML Me Something",
		description:
			'HTML and CSS practice making a website detailing my home buying journey.',
		image: htmlMeSomething,
		link: 'https://ha-x-3.github.io/html-me-something/',
	},
	{
		id: 18,
		title: 'Tribute Site for John Williams',
		description:
			'HTML and CSS practice making a website in ode to John Williams.',
		image: tribute,
		link: 'https://ha-x-3.github.io/technical-documentation-sop/',
	},
];

const MyWork = () => {
	const [activeProject, setActiveProject] = useState(null);

	return (
		<div className='myWork' id='work'>
			<div className='workHeading'>
				<h1>MY PORTFOLIO</h1>
				<p>
					&lt; A GLANCE AT MY{' '}
					<span className='bold'>CAPABILITIES</span> &#8725;&gt;
				</p>
			</div>
			<div className='projectGrid'>
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						{...project}
						setActiveProject={setActiveProject}
						activeProject={activeProject}
					/>
				))}
			</div>
			<div className='repoLink'>
				<a href='https://github.com/ha-x-3?tab=repositories'>
					<div className='buttonBorder'>
						<div className='button'>SEE FULL LIBRARY</div>
					</div>
				</a>
			</div>
			
		</div>
	);
};

export default MyWork;
