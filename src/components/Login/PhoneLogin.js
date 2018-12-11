import React,{Component} from 'react';


import {withRouter} from 'react-router-dom';

import {LoginTop} from './LoginTop';
import {List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;


class PhoneLogin extends Component{
	render(){
		return <div>
				<div className="userLogin">
					<LoginTop></LoginTop>
					<div className="lcontent">
						<div className="loginlogo">
							<img style={{marginTop:"60px"}} src={require('../../images/logo.jpg')} />
						</div>
						<div className="tellogin" style={{marginTop:"50px"}}>
							<input type="phone" className="inp" placeholder="手机号码" />
					
							<input type="password" className="inp" placeholder="密码" />
							
							<input type="button" style={{marginTop:"60px"}} className="inp submit" value="登录"/>
						</div>
						</div>
				</div>
		</div>
	}
}
PhoneLogin = withRouter(PhoneLogin);

export {PhoneLogin};