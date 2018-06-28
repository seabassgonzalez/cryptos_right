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
				<style jsx>{`
					ul {
						background: #34495e;
						color: #fff;
						list-style: none;
						display: flex;
					}

					ul li {
						font-size: 16px;
						margin-right: 20px;
					}

					ul li a {
						color: #fff;
						text-decoration: none;
					}
				`}</style>
			</div>
		)
	}
}

export default Navbar;