import React,{Component} from 'react';
import axios from 'axios';

import {Switch,withRouter} from 'react-router-dom';


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
	goInfomation(val){
		let {history} = this.props;
		window.localStorage.setItem("name",val.name);
		window.localStorage.setItem("productId",val.id);
		history.push('/information');

	}
	render(){
		
		return <div>
				<div className="homelists">
					<img src={require('../../images/homelisttop.jpg')} style={{width:'100%'}} />
					<div className="ovaotu">
						<ul className="contlist">
						{this.state.list.map(val=>(
							<li
							key={val.id}
							onClick={this.goInfomation.bind(this,val)}
							>
							
								<span className="minti">{val.sellerInfo.name}</span>
								<img src={val.pic}/>
								<h2>{val.name}</h2>
								<p>
									<span>{(val.price*0.8).toFixed(2)}</span>
									<span>{val.price}</span>
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