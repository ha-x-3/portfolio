import React from 'react'

const MyWork = React.forwardRef((props, ref) => {
	return (
		<div
			className='myWork'
			ref={ref}
		>
			<div className='workHeading'>
				<h1>MY PORTFOLIO</h1>
				<p>
					&lt; A GLANCE AT MY{' '}
					<span className='bold'>CAPABILITIES</span> &#8725;&gt;
				</p>
			</div>
		</div>
	);
});

export default MyWork;
