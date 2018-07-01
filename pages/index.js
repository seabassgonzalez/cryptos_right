// import Layout component
// import React and Component from react

// class Index extending Component
	// render
		// return
			// Layout wrapper
				// div
					// Navbar component
					// div
						// h1 welcome message

// export default Index

import Layout from '../components/layout';
import React, { Component } from 'react';

class Index extends Component {
	render(){
		return (
			<Layout>
				<div>
					<div>
						<h1>Welcome to Exploratory</h1>
					</div>
				</div>
			</Layout>
		)
	}
};

export default Index;
