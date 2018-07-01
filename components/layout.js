// import Head from next
// import Navbar from navbar

// const Layout taking props fat arrow function
	// div
		// Head section
			// title
			// link set to bootstrap stylesheet
		// Navbar component
		// reference to props children

// export default Layout

import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => (
	<div>
		<Head>
			<title>Crypto's Right</title>
			<link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
		</Head>
		<Navbar />
		<div className="d-flex justify-content-center container">
			{props.children}
		</div>
	</div>
);

export default Layout;