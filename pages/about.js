// import Layout
// import React and Component from react

// class About extending component
	// render
		// Layout wrapper
			// div
				// Navbar component
					// div
						// paragraph describing the project

// export default About component

import Layout from '../components/layout';
import React, { Component } from 'react';

class About extends Component {
	render(){
		return (
			<Layout>
				<div>
					<div>
						<p>This is an initial exploration of next js</p>
					</div>
				</div>
			</Layout>
		)
	}
};

export default About;
