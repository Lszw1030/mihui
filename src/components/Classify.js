import React,{Component} from 'react';

import {withRouter} from 'react-router-dom';

import {Search} from './Commons/Search';
import {ClassifyNav} from './Classify/ClassifyNav'

import {Lists} from './Commons/Lists';



class Classify extends Component{
	constructor(props){
		super(props);
		this.state = {
			listdata:{
				pageNub:5,
				pageSize:20
			},
			hurl:"/apis/home/api/getLikeList",
			
		}
	}
	componentWillMount(){
		let data=JSON.parse(localStorage.getItem("data"))
	
		this.setState({
	       		 listdata:data,
	    });
	    
	}
	render(){
		return <div>
				<Search></Search>
				<ClassifyNav></ClassifyNav>
				<div className="" style={{marginTop:"90px"}}></div>
				<Lists 
				data={this.state.listdata} url={this.state.hurl}></Lists>
				
		</div>
	}
}
Classify = withRouter(Classify);

export {Classify};