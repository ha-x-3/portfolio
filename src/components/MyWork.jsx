import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import weatherApp from '../assets/weatherApp.png';
import odinToDoList from '../assets/odinToDoList.png';
import odinRestaurant from '../assets/odinRestaurant.png';
import quoteGenerator from '../assets/quoteGenerator.png';
import odinJSLibrary from '../assets/odinJSLibrary.png';
import adminDashboard from '../assets/odinAdminDash.png';
import odinCalculator from '../assets/odinCalculator.png';
import launchChecklist from '../assets/launchChecklist.png';
import etchASketch from '../assets/etchASketch.png';

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
		title: 'Restaurant Page',
		description:
			"The Odin Project's Webpack/JavaScript Restaurant Page exercise. Uses JavaScript modules while also learning how to configure webpack.",
		image: odinRestaurant,
		link: 'https://ha-x-3.github.io/odin-restaurant-page/',
	},
	{
		id: 4,
		title: 'React Quote Generator',
		description:
			"Free Code Camp's React quote generator exercise. Uses Front End Libraries, fetching JSON, and JavaScript.",
		image: quoteGenerator,
		link: 'https://ha-x-3.github.io/quote-generator/',
	},
	{
		id: 5,
		title: 'Library Tracker',
		description:
			"The Odin Project's library tracker exercise. Uses HTML, CSS, and JavaScript.",
		image: odinJSLibrary,
		link: 'https://ha-x-3.github.io/odin-js-object-library/',
	},
	{
		id: 6,
		title: 'Admin Dashboard',
		description:
			"The Odin Project's admin dashboard exercise. Uses HTML, CSS Grid and Flex, and light SVG manipulation.",
		image: adminDashboard,
		link: 'https://ha-x-3.github.io/odin-admin-dashboard/',
	},
	{
		id: 7,
		title: 'JavaScript Calculator',
		description:
			"The Odin Project's calculator exercise. Uses HTML, CSS, and Javascript. Calculator has clear, hard clear, backspace, and negative operator keys.",
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
		title: 'Etch-A-Sketch',
		description:
			"The Odin Project's HTML, CSS, and JavaScript exercise making an Etch-A-Sketch. Equipped with color-picker or random color draw settings.",
		image: etchASketch,
		link: 'https://ha-x-3.github.io/etch-a-sketch/',
	},
];

const MyWork = () => {
	const [activeProject, setActiveProject] = useState(null);

	return (
		<div className='myWork'>
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
		</div>
	);
};

export default MyWork;
