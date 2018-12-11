import React,{Component} from 'react';


import {withRouter} from 'react-router-dom';

import {List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class OrderFrom extends Component{
	render(){
		return <div>
				<div>ofh</div>
		</div>
	}
}
OrderFrom = withRouter(OrderFrom);

export {OrderFrom};