const express=require('express');
const Router=express.Router();

//console.log(123)
const userModel=require('../model/userModel.js')
//const mail=require('../mail.js')

const utli=require('../utlis/utli.js');


	/**
 * @api {post} /user/reg/  reg
 * @apiName Reg
 * @apiGroup User
 *
 * @apiParam {String} us Users unique ID.
 * @apiParam {String} pass Users unique ID.
 * 
 * @apiSuccess {String} err Firstname of the User.
 * @apiSuccess {String} msg  Lastname of the User.
 */
//注册
Router.post('/reg',(req,res)=>{
	//res.send('11111')
	console.log(req.body)
	let {user,password}=req.body;
	userModel.find({user})
	.then((data)=>{
		if(data.length>=1) {return res.send(utli.sendData(0,'用户已存在',null))}
		else{
			userModel.insertMany({user,password})
			.then((data)=>{
				res.send(utli.sendData(0,'注册成功，请登录',null))
			})
			.catch((err)=>{
				console.log(err)
				res.send(utli.sendData(-1,'注册失败',null))
			})
			
		}
	})
	
})

 	/**
 * @api {post} /user/login/  login
 * @apiName Login
 * @apiGroup User
 *
 * @apiParam {String} us Users unique ID.
 * @apiParam {String} pass Users unique ID.
 * 
 * @apiSuccess {String} err Firstname of the User.
 * @apiSuccess {String} msg  Lastname of the User.
 */
//登录
Router.post('/login',(req,res)=>{
	let {user,password}=req.body;
	userModel.find({user,password})
	.then((data)=>{
		if(data.length>=1) {return res.send(utli.sendData(0,'登录成功',null))}
		else{
			userModel.find({user})
			.then((data)=>{
				if(data.length>=1) {return res.send(utli.sendData(0,'密码错误',null))}
				res.send(utli.sendData(-1,'请先注册',null))
			})
		}
		
	})
})
/**
 * @api {post} /user/getcode/  获取邮箱验证码
 * @apiName getcode
 * @apiGroup User
 *
 * @apiParam {String} email 用户邮箱

 * 
 * @apiSuccess {String} err Firstname of the User.
 * @apiSuccess {String} msg  Lastname of the User.
 */
//邮箱
//var obj={};
//Router.post('/getcode',(req,res)=>{
//	let {email}=req.body;
//	//console.log(utli)
//	if(!email||email=="") {return res.send(utli.sendData(-1,'参数错误',null))}
//	let mailnum=parseInt(Math.random(0,1)*10000).toString();
//	mail.sendmail(email,mailnum)
//	.then((resolve)=>{
//		obj[email]=mailnum;
//		console.log(obj);
//		res.send(utli.sendData(0,'验证码已发送',null))
//	})
//	.catch((err)=>{res.send(utli.sendData(-1,'验证码发送失败',null))})
//
//})

module.exports=Router;