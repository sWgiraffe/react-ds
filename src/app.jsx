import React 		from 'react';
import ReactDOM 	from 'react-dom';
import Layout		from 'component/layout/index.jsx';
import Login		from 'page/login/index.jsx';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

class App extends React.Component {	
	render() {
		let layoutRouter = (
			<Layout>
			</Layout>
		);
		return (
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" render={ props => layoutRouter } />
				</Switch>
			</Router>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);
