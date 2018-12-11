import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {
	Button
} from 'antd-mobile';


class GoodFooter extends Component{
	constructor() {
		super();
		this.state = {
			btnAdd:"加入购物车",
			btnBuy:"立即购买"
		}
	}
	
	componentWillMount(){
        
    }
	goToBuy(){
		let atb=document.querySelector('.addToBag');
		atb.style.display="block";
		window.localStorage.setItem('BuyOrAdd',"buy");
	}
	goToAdd(){
		let atb=document.querySelector('.addToBag');
		atb.style.display="block";
		window.localStorage.setItem('BuyOrAdd',"add");
	}
	render(){
		return <div>
				<div className="goodFooter">
					<div className="goodFooter-left">
						<i className="fa fa-shopping-basket"></i>
						<i className="fa fa-commenting"></i>
					</div>
					<div className="goodFooter-right">
						<Button type="ghost" onClick={this.goToAdd} inline size="small" 
							style={{ marginRight: '4px',color:'#ff9195'  }}>{this.state.btnAdd}</Button>
						<Button type="primary" onClick={this.goToBuy} inline size="small" 
							style={{ marginRight: '4px' ,background:'#ff9195' }}>{this.state.btnBuy}</Button>
					</div>
            </div>
		</div>
	}
}

GoodFooter = withRouter(GoodFooter);

export {GoodFooter};