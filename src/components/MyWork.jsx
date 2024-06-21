import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import weatherApp from '../assets/weatherApp.png';
import odinToDoList from '../assets/odinToDoList.png'
import odinRestaurant from '../assets/odinRestaurant.png'

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
