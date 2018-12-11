import React,{Component} from 'react';


import {withRouter} from 'react-router-dom';
import { Button} from 'antd-mobile';


function AddToBag (props){

	let {state:goods} = props.location;
	//console.log(goods)
	let goBack=()=>{
		let atb=document.querySelector('.addToBag');
		atb.style.display="none";
		//console.log(atb)
	}
	let goodnum=document.querySelector('.goodnum');
	let numdown=document.querySelector('.numdown');
	let numup=document.querySelector('.numup');
	let numChange=()=>{}
	let numDown=()=>{
		goodnum.value--;
		if(goodnum.value<=1){
			
			numdown.style.color="#222";
			
			goodnum.value=1;
		}
		else if(goodnum.value>1){
			numdown.style.color="#ff5b61";
			numup.style.color="#ff5b61";
		}
	}
	let numUp=()=>{
		goodnum.value++;
		if(goodnum.value>=5){
			numup.style.color="#222";
			goodnum.value=5;
		}
		else if(goodnum.value<5){
			numup.style.color="#ff5b61";
			numdown.style.color="#ff5b61";
		}
		
	}
		return <div>
				
				<div className="addToBag">
					<div className="shade"></div>
					<div className="addgood">
						<div className="goingo">
							<img src={goods.pic}/>
							<div className="title">
								<p>
									<span className="price">￥{((goods.price)*0.8).toFixed(2)}</span>
									<i className="fa fa-times-circle-o" onClick={goBack}></i>
								</p>
								<p>库存: {goods.stock} 件</p>	
								<p>运费:
									<span> {goods.marketPrice} </span>
								</p>
								<p>{goods.sellerInfo.name}</p>
							</div>
						</div>
						<div className="goodtype">
							<div className="typetitle">
								<p>规格分类 :</p>
								<div className="types">
								  <Button type="primary" 
								  	inline size="small" 
								  	style={{ marginRight: '4px' }}
								  	>primary</Button>
								  	
								</div>
							</div>
						</div>
						<div className="adNum">
							<div className="adNum-left">
								<span>购买数量  </span>
								<span> (限购5件) :</span>
							</div>
							<div className="adNum-right">
								<input type="button" className="numdown" onClick={numDown} value="-" />
								<input type="text" className="goodnum" onChange={numChange} value="1" />
								<input type="button" className="numup" onClick={numUp} value="+" />
							</div>
						</div>
						<div id="submit">
							<Button type="warning">确定</Button>
						</div>
					</div>
				</div>
		</div>
	
}
AddToBag = withRouter(AddToBag);

export {AddToBag};