import React,{Component} from 'react';
import axios from 'axios';

import {withRouter} from 'react-router-dom';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

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
	
	loginmh(){
		let logininp=this.refs.logininp;
		let userpassword=this.refs.userpassword;
		let {history}=this.props;
		let path='http://127.0.0.1:3003';
		let data={
			user:logininp.value,
			password:userpassword.value
		}
		axios.post(path+'/api/user/login',data)
		.then((res)=>{
			//console.log(res)
			if(res.data.msg=='登录成功'){
				Toast.success('登录成功', 1);
				window.localStorage.setItem('user',logininp.value);
				history.push('/home');
				
			}
			else{
				 Toast.fail('登录失败', 1);
				console.log(res.data.msg)
			}
			
		})
		.catch((err)=>{
			console.log(12)
			
		})
	}
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
							<input type="phone" ref="logininp" 
							className="inp logininp" placeholder="手机号码" />
					
							<input type="password" ref="userpassword" 
							className="inp userpassword" placeholder="密码" />
							
							<input type="button" onClick={this.loginmh.bind(this)}className="inp submit" 
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