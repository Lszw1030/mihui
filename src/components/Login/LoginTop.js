import React,{Component} from 'react';


import {withRouter} from 'react-router-dom';
import {ThirdLogin} from './ThirdLogin';



class LoginTop extends Component{
	constructor(){
		super();
		this.state={
			loginTitle:''
		}
	}
	componentWillMount(){
		this.state.loginTitle=localStorage.getItem('loginTitle');
		//console.log(localStorage.getItem('loginTitle'))
	}
	goback(){
		let {history} = this.props;
		history.push('/login/userLogin');
	}
	render(){
		return <div>
				<div className="loginTop">
					<i className="fa fa-long-arrow-left"
						onClick={this.goback.bind(this)}
					></i>
					<p>{this.state.loginTitle}</p>
				</div>
		</div>
	}
}
LoginTop = withRouter(LoginTop);

export {LoginTop};