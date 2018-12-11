export let addToCart=(goods)=>{
	return {
		type:'ADD_TO_CART',
		payload:goods
	}
}

export let removeGood=(goods)=>{
	return {
		type:'REMOVE_GOOD',
		payload:goods
	}
}


export let sum=()=>{
	return {
		type:'SUM',
	}
}

