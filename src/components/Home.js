import React,{Component} from 'react';
import axios from 'axios';


import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

import {Header} from "./Home/Header"

import {List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class Home extends Component{
	render(){
		return <div>
				<div className="content">
					<Switch>
						<Header></Header>
					</Switch>
				</div>
				
		</div>
	}
}
Home = withRouter(Home);

export {Home};