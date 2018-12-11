import React,{Component} from 'react';
import axios from 'axios';


import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import tab from '../actions/footerAction.js';

import {MinHeader} from './Commons/MinHeader';
import {GoodsInfo} from './Info/GoodsInfo';
import {GoodFooter} from './Info/GoodFooter';
import {AddToBag} from './Info/AddToBag';



class Information extends Component{
	constructor(){
		super();
		this.state = {
			name:"",
			list:[],
			bannerurl:'/apis/item/api/getProductDescriptionInfo',
			bannerdata:{
				productId:""
			},
			imgs:[]
		};
		
	}
	componentWillMount(){
		this.props.changeTabbarStatus(false);
		let gid=localStorage.getItem("productId");

//		console.log(this.state.imgs)
		this.state.bannerdata.productId=gid;
		
		
		axios.get('/apis/item/api/getProductDescriptionInfo',{params:{productId:gid}})
		.then((res)=>{
			//console.log(res)
			window.localStorage.setItem("imgs",JSON.stringify(res.data.result.moduleList[0].picList));
			this.setState({
				
			})
			//console.log(this.state.imgs)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	componentWillUnmount(){
		this.props.changeTabbarStatus(true);
	}
	
	render(){
		return <div>
				<div className="information">
					<MinHeader></MinHeader>
					<GoodsInfo></GoodsInfo>
					<GoodFooter></GoodFooter>
					<AddToBag></AddToBag>
				</div>
		</div>
	}
}
let mapDispatchToProps=dispatch=>{
	return {
		changeTabbarStatus(status){
			dispatch(tab(status))
		}

	}

}
Information=connect(null,mapDispatchToProps)(Information)
Information = withRouter(Information);

export {Information};