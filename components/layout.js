// import Head from next
// import React and Component from react
// import Navbar from navbar

// class Layout extending Component
	// render
		// return
			// div
				// Head section
					// title
					// link set to bootstrap stylesheet
				// Navbar component
				// div className set to bootstrap flex container and justified to center
					// reference to this.props.children

// export default Layout

import Head from 'next/head';
import React, { Component } from 'react';
import Navbar from './navbar';

class Layout extends Component{
	render(){
		return(
			<div>
				<Head>
					<title>Crypto's Right</title>
					<link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
				</Head>
				<Navbar />
				<div className="d-flex justify-content-center container">
					{this.props.children}
				</div>
			</div>
		)
	}
};

export default Layout;