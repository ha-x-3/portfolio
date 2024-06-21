import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
	{
		id: 1,
		title: 'Project 1',
		description: 'Short description of Project 1',
		image: '../assets/NavLogo.svg',
	},
	{
		id: 2,
		title: 'Project 2',
		description: 'Short description of Project 2',
		image: '../assets/NavLogo.svg',
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
