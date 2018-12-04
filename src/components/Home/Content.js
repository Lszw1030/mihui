import React,{Component} from 'react';
import axios from 'axios';

import {withRouter} from 'react-router-dom';

//http://www.shenduzhekou.com/index.php?r=index/ajaxnew&page=1
class Content extends Component{
	constructor(){
		super();
		this.state = {
			content:"",
			list:[],
			
		};
	}//r=class%2Fajaxsub&page=1&cid=8115&px=sell&cac_id=
	componentWillMount(){
		let data =this.props.data;
		console.log(data)
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
	render(){
		
		return <div>
				<div className="homelists">
					<img src={require('../../images/homelisttop.jpg')} style={{width:'100%'}} />
					<div className="ovaotu">
						<ul className="contlist">
						{this.state.list.map(val=>(
							
							<li
							key={val.id}>
							
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