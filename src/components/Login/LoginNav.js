import React,{Component} from 'react';


import {withRouter} from 'react-router-dom';

import {TabBar} from 'antd-mobile';


class LoginNav extends Component{
	constructor(){
		super();
		this.state={
			tabs:[
				{
					name:"注册",
					path:'/login/userReg',
					title:"注册"
				},
				{
					name:"企业注册",
					path:'/login/businessReg',
					title:"企业注册"
				},
				{
					name:"免密登陆",
					path:'/login/phoneLogin',
					title:""
				}
			]
		}
	}
	handlerClick(index,tab){
      
        //console.log(tab.title);
		window.localStorage.setItem('loginTitle',tab.title);
        //编程式导航
        //获取history的方式
        // * 通过Route渲染App
        // * 利用withRouter高阶组件实现
        this.props.history.push(tab.path);

    }
	render(){
		return <div>
				<div className="loginNav">
                   {this.state.tabs.map((tab,index)=>(
                   		<span 
                   		key={index}
                   		onClick={this.handlerClick.bind(this,index,tab)}>
                   		{tab.name}</span>
                   ))}
            
				</div>
		</div>
	}
}
LoginNav = withRouter(LoginNav);

export {LoginNav};