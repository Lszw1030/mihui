import React,{Component} from 'react';


import {withRouter} from 'react-router-dom';

import {List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class ThirdLogin extends Component{
	constructor(){
		super();
		this.state={
			icons:[
				{
					icon:"fa fa-weixin",
					istyle:'#80bc5b'
				},
				{
					icon:"fa fa-qq",
					istyle:'#03a4db'
				},
				{
					icon:"fa fa-weibo",
					istyle:'#db8075'
				}
			]
		}
	}
	render(){
		return <div>
				<div className="thirdLogin">
					<div className="cooperation">
						<span>使用合作账号登录</span>
					</div>
					<div className="per-icons">
					{
						this.state.icons.map((icons,index)=>(
							<i 
							key={index}
							className={icons.icon} 
							style={{color:icons.istyle}}></i>
						))
					}
						
						
					</div>
				</div>
		</div>
	}
}
ThirdLogin = withRouter(ThirdLogin);

export {ThirdLogin};