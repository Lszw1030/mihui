import React,{Component} from 'react';

import {withRouter} from 'react-router-dom';
import { NavBar} from 'antd-mobile';

class MinHeader extends Component{
	constructor() {
		super();
		this.state = {
			
		}
	}
	
	componentWillMount(){
        

    }
	goBack(){
		this.props.history.go(-1);
	}
	render(){
		return (<div>
				<div className="minHeader">
				 <NavBar
			      mode="light"
			      icon={<i onClick={this.goBack.bind(this)} className="fa fa-arrow-left" type="left" />}
			      onLeftClick={() => console.log('onLeftClick')}
			      rightContent={[
			        <i className="fa fa-share-alt" key="0" type="search" style={{ marginRight: '16px' }} />
			   
			      ]}
    			>蜜惠</NavBar>
            </div>
		</div>)
	}
}
MinHeader = withRouter(MinHeader);

export {MinHeader};