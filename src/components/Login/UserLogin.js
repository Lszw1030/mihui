import React,{Component} from 'react';


import {withRouter} from 'react-router-dom';
import { List, InputItem, WhiteSpace } from 'antd-mobile';

import {ThirdLogin} from './ThirdLogin';
import {LoginNav} from './LoginNav';

class UserLogin extends Component{
//	constructor(){
//		super();
//		this.state={
//			isok1:false,
//			isok2:false,
//		}
//	}
	goback(){
		console.log(this)
		let {history} = this.props;
		history.push('/my');
	}
	componentWillMount(){
	
	}
	
//	userUp(){
//		let userinp=this.refs.userinp;
//		if(!(/^1[34578]\d{9}$/.test(userinp.value))){ 
//      	userinp.style.borderColor="red";
//      	this.state.isok1=false;
//  	} 
//  	else{
//  		userinp.style.borderColor="#ddd";
//  		this.state.isok1=true;
//  	}
//	}
//	passwordUp(){
//		let userpassword=this.refs.userpassword;
//		if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(userpassword.value))){ 
//      	userpassword.style.borderColor="red";
//      	this.state.isok2=false;
//  	} 
//  	else{
//  		userpassword.style.borderColor="#ddd";
//  		this.state.isok2=true;
//  	}
//	}
//	loginmh(){
//		let userinp=this.refs.userinp;
//		let {history}=this.props;
//		if(this.state.isok2&&this.state.isok1){
//			window.localStorage.setItem('user',userinp.value);
//			history.push('/home');
//		}
//		else{
//			alert('用户名或密码错误')
//		}
//	}
	render(){
		return <div>
				<div className="userLogin">
					<div className="userLogin-header">
						<i  className="fa fa-close"
							onClick={this.goback.bind(this)}
						></i>
					</div>
					<div className="lcontent">
						<div className="loginlogo">
							<img src={require('../../images/logo.jpg')} />
						</div>
						<div className="tellogin">
							<input type="phone" ref="userinp" 
							className="inp userinp" placeholder="手机号码" />
					
							<input type="password" ref="userpassword" 
							className="inp userpassword" placeholder="密码" />
							
							<input type="button" className="inp submit" 
							value="登录"/>
						</div>
						<LoginNav></LoginNav>
						<ThirdLogin></ThirdLogin>
						</div>
				</div>
		</div>
	}
}
UserLogin = withRouter(UserLogin);

export {UserLogin};