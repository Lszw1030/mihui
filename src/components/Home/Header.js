import React,{Component} from 'react';


import {withRouter} from 'react-router-dom';


class Header extends Component{
	render(){
		return <div>
				<div className="header">
					<div className="address">
						<i className="fa fa-map-marker"></i>
						<span>北京市</span>
					</div>
					<div className="search">
						<i className="fa fa-search"></i>
						<input type="text" placeholder="搜商品" />
					</div>
					<i className="fa fa-headphones lensten"></i>
				</div>
		</div>
	}
}
Header = withRouter(Header);

export {Header};