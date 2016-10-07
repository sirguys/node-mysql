var mysql = require('mysql')
var server = {
	host: 'appspeed.us',
	user: 'bill',
	password: 'bill123',
	database: 'starbug'}
var pool = mysql.createPool(server)
var app = require('express')()
app.listen(3000)
app.get('/budget', listByBudget)

function listByBudget(req, res) {
	// req.query.price
	pool.query("select * from coffee where price <= ?",
		[req.query.price], (error, data) => {
			res.send(data);
		});
}

app.get('/list', listData)
function listData(req, res) {
	pool.query("select * from coffee", 
		function(error, data) {
			res.send(data);
		});
}

/*
pool.query("select * from coffee", show)
function show(error, data) {
	console.log(data)
}
*/