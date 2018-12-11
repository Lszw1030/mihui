import React,{Component} from 'react';


import {withRouter} from 'react-router-dom';
import {
	TabBar
} from 'antd-mobile';


class HomeNav extends Component{
	constructor() {
		super();
		this.state = {
			tabs: [

				{
					title: '新人有礼',
					path: '/home',
					icon: require('../../images/xryl.jpg')
				}, 
				{
					title: '我的蜜豆',
					path: '/orderFrom',
					icon: require('../../images/wdmd.jpg')
				}, 
				{
					title: '分享赚钱',
					path: '/classify',
					icon: require('../../images/fxzq.jpg')
				},
				{
					title: '热销榜',
					path: '/cart',
					icon: require('../../images/rxb.jpg')
				},
				
				{
					title: '海外直邮',
					path: '/my',
					icon: require('../../images/hwzy.jpg')
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
				<div className="homeNav">
				<TabBar
                tintColor="#f00"
                noRenderContent={true}
                >
                {
                    this.state.tabs.map((tab,idx)=>{
                        return <TabBar.Item
                            title={tab.title}
                            key={tab.path}
                            icon={<img className="navlogo" src={tab.icon}
                            	  />}
                            selectedIcon={<img className="navlogo" src={tab.icon}
                            	  />}
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
HomeNav = withRouter(HomeNav);

export {HomeNav};