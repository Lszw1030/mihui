import React, {
	Component
} from 'react';

import {
	TabBar
} from 'antd-mobile';

import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

import {Home} from './components/Home';
import {Classify} from './components/Classify';
import {Cart} from './components/Cart';
import {OrderFrom} from './components/OrderFrom';
import {My} from './components/My';


//引入ant-design-mobile的样式
import 'antd-mobile/dist/antd-mobile.css';
import './less/page.less';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome,
    faUser,
    faClipboardList,
    faListUl,
    faShoppingCart,
    faAssistiveListeningSystems 
} from '@fortawesome/free-solid-svg-icons';
library.add(
    faHome,
    faUser,
    faClipboardList,
    faListUl,
    faShoppingCart,
    faAssistiveListeningSystems
    )



class App extends Component {
	constructor() {
		super();
		this.state = {
			tabs: [

				{
					title: '首页',
					path: '/home',
					icon: 'home'
				}, {
					title: '分类',
					path: '/classify',
					icon: 'list-ul'
				},
				{
					title: '购物车',
					path: '/cart',
					icon: 'shopping-cart'
				},
				{
					title: '订单',
					path: '/orderFrom',
					icon: 'clipboard-list'
				}, 
				{
					title: '我的',
					path: '/my',
					icon: 'user'
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
	render() {
		return( 
			<div className = "container" >
			 <div className="content">
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/classify" component={Classify} />
            <Route path="/cart" component={Cart} />
            <Route path="/orderFrom" component={OrderFrom} />
            <Route path="/my" component={My} />
            </Switch>
        </div>
				<TabBar
                tintColor="#f00"
                noRenderContent={true}
                >
                {
                    this.state.tabs.map((tab,idx)=>{
                        return <TabBar.Item
                            title={tab.title}
                            key={tab.path}
                            icon={<FontAwesomeIcon icon={tab.icon}/>}
                            selectedIcon={<FontAwesomeIcon icon={tab.icon}/>}
                            selected={this.state.currentTab === idx}
                            onPress={this.handlerClick.bind(this,idx,tab.path)}
                            >
                            {tab.title}
                            </TabBar.Item>
                    })
                }
                
            </TabBar>
			</div>
		);
	}
}
App = withRouter(App);

export default App;