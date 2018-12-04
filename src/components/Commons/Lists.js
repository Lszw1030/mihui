import React,{Component} from 'react';
import axios from 'axios';
import {
	TabBar
} from 'antd-mobile';

import {withRouter} from 'react-router-dom';


class Lists extends Component{
	constructor() {
		super();
		this.state = {
			list:[]
		}
	}
	
	componentWillMount(){
        //获取hash值
        let data=this.props.data;
        let url=this.props.url
//      console.log(data);
        axios.get(url, {params:data})
		.then((res) => {
			//console.log(data.pageNub)
			this.setState({
				list:res.data.likeProductInfo
      		});

		})
		.catch((err) => {
			console.log(err)
		})
//      
    }
	goInfomation(val){
		let {history} = this.props;
		window.localStorage.setItem("name",val.name);
		window.localStorage.setItem("productId",val.id);
		history.push('/information');

	}
	
	render(){
		return <div>
				<div className="lists">
					<ul className="list">
					{this.state.list.map((goods,index)=>(
						<li
						key={goods.id}
					
						onClick={this.goInfomation.bind(this,goods)}
						>
							<img src={goods.pic}/>
							<h2>{goods.name}</h2>
							<p>
								<span>{(goods.price*0.8).toFixed(2)}</span>
								<span>| 
									<span>{goods.price}</span>
								</span>
							</p>
						</li>
						))}
					</ul>
	            </div>
			</div>
	}
}
Lists = withRouter(Lists);

export {Lists};