import React 	from 'react';
import NavTop 	from 'component/nav-top/index.jsx';
import NavSide	from 'component/nav-side/index.jsx';
import './index.scss';
class Layout extends React.Component {
	render() {
		return (
			<div>
				<NavTop/>
				<NavSide/>
			</div>
		);
	}
}

export default Layout;
