import React,{Component} from 'react';
import axios from 'axios';

import {withRouter} from 'react-router-dom';


class Content extends Component{
	constructor(){
		super();
		this.state = {
			content:"",
			list:[],
			
		};
		
	}
	componentWillMount(){
		let data =this.props.data;
		//console.log(data)
		axios.get('/apis/home/api/getLikeList', {params:data})
		.then((res) => {
			//console.log(res.data.likeProductInfo)
			
			this.setState({
				list:res.data.likeProductInfo
      		});

		})
		.catch((err) => {
			console.log(err)
		})
			
	}
	goInfomation(goods){
		let {history} = this.props;
		window.localStorage.setItem("name",goods.name);
		window.localStorage.setItem("productId",goods.id);
		history.push({
			pathname:'/information/'+goods.id,
			state:goods
		});
		

	}
	render(){
		
		return <div>
				<div className="homelists">
					<img src={require('../../images/homelisttop.jpg')} style={{width:'100%'}} />
					<div className="ovaotu">
						<ul className="contlist">
						{this.state.list.map(goods=>(
							<li
							key={goods.id}
							onClick={this.goInfomation.bind(this,goods)}
							>
								<span className="minti">{goods.sellerInfo.name}</span>
								<img src={goods.pic}/>
								<h2>{goods.name}</h2>
								<p>
									<span>{(goods.price*0.8).toFixed(2)}</span>
									<span>{goods.price}</span>
								</p>
						
							</li>
							))}
							
						</ul>
					</div>
				</div>
		</div>
	}
}


Content = withRouter(Content);

export {Content};