import React,{Component} from 'react';
import axios from 'axios';

import {withRouter} from 'react-router-dom';
import {ThirdLogin} from './ThirdLogin';

import {LoginTop} from './LoginTop';
class UserReg extends Component{
	constructor(){
		super();
		this.state={
			isok1:false,
			isok2:false,
		}
	}
	userUp(){
		let reginp=this.refs.reginp;
		if(!(/^1[34578]\d{9}$/.test(reginp.value))){ 
        	reginp.style.borderColor="red";
        	this.state.isok1=false;
    	} 
    	else{
    		reginp.style.borderColor="#ddd";
    		this.state.isok1=true;
    	}
	}
	passwordUp(){
		let regpassword=this.refs.regpassword;
		if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(regpassword.value))){ 
        	regpassword.style.borderColor="red";
        	this.state.isok2=false;
    	} 
    	else{
    		regpassword.style.borderColor="#ddd";
    		this.state.isok2=true;
    	}
	}
	regnmh(){
		let reginp=this.refs.reginp;
		let regpassword=this.refs.regpassword;
		let path='http://127.0.0.1:3003';
		let data={
			user:reginp.value,
			password:regpassword.value
		}
		let {history}=this.props;
		if(this.state.isok2&&this.state.isok1){
			axios.post(path+'/api/user/reg',data)
			.then((res)=>{
				console.log(res)
			})
			.catch((err)=>{
				console.log(err)
			})
//			
//			history.push('/home');
		}
		else{
			alert('用户名或密码错误')
		}
	}
	render(){
		return <div>
				<div className="userReg">
					<LoginTop></LoginTop>
					<div className="lcontent">
						<div className="tellogin">
							<input type="phone" 
							 onBlur={this.userUp.bind(this)} ref="reginp"
							className="inp reginp" placeholder="输入11位手机号码" />
							<div className="inp">
								<input type="text" placeholder="验证码" />
								<span>获取验证码</span>
							</div>
							<input type="password" ref="regpassword"
							 onBlur={this.passwordUp.bind(this)} 
							className="inp regpassword" placeholder="设置密码（6-16）位" />
							<input type="button" onClick={this.regnmh.bind(this)} 
							className="inp submit" value="注册"/>
						</div>
						<ThirdLogin></ThirdLogin>
						<div className="agree">
							<i className="fa fa-check-circle"></i>
							<span>同意</span>
							<a href="#">蜜惠用户注册协议</a>
						</div>
					</div>
				</div>
		</div>
	}
}
UserReg = withRouter(UserReg);

export {UserReg};