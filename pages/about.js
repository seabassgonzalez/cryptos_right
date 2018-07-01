// import Navbar
// import React and Component from react

// class About extending component
	// render
		// div
			// Navbar component
				// div
					// paragraph describing the project

// export default About component

import Navbar from '../components/navbar';
import React, { Component } from 'react';

class About extends Component {
	render(){
		return (
			<div>
				<Navbar />
				<div>
					<p>This is an initial exploration of next js</p>
				</div>
			</div>
		)
	}
};

export default About;
