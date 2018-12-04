import React,{Component} from 'react';
import axios from 'axios';

import {withRouter} from 'react-router-dom';
import {
	TabBar
} from 'antd-mobile';


class Lists extends Component{
	constructor() {
		super();
		this.state = {
			
		}
	}
	
	componentWillMount(){
        //获取hash值
        axios.get('/apie/index.php', {params:{
			r:"index/ajaxcat",
			px:"t",
			cid:6,
			page:1,
			cac_id:""
		}})
		.then((res) => {
			//console.log(res)
			this.setState({
				
      		});

		})
		.catch((err) => {
			console.log(err)
		})
        
    }
	render(){
		return <div>
				<div className="lists">
					<ul className="list">
						<li>
							<img />
							<h2>qt4</h2>
							<p>
								<span>fa</span>
								<span>| 
									<span>fa</span>
								</span>
							</p>
						</li>
						<li></li>
					</ul>
	            </div>
			</div>
	}
}
Lists = withRouter(Lists);

export {Lists};