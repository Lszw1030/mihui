import React,{Component} from 'react';


import {withRouter} from 'react-router-dom';

import {List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class My extends Component{
	constructor(){
		super();
		this.state = {
			user:''
		};
		
	}
	componentWillMount(){
		this.state.user=localStorage.getItem('user')||'';
		if(this.state.user==""){
			
		}
		else{
			
		}
	}
	goLogin(){
		//console.log(this.props)
		this.props.history.push('/login');
	}
	render(){
		return <div>
				<div className="my">
				 	<input type="button" onClick={this.goLogin.bind(this)} value="login"/>
				</div>
		</div>
	}
}
My = withRouter(My);

export {My};