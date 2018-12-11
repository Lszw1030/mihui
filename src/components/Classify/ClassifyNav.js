import React,{Component} from 'react';

import {withRouter} from 'react-router-dom';




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
				id:'quanbu'
        	},
        	{
        		title:"护肤",
        		data:{
					pageNub:2,
					pageSize:20
				},
				id:'hufu'
        	},
        	{
        		title:"彩妆",
        		data:{
					pageNub:3,
					pageSize:20
				},
				id:'caizhuang'
        	},
        	{
        		title:"个护",
        		data:{
					pageNub:4,
					pageSize:20
				},
				id:'gehu'
        	},
        	{
        		title:"保健",
        		data:{
					pageNub:5,
					pageSize:20
				},
				id:'baojian'
        	},
        	{
        		title:"食品",
        		data:{
					pageNub:6,
					pageSize:20
				},
				id:'baojian'
        	}
        ],
        n:0
    };
 }
	
	componentWillMount(){
      //获取hash值
          let hash = window.location.hash.slice(1);//#list
      
        //找出对应索引值
        let n = 0
        this.state.typeNav.some((item,idx)=>{
            //n = idx;
            return item.id === hash
        });

        this.setState({
            n
        });

    }
	toNeedType(index,item){
		
		let {history} = this.props;
		window.localStorage.setItem("data",JSON.stringify(item.data))
		this.setState({
			n:index
		})
		window.location.reload()
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