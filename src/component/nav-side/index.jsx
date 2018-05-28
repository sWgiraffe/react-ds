import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './index.scss';

class NavSide extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			curMenu : ''
		};
	}
	render() {
		return (
			<div className="nav-side">
				<a className="navside-brand" href="/">HAPPYMMALL</a>
				<ul className="parent-menu">
					<li>
						<a>
							<i className="fa fa-bar-chart-o"></i>
							<span>首页</span>
						</a>
					</li>
					<li>
						<a>
							<i className="fa fa-list"></i>
							<span>商品</span>
						</a>
						<ul className="child-menu">
							<li>
								<a>
									<span>商品管理</span>
								</a>
							</li>
							<li>
								<a>
									<span>品类管理</span>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a>
							<i className="fa fa-check-square-o"></i>
							<span>订单</span>
						</a>
						<ul className="child-menu">
							<li>
								<a>
									<span>订单管理</span>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavSide;
