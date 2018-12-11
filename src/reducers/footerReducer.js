let initState={
	tabstate:true
}

let footerReducer=(state=initState,action)=>{
	switch(action.type){
		case 'CHANGE_TAB':
		return{
			...state,
			tabstate:action.payload
		}
		default :
		return state;
	}
}

export default footerReducer;
