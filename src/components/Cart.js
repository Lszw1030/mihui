import React,{Component} from 'react';
import axios from 'axios';

import {withRouter} from 'react-router-dom';
import { List} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Cart extends Component{
	constructor(){
		super();
		this.state = {
			list:[]
			
		}
	}
	componentWillMount(){
		let path='http://127.0.0.1:3003';
		axios.post(path+'/api/goods/cartlist',{})
		.then((res)=>{
			this.state.list=res.data.data;
			console.log(this.state.list)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	render(){
		return <div>
				<div className="cart">
					<ul className="cartlist">
						{this.state.list.map(goods=>(
							<li key={goods.id}>
								<div className="cartgood">
									<input type="radio" />
									<img src={goods.img} />
									<div className="goodtitle">
										<p>
											<span></span>
										</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
		</div>
	}
}
Cart = withRouter(Cart);

export {Cart};