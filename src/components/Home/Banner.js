import React,{Component} from 'react';
import axios from 'axios';

import {withRouter} from 'react-router-dom';
import { Carousel,WingBlank } from 'antd-mobile';
import AJAX from '../Commons/ajax.js';
import Swiper from 'swiper';
class Banner extends Component{
	constructor(){
		super();
		this.state = {
			banner:	['1', '2', '3'],
	    	imgHeight: 176,
		};
	}
	componentWillMount(){
		let data =this.props.data;
		let url=this.props.url;
		let imgs=JSON.parse(localStorage.getItem("imgs"));
//		console.log(imgs)
//		console.log(url,data);
		axios.get(url, {parmas:data})
			.then((res) => {
				let data=res.data.result.banner||imgs;
				//console.log(res.data.result)
				this.setState({
	       		 banner:data,
	      		});
			})
			.catch((err) => {
				console.log(err)
			})
		
	}
	render(){
		return <div>
				<div className="banner">
					<div className="banner-img">
				        <Carousel
				          autoplay={true}
				          infinite
				        >
				          {this.state.banner.map(val => (
				            <a
				              key={val}
				              href="#"
				              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
				            >
				              <img
				                src={val.image}
				                alt=""
				                style={{ width: '100%',height:'100%', verticalAlign: 'top' }}
				                onLoad={() => {
				                  window.dispatchEvent(new Event('resize'));
				                  this.setState({ imgHeight: 'auto' });
				                }}
				              />
				            </a>
				          ))}
				        </Carousel>
				  
					</div>
				</div>
		</div>
	}
}
Banner = withRouter(Banner);

export {Banner};