import React,{Component} from 'react';
import axios from 'axios';

import {withRouter} from 'react-router-dom';

//http://www.shenduzhekou.com/index.php?r=index/ajaxnew&page=1
class HomeMinType extends Component{
	constructor(){
		super();
		this.state = {
			list:[]
		};
	}
	componentWillMount(){
		axios.get('/apiy/api/wxapp', {})
			.then((res) => {
				let data=res.data.result.lotery
				//console.log(data[0].id)
				this.setState({
	       			list:data
	      		});
	//			return data;
			})
			.catch((err) => {
				console.log(err)
			})
		
	}
	render(){
		return <div>
				<div className="homeType">
					<ul>
					{this.state.list.map(val => (
						<li
						key={val.id}>
						<a>
							<div className="goodinfo">
								<span>{val.sponsor}</span>
								<h1>{val.goodsname}</h1>
								<p>
									<span>32</span>
									<span>35</span>
								</p>
							</div>
							<img  src={val.rimage}/>
						</a>	
						</li>
					))}
					</ul>
				</div>
		</div>
	}
}
HomeMinType = withRouter(HomeMinType);

export {HomeMinType};