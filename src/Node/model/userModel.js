const mongoose=require('mongoose')

let Schema=mongoose.Schema;

let userSchema=new Schema({
	user:{type:String,required:true},
	password:{type:String,required:true},
	email:{type:String}
})


let usermodel= mongoose.model('user', userSchema);
module.exports=usermodel;