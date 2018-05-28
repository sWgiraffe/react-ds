import React from 'react';
import './index.scss';


class NavTop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showLogout: false
		};
	}
	showLogout() {
		this.setState({
			showLogout: true
		});
	}
	hideLogout() {
		this.setState({
			showLogout: false
		});
	}
	render() {
		return (
			<div className="nav-top">
				<div onMouseLeave={(e) => this.hideLogout(e)}>
				<div className="user-info" onMouseEnter={(e) => this.showLogout(e)}>
					<i className="fa fa-user fa-fw"></i>
					<span>欢迎，用户xx</span>
				</div>
				{this.state.showLogout ? 
				(<div className="user-logout">
					<a>
						<i className="fa fa-sign-out fa-fw"></i>
						<span>退出登录</span>
					</a>
				</div>) : null
				}
				</div>
			</div>
		);
	}
}

export default NavTop;
