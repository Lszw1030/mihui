import React,{Component} from 'react';
import axios from 'axios';


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
	goInfomation(goods){
		let {history} = this.props;
		//console.log(val)
		window.localStorage.setItem("name",goods.name);
		window.localStorage.setItem("productId",goods.id);
		history.push({
			pathname:'/information/'+goods.id,
			state:goods
		});

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