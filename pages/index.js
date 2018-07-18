// import React and Component from react
// import Fetch from isomorphic-unfetch
// import Layout component

// class Index extending Component
	// render
		// return
			// Layout wrapper
				// div
					// Navbar component
					// div
						// h1 welcome message

// export default Index

import React, { Component } from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Prices from '../components/prices';

class Index extends Component {
	static async getInitialProps(){
		const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
		const data = await res.json();
		return{
			bpi:data.bpi
		}	
	}
	render(){
		return (
			<Layout>
				<div>
					<h1>Welcome to Crypto's Right</h1>
					<Prices bpi={this.props.bpi} />
				</div>
			</Layout>
		)
	}
};

export default Index;
