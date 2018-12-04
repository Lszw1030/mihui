import React,{Component} from 'react';
import axios from 'axios';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';


import {Banner} from "./Home/Banner"
import {HomeNav} from "./Home/HomeNav"
import {HomeMinType} from "./Home/HomeMinType"
import {Content} from "./Home/Content"


import {Lists} from "./Commons/Lists"
import {Search} from './Commons/Search'

import {List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class Home extends Component{
	constructor(){
		super();
		this.state = {
			data1:{
				pageNub:1,
				pageSize:20
			},
			data2:{
				pageNub:2,
				pageSize:20
			},
			data3:{
				pageNub:3,
				pageSize:20
			},
			data4:{
				pageNub:4,
				pageSize:20
			},
			listdata:{
				pageNub:5,
				pageSize:20
			},
			hurl:"/apis/home/api/getLikeList"
		}
	}
	render(){
		return <div>
				<div className="content">
						<Search></Search>
						<Banner></Banner>
						<HomeNav></HomeNav>
						<div className="zhengping">
							<img src={require('../images/zhengping.jpg')} 
							style={{ width: '100%',verticalAlign: 'top' }}/>
						</div>
						<HomeMinType></HomeMinType>
						<Content data={this.state.data1}></Content>
						<Content data={this.state.data2}></Content>
						<Content data={this.state.data3}></Content>
						<Content data={this.state.data4}></Content>
						<Lists data={this.state.listdata} url={this.state.hurl}></Lists>
				</div>
				
		</div>
	}
}
Home = withRouter(Home);

export {Home};