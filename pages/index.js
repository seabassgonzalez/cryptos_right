import Navbar from '../components/navbar';
import React, { Component } from 'react';

class Index extends Component {
	render(){
		return (
			<div>
				<Navbar />
				<div>
					<p>Hello Next.js</p>
				</div>
			</div>
		)
	}
};

export default Index;
