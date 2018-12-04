import React,{Component} from 'react';

import {withRouter} from 'react-router-dom';
import { TabBar } from 'antd-mobile';



class ClassifyNav extends Component{

	constructor(props) {
    	super(props);
    this.state = {
        typeNav:[
        	{
        		title:"全部",
        		data:{
					pageNub:1,
					pageSize:20
				},
        	},
        	{
        		title:"护肤",
        		data:{
					pageNub:2,
					pageSize:20
				},
        	},
        	{
        		title:"彩妆",
        		data:{
					pageNub:3,
					pageSize:20
				},
        	},
        	{
        		title:"个护",
        		data:{
					pageNub:4,
					pageSize:20
				},
        	},
        	{
        		title:"保健",
        		data:{
					pageNub:5,
					pageSize:20
				},
        	},
        	{
        		title:"食品",
        		data:{
					pageNub:6,
					pageSize:20
				},
        	}
        ],
        n:0
    };
 }
	
	componentWillMount(){
      //找出对应索引值
        let n = 0
        this.state.typeNav.some((item,idx)=>{
            n = idx;
            
        });

       this.setState({
            n
        });

    }
	toNeedType(index,item){
		//console.log(item.data)
		//console.log(this)
		window.localStorage.setItem("data",JSON.stringify(item.data))
		this.setState({
			n:index
		})
	}
	render(){
		return <div>
				<div className="classifyNav">
					<ul className="typeList">
					{this.state.typeNav.map((goods,index)=>(
						<li
							key={goods.title}
							style={{color:this.state.n===index?'#ff5a60':null}}
							onClick={this.toNeedType.bind(this,index,goods)}
						>{goods.title}</li>
					))}
						
					
					</ul>
            </div>
		</div>
	}
}
ClassifyNav = withRouter(ClassifyNav);

export {ClassifyNav};