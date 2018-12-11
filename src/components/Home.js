import React,{Component} from 'react';

import {withRouter} from 'react-router-dom';


import {Banner} from "./Home/Banner"
import {HomeNav} from "./Home/HomeNav"
import {HomeMinType} from "./Home/HomeMinType"
import {Content} from "./Home/Content"


import {Lists} from "./Commons/Lists"
import {Search} from './Commons/Search'





class Home extends Component{
	scrollHandler = this.handleScroll.bind(this);
	constructor(){
		super();
		this.state = {
			data1:{
				pageNub:1,
				pageSize:20
			},
			data2:{
				pageNub:2,
				pageSize:20
			},
			data3:{
				pageNub:3,
				pageSize:20
			},
			data4:{
				pageNub:4,
				pageSize:20
			},
			listdata:{
				pageNub:5,
				pageSize:20
			},
			hurl:"/apis/home/api/getLikeList",
			bannerurl:'/apiy/api/wxapp',
			bannerdata:{}
		}
	}
	scrollHandler = this.handleScroll.bind(this);
	
    componentDidMount() {
    	//console.log(this.scrollHandler)
      window.addEventListener('scroll', this.scrollHandler);
    }
     _handleScroll(scrollTop,content) {
         //console.log(scrollTop)
         //console.log(content)
         //滚动条距离页面的高度
        }
    handleScroll(event) {
    	let content=document.querySelector('.content');
    	//console.log(content)
        let scrollTop = event.srcElement.body.scrollTop;
        this._handleScroll(scrollTop,content);
    }

	render(){
		
		return <div>
				<div className="content">
					<div id="search">
						<Search></Search>
					</div>
					<div id="banner">
						<Banner url={this.state.bannerurl} data={this.state.bannerdata}></Banner>
					</div>	
					<div id="main">
						<HomeNav></HomeNav>
						<div className="zhengping">
							<img src={require('../images/zhengping.jpg')} 
							style={{ width: '100%',verticalAlign: 'top' }}/>
						</div>
						<HomeMinType></HomeMinType>
						<Content data={this.state.data1}></Content>
						<Content data={this.state.data2}></Content>
						<Content data={this.state.data3}></Content>
						<Content data={this.state.data4}></Content>
						<Lists data={this.state.listdata} url={this.state.hurl}></Lists>
					</div>
				</div>
				
		</div>
	}
}
Home = withRouter(Home);

export {Home};