import React,{Component} from 'react';
import axios from 'axios';

import {withRouter} from 'react-router-dom';

import {List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class My extends Component{
	render(){
		return <div>
				<div>my</div>
		</div>
	}
}
My = withRouter(My);

export {My};