import Link from 'next/link';
import React, { Component } from 'react';

class Navbar extends Component {
	render(){
		return (
			<div>
				<ul>
					<li><Link href="/"><a>Home</a></Link></li>
					<li><Link href="/about"><a>About</a></Link></li>
				</ul>
			</div>
		)
	}
}

export default Navbar;