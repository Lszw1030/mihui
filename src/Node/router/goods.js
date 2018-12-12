const express = require('express');
const Router = express.Router();

//console.log(123)
const goodModel = require('../model/goodModel.js')
//const mail = require('../mail.js')

const utli = require('../utlis/utli.js');

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
//
var obj = {};
Router.post('/goodslist', (req, res) => {
	let pageSize=Number(req.body.pageSize);
	let target=Number(req.body.target);
	let total=0;
	goodModel.find()
	.then(res=>{
		total=res.length
		return goodModel.find().limit(pageSize).skip((target-1)*pageSize)
	})
//	goodModel.find().limit(pageSize).skip((target-1)*pageSize)
	.then((data) => {
		let array={
			total:total,
			data:data
		}
		res.send(utli.sendData(0, '请求成功', array))
	})
	.catch((err)=>{
		res.send(utli.sendData(-1, '请求错误', null))
	})
})

//添加商品信息
Router.post('/addgood', (req, res) => {
	//console.log(req.body)
	let {name,img,price,num,id}=req.body;

	goodModel.insertMany({name,img,price,num,id})
	.then((data) => {
		res.send(utli.sendData(0, '添加成功', data))
		//console.log(res.data)
	})
	.catch((err)=>{
		console.log(err)
		res.send(utli.sendData(-1, '添加失败', null))
	})
})

//购物车查询
Router.post('/cartlist', (req, res) => {
	goodModel.find()
	.then((data) => {
		
		res.send(utli.sendData(0, '请求成功', data))
	})
	.catch((err)=>{
		res.send(utli.sendData(-1, '请求错误', null))
	})
})
//修改数据
Router.post('/updategood', (req, res) => {
	let {name,img,price,num,id}=req.body;
	
	goodModel.update({_id:id},{name:name,img:img,type:type,price:price,dest:dest,num:num})
	.then((data) => {
		res.send(utli.sendData(0, '修改成功', data))
	})
	.catch((err)=>{
		console.log(err)
		res.send(utli.sendData(-1, '修改失败', null))
	})
})

//删除商品
Router.post('/delgood', (req, res) => {
	let id=req.body.id;
	if(!id) {res.send(utli.sendData(-1, '参数错误', null))}
	goodModel.deleteOne({_id:id})
	.then((data) => {
		res.send(utli.sendData(0, '删除成功', data))
	})
	.catch((err)=>{
		res.send(utli.sendData(-1, '删除失败', null))
	})
})

//删除商品
Router.post('/delmanygood', (req, res) => {
	let id=JSON.parse(req.body.id);
	let _id=id.id;
	console.log(_id)
	if(!_id) {res.send(utli.sendData(-1, '参数错误', null))}
	goodModel.remove({_id:{$in:_id}})
	.then((data) => {
		res.send(utli.sendData(0, '删除成功', data))
	})
	.catch((err)=>{
		res.send(utli.sendData(-1, '删除失败', null))
	})
})

//分类查询商品
Router.post('/goodByType', (req, res) => {
	let type=req.body.type;
	let pageSize=Number(req.body.pageSize);
	let target=Number(req.body.target);
	let total=0;
	//goodModel.find({type:type})
	//if(!type) {res.send(utli.sendData(-1, '参数错误', null))}
	goodModel.find({type:type})
	.then(res=>{
		total=res.length;
		return goodModel.find({type:type}).limit(pageSize).skip((target-1)*pageSize)
	})
	.then((data) => {
		let array={
			total:total,
			data:data
		}
		res.send(utli.sendData(0, '查询成功', array))
	})
	.catch((err)=>{
		res.send(utli.sendData(-1, '查询失败', null))
	})
})

//根据对应_id查询数据
Router.post('/goodBy_Id', (req, res) => {
	
	let id=req.body.id;
	if(!id) {res.send(utli.sendData(-1, '参数错误', null))}
	goodModel.find({_id:id})
	.then((data) => {
		res.send(utli.sendData(0, '查询成功', data))
	})
	.catch((err)=>{
		res.send(utli.sendData(-1, '查询失败', null))
	})
})

//模糊查询
Router.post('/goodbyWord', (req, res) => {
	
	let name=req.body.name;
	let type=req.body.type;
	let pageSize=Number(req.body.pageSize);
	let target=Number(req.body.target);
	let total=0;
	goodModel.find({name:{$regex:name}})
	.then(res=>{
		total=res.length
		return goodModel.find({name:{$regex:name}}).limit(pageSize).skip((target-1)*pageSize)
	})
	//if(!id) {res.send(utli.sendData(-1, '参数错误', null))}
	//goodModel.find({name:{$regex:name}})
	.then((data) => {
		let array={
			total:total,
			data:data
		}
		res.send(utli.sendData(0, '查询成功', array))
		//console.log(res.data)
	})
	.catch((err)=>{
		//console.log(err)
		res.send(utli.sendData(-1, '查询失败', null))
	})
})

module.exports = Router;