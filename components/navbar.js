// import Link from next
// import React and Component from react

// class Navbar extending Component
	// render
		// return
			// div bootstrap className container
				// a tag className set to navbar-brand
				// div className collapse navbar-collapse
					// ul className navbar-nav m1-auto
						// li className nav-item
							// Link a tag className nav-link for Home route
							// Link a tag className nav-link for About route

// export default Navbar						

import Link from 'next/link';
import React, { Component } from 'react';

class Navbar extends Component {
	render(){
		return (
			<nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
				<div className="container d-flex">
					<a className="navbar-brand" href="#">Next JS</a>
					<div className="collapse navbar-collapse d-flex flex-row-reverse">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link href="/">
									<a className="nav-link">Home</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/about">
									<a className="nav-link">About</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar;