import React,{Component} from 'react';


import {withRouter} from 'react-router-dom';

import {List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class Cart extends Component{
	render(){
		return <div>
				<div>cart</div>
		</div>
	}
}
Cart = withRouter(Cart);

export {Cart};