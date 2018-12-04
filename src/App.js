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

import {Footer} from "./components/Commons/Footer";

//引入ant-design-mobile的样式
import 'antd-mobile/dist/antd-mobile.css';
import './less/page.less';


class App extends Component {
	
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
        	<div>
        		<Footer></Footer>
        	</div>
			</div>
		);
	}
}
App = withRouter(App);

export default App;