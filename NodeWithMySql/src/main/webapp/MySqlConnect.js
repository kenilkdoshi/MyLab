var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'TRAX'
});


resp = function(callback)
{
	connection.connect();
	connection.query('SELECT * from Trade limit 10', function (error, results, fields) {
		console.log(error);
		if (error) throw error;
  for(var i = 0; i < 10; i++)
	  {
	  console.log('The ID is: ', results[i].trade_id);
  		console.log('The Date is: ', results[i].trade_date);
  		console.log('The Type is: ', results[i].trade_type);
  		
	  }
  connection.end();
  callback(JSON.stringify(results));
})
};

module.exports.resp = resp;