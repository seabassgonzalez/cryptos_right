// import Navbar

// const Layout taking props fat arrow function
	// div
		// Navbar component
		// reference to props children

// export default Layout

import Navbar from './navbar';

const Layout = (props) => (
	<div>
		<Navbar />
		{props.children}
	</div>
);

export default Layout;