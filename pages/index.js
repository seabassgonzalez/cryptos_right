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

class Index extends Component {
	static async getInitialProps(){
		const res = await fetch('https://api.tvmaze.com/search/shows?q=seinfeld');
		const data = await res.json();
		console.log('show data fetched, count', data.length);
		return{
			shows:data
		}	
	}
	render(){
		return (
			<Layout>
				<div>
					<h1>Welcome to Crypto's Right</h1>
					<h1>Temporary Seinfeld TV Show Get Initial Props Practice</h1>
					<ul>
						{this.props.shows.map(({show}) => (
							<li key={show.id}>
								<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}> 
									<a>{show.name}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</Layout>
		)
	}
};

export default Index;
