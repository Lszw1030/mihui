
import axios from 'axios';
var AJAX={
	ajax:function(url, data) {
	axios.get(url, {
			params: data
		})
		.then((res) => {
			data=res.data
			
//			return data;
		})
		.catch((err) => {
			console.log(err)
		})
		}

}
export default AJAX;