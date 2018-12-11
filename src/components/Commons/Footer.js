import React,{Component} from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
	TabBar
} from 'antd-mobile';


class Footer extends Component{
	constructor() {
		super();
		this.state = {
			tabs: [

				{
					title: '首页',
					path: '/home',
					icon: 'fa fa-home'
				}, 
				{
					title: '物语',
					path: '/orderFrom',
					icon: 'fa fa-snowflake-o'
				}, 
				{
					title: '分类',
					path: '/classify/quanbu',
					icon: 'fa fa-file-text'
				},
				{
					title: '购物篮',
					path: '/cart',
					icon: 'fa fa-shopping-basket'
				},
				
				{
					title: '我的',
					path: '/my',
					icon: 'fa fa-user'
				}
			],
			currentTab: 0
		}
	}
	handlerClick(idx,path){
        this.setState({
            currentTab:idx
        });

        //编程式导航
        //获取history的方式
        // * 通过Route渲染App
        // * 利用withRouter高阶组件实现
          this.props.history.push(path);

    }
	componentWillMount(){
        //获取hash值
        let hash = window.location.hash.slice(1);//#list
	
        //找出对应索引值
        let currentTab = 0
        this.state.tabs.some((item,idx)=>{
            currentTab = idx;
            return item.path === hash
        });

        this.setState({
            currentTab
        });
    }
	render(){
		return <div>
				<div className="footer">
				<TabBar
                tintColor="#f00"
             	hidden={!this.props.statebar}
                noRenderContent={true}
                >
                {
                    this.state.tabs.map((tab,idx)=>{
                        return <TabBar.Item
                            title={tab.title}
                            key={tab.path}
                            icon={<i className={tab.icon}></i>}
                            selectedIcon={<i className={tab.icon}></i>}
                            selected={this.state.currentTab === idx}
                            onPress={this.handlerClick.bind(this,idx,tab.path)}
                            >
                            {tab.title}
                            </TabBar.Item>
                    })
                }
            </TabBar>
            </div>
		</div>
	}
}
let mapStateToProps=(state)=>{
	
	return {
		statebar:state.footerReducer.tabstate
	}

}
Footer=connect(mapStateToProps)(Footer)
Footer = withRouter(Footer);

export {Footer};