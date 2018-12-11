import React,{Component} from 'react';

import {LoginTop} from './LoginTop';
import {withRouter} from 'react-router-dom';
import {ThirdLogin} from './ThirdLogin';


import {List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class BusinessReg extends Component{
	render(){
		return <div>
				<div className="userReg">
					<LoginTop></LoginTop>
					<div className="lcontent">
						<div className="tellogin">
							<input type="phone" className="inp" placeholder="输入11位手机号码" />
							<div className="inp">
								<input type="text" placeholder="验证码" />
								<span>获取验证码</span>
							</div>
							<input type="password" className="inp" placeholder="设置密码（6-16）位" />
							<input type="text" className="inp" placeholder="企业邀请码" />
							<input type="button" className="inp submit" value="注册"/>
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
BusinessReg = withRouter(BusinessReg);

export {BusinessReg};