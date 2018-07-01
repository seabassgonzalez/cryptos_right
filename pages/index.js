// import Navbar component
// import React and Component from react

// class Index extending Component
	// render
		// return
			// div
				// Navbar component
				// div
					// h1 welcome message

// export default Index

import Navbar from '../components/navbar';
import React, { Component } from 'react';

class Index extends Component {
	render(){
		return (
			<div>
				<Navbar />
				<div>
					<h1>Welcome to Exploratory</h1>
				</div>
			</div>
		)
	}
};

export default Index;
