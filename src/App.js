import React, {
	Component
} from 'react';
import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

import {
	TabBar
} from 'antd-mobile';

import {Home} from './components/Home';
import {Classify} from './components/Classify';
import {Cart} from './components/Cart';
import {OrderFrom} from './components/OrderFrom';
import {My} from './components/My';
import {Information} from "./components/Information";
import {Login} from "./components/Login";

import {Footer} from "./components/Commons/Footer";

//引入ant-design-mobile的样式
import 'antd-mobile/dist/antd-mobile.css';
import './less/page.less';


import store from './store';
import {addToCart,removeGood,sum} from './actions/cartAction'
import {update} from './actions/goodAction'



class App extends Component {
	
	render() {
		return( 
			<div className = "container" >
			 <div className="content">
        	<Switch>
            <Route path="/home" component={Home} />
            <Route path="/classify/:id" component={Classify} />
            <Route path="/cart" component={Cart} />
            <Route path="/orderFrom" component={OrderFrom} />
            <Route path="/my" component={My} />
            <Route path="/login" component={Login} />
            <Route path="/information" exact  component={Information} />
            <Route path="/information/:id" component={Information} />
            <Redirect from='/' to='/home' exact />
            </Switch>
        	</div>
        	<div>
        		<Footer></Footer>
        	</div>
			</div>
		);
	}
}
App = withRouter(App);

export default App;