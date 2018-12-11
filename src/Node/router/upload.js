const multer=require('multer');
const express=require('express');
const Router=express.Router();
const fs=require('fs');
const path=require('path');


//临时路径
let upload=multer({dest:'upload/'});

Router.post('/images',upload.single('test'),(req,res)=>{
	fs.readFile(req.file.path,(err,data)=>{
		if(err) {return res.send('上传错误')}
		let filename=new Date().getTime()+parseInt(Math.random(0,1)*1000)+"."+req.file.mimetype.split('/')[1];
		fs.writeFile(path.join(__dirname,'../public/images',filename),data,(err)=>{
			if(err) {return res.send('上传失败')}
			let array={
				err:0,
				msg:'ok',
				path:'/images/'+filename
			}
			res.send(array)
		})
	})
})

module.exports=Router;
