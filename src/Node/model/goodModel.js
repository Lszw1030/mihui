const mongoose=require('mongoose')

let Schema=mongoose.Schema;

let goodSchema=new Schema({
	name:{type:String,required:true},
	img:{type:String,required:true},
	type:{type:String,required:true},
	price:{type:Number,required:true},
	dest:{type:String,required:true},
	num:{type:Number,required:true}
})


let goodmodel= mongoose.model('good', goodSchema);
module.exports=goodmodel;

