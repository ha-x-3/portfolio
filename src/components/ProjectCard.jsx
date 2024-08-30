import React, { useRef, useEffect } from 'react';

const ProjectCard = ({
	id,
	title,
	description,
	image,
    link,
	setActiveProject,
	activeProject,
}) => {
	const ref = useRef(null);

	useEffect(() => {
		const options = {
			threshold: 0.6,
			rootMargin: '-30% 0px -30% 0px',
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveProject(id);
				}
			});
		}, options);

		const mobileCheck = () => {
			if (window.innerWidth < 768) {
				if (ref.current) observer.observe(ref.current);
			} else {
				if (ref.current) observer.unobserve(ref.current);
			}
		};

		window.addEventListener('resize', mobileCheck);
		mobileCheck();

		return () => {
			if (ref.current) observer.unobserve(ref.current);
			window.removeEventListener('resize', mobileCheck);
		};
	}, [id, setActiveProject]);

	return (
		<div
			ref={ref}
			className={`projectCard ${activeProject === id ? 'active' : ''}`}
		>
			<a
				href={link}
				target='_blank'
				rel='noopener noreferrer'
			>
				<img
					src={image}
					alt={title}
				/>
				<div className='projectInfo'>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</a>
		</div>
	);
};

export default ProjectCard;
