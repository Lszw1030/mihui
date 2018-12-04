import React,{Component} from 'react';
import axios from 'axios';


import {withRouter} from 'react-router-dom';

import {List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class Information extends Component{
	constructor(){
		super();
		this.state = {
			name:"",
			list:[],
			
		};
		
	}
	componentWillMount(){
		let gid=localStorage.getItem("productId");
		//let name=localStorage.getItem("name");
	
		axios.get('/apis/item/api/getProductDescriptionInfo',{params:{productId:gid}})
		.then((res)=>{
			console.log(res.data)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	
	render(){
		return <div>
				<div>Information</div>
		</div>
	}
}
Information = withRouter(Information);

export {Information};