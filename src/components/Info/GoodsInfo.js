import React,{Component} from 'react';


import {withRouter} from 'react-router-dom';


function GoodsInfo (props){

	let {state:goods} = props.location;
		return <div>
				<div className="goodsInfo">
					<img src={goods.pic}/>
					<div className="title">
						<h1>{goods.name}</h1>
						<div>
							<p className="goodsprice">
								<span>{((goods.price)*0.8).toFixed(2)}</span>
								<span>原价:{goods.price}</span>
								<span>税费</span>
							</p>
							<span className="getmoney">赚钱</span>
						</div>
					</div>
				</div>
		</div>
	
}
GoodsInfo = withRouter(GoodsInfo);

export {GoodsInfo};