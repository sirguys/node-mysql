var mysql = require('mysql')
var server = {
	host: 'appspeed.us', //127.0.0.1 , localhost
	user: 'bill',
	password: 'bill123',
	database: 'starbug'}
var pool = mysql.createPool(server)
var app = require('express')()
var ejs = require('ejs')
app.engine('html', ejs.renderFile)
app.listen(3000)
app.get('/', showCoffee)

function showCoffee(req, res) {
	pool.query("select * from coffee", (error, data) => {
		res.render('home.html', {coffee: data}) //จะส่งค่าไปต้องเป็น Obj และต้องมี key: values
	})
}






// var connection = mysql.createConnection(server)
// connection.connect()
// connection.query(`
// 	insert into coffee(name, size, price)
// 	values('Mocha', 'T', 125)
// `)
// connection.query("select * from coffee", show)
// connection.end()

// function show(error, data) {
// 	console.log(data)
// }
