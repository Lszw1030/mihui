'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing

//nodemailer.createTestAccount((err, account) => {
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		service: 'qq', //邮箱的服务商
		port: 465,
		secure: true, // true for 465, false for other ports
		auth: {
			user: "1471139661@qq.com", // 默认邮箱
			pass: 'zjtixtlbggebbafd' // 授权码
		}
	});
//});
// setup email data with unicode symbols
//发送邮件的相关信息
//	let mailOptions = {
//		from: '1471139661@qq.com', // sender address
//		to: '1471139661@qq.com', // list of receivers
//		subject: 'Hello ✔', // Subject line
//		text: 'Hello world?', // plain text body
//		html: '<b>Hello world?</b>' // html body
//	};

// send mail with defined transport object

function sendmail(mail, msg) {
	return new Promise((resolve, reject) => {
		//console.log(mail)
		//console.log(msg)
		let mailOptions = {
			from: '1471139661@qq.com', // sender address
			to: mail, // list of receivers
			subject: '管理系统邮箱验证,您的验证码为', // Subject line
			text: msg// plain text body
			//html: '<b>Hello world?</b>' // html body
		};
		transporter.sendMail(mailOptions, (error, info) => {
			  if (error) {reject(error)}
              resolve('ok')

			
		});
	})
}
module.exports = {
	sendmail
};