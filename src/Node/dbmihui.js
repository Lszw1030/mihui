const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/mihui',{ useNewUrlParser: true });

let db=mongoose.connection;
db.on('error',()=>{console.log('connection error:')});
db.on('open', function() {
	console.log("we're connected!") 
});
db.on('disconnected',function(){
	console.log('数据库连接断开');
});

//schema对象
//let Schema = mongoose.Schema;
////
//let userSchema=new Schema({
//	us:{type:String,required:true},
//	ps:{type:String,required:true}
//})
////type 字段类型      required  是否必须填写
//
//let usermodel= mongoose.model('user', userSchema);
////参数1 ： 集合名       参数2 ： Schema对象
//
//usermodel.insertMany({us:'123',ps:'456'})
//.then((data)=>{
//	console.log(data)
//})
//.catch((err)=>{
//	console.log(err)
//})
//
//usermodel.find()
//.then((data)=>{
//	console.log(data)
//})
//.catch((err)=>{
//	console.log(err)
//})

