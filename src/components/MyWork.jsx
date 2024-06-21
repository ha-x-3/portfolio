import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import weatherApp from '../assets/weatherApp.png';
import odinToDoList from '../assets/odinToDoList.png';
import odinRestaurant from '../assets/odinRestaurant.png';
import quoteGenerator from '../assets/quoteGenerator.png';
import odinJSLibrary from '../assets/odinJSLibrary.png';
import adminDashboard from '../assets/odinAdminDash.png';

const projects = [
	{
		id: 1,
		title: 'Weather App',
		description:
			"The Odin Project's JavaScript/API Weather App exercise. Uses JavaScript, DOM manipulation, fetch from Weather API, and JSON data manipulation.",
		image: weatherApp,
	},
	{
		id: 2,
		title: 'To-Do List',
		description:
			"The Odin Project's Webpack/JavaScript To-Do List exercise. Uses JavaScript modules, OOP Principles, DOM manipulation, and webpack.",
		image: odinToDoList,
	},
	{
		id: 3,
		title: 'Restaurant Page',
		description:
			"The Odin Project's Webpack/JavaScript Restaurant Page exercise. Uses JavaScript modules while also learning how to configure webpack.",
		image: odinRestaurant,
	},
	{
		id: 4,
		title: 'React Quote Generator',
		description:
			"Free Code Camp's React quote generator exercise. Uses Front End Libraries, fetching JSON, and JavaScript.",
		image: quoteGenerator,
	},
	{
		id: 5,
		title: 'Library Tracker',
		description:
			"The Odin Project's library tracker exercise. Uses HTML, CSS, and JavaScript.",
		image: odinJSLibrary,
	},
	{
		id: 6,
		title: 'Admin Dashboard',
		description:
			"The Odin Project's admin dashboard exercise. Uses HTML, CSS Grid and Flex, and light SVG manipulation.",
		image: adminDashboard,
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
