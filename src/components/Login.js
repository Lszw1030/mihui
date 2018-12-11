import React,{Component} from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import axios from 'axios';


import {withRouter,Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import tab from '../actions/footerAction.js';

import {UserReg} from './Login/UserReg';
import {UserLogin} from './Login/UserLogin';
import {PhoneLogin} from './Login/PhoneLogin';
import {BusinessReg} from './Login/BusinessReg';

class Login extends Component{
	constructor(){
		super();
		this.state = {
			type: 0,
			list:['0','1','2','3']
		};

		 
	}
	componentWillMount(){
		
		this.props.changeTabbarStatus(false);
		
	}
	componentWillUnmount(){
		this.props.changeTabbarStatus(true);
	}
	
	render(){
		return <div>
				<div className="users">
				<Switch>
	            <Route path="/login/userReg" component={UserReg} />
	            <Route path="/login/userLogin" component={UserLogin} />
	            <Route path="/login/phoneLogin" component={PhoneLogin} />
	            <Route path="/login/businessReg" component={BusinessReg} />
	            <Redirect from='/login' to='/login/userLogin' exact />
	            </Switch>
				</div>
				<div className="login">
				  
				</div>
		</div>
	}
}
let mapDispatchToProps=dispatch=>{
	return {
		changeTabbarStatus(status){
			dispatch(tab(status))
		}

	}

}
Login=connect(null,mapDispatchToProps)(Login)
Login = withRouter(Login);

export {Login};