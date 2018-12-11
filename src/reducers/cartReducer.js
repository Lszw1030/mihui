let initState={
	goodslist:[{
		title:"et",
		price:534,
		img:"fe",
		goodnum:1,
		id:"id"
	
	}],
	total:0
}
let cartReducer=(state=initState,action)=>{
	switch(action.type){
		//添加商品
		case 'ADD_TO_CART':
			return{
				...state,
				goodslist:[...state.goodslist,action.payload]
			}
			//删除商品
		case 'REMOVE_GOOD':	
			return{
				...state,
				//找出并保留与商品id不一样的商品
				goodslist:state.goodslist.filter(goods=>goods.id!=action.payload.id)
			}
		//计算总价
		case 'SUM':	
			return{
				...state,
				total:state.goodslist.reduce((prev,current)=>prev+current.price,0)
			}
		default :
		return state;
	}
}
 
 export default cartReducer;
 