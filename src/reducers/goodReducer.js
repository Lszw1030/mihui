let initState={
	goodslist:[{
		title:"et",
		price:534,
		img:"fe",
		goodnum:1,
		id:"id"
	
	}],

}
let goodReducer=(state=initState,action)=>{
	switch(action.type){
		//更新商品
		case 'UPDATE_GOOD':
			return{
				...state,
				goodslist:[...state.goodslist,action.payload]
			}

		default :
		return state;
	}
}
 
 export default goodReducer;
 