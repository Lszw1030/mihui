const express=require('express');
const app=express();
const db=require('./dbmihui.js');
const bodyParser=require('body-parser');
const path=require('path');
const cors=require('cors');


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'./public')))
app.use('/admin',express.static(path.join(__dirname,'./admin')))
app.use(cors());

const user=require('./router/user.js');
//const upload=require('./router/upload.js');
const goods=require('./router/goods.js');

app.use('/api/user',user);
//app.use('/api/upload',upload);
app.use('/api/goods',goods);

app.listen(3003,()=>{
	console.log('服务器开启成功');
})
