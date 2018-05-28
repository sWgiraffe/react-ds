import React from 'react';
import './index.scss';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName : '',
			password : ''
		};
	}
	onValueChange(e) {
		let name 	= e.target.name,
			value 	= e.target.value;
		this.setState({
			[name] : value
		});
	}
	onSubmit() {
		console.log(this.state);
	}
	render() {
		return (
			<div className="col-md-4 col-md-offset-4">
				<div className="panel panel-default login-box">
					<div className="panel-heading">欢迎登录React电商系统</div>
					<div className="panel-body">
						<div className="form-group">
							<input type="text" 
								name="userName"
								className="form-control" 
								placeholder="用户名"
								onChange={(e) => this.onValueChange(e)}/>
						</div>
						<div className="form-group">
							<input type="password"
								name="password"
								className="form-control"
								placeholder="密码"
								onChange={(e) => this.onValueChange(e)}/>
						</div>
						<button type="submit" className="btn btn-primary btn-block" onClick={(e) => this.onSubmit(e)}>登录</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
