var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'TRAX'
});

connection.connect();

module.exports = {
	listTradesFromDB : function(callback) {
		connection.query('SELECT * from Trade limit 10', function(error,
				results, fields) {
			console.log(error);
			if (error)
				throw error;
			for (var i = 0; i < 10; i++) {
				console.log('The ID is: ', results[i].trade_id);
				console.log('The Date is: ', results[i].trade_date);
				console.log('The Type is: ', results[i].trade_type);

			}
			callback(JSON.stringify(results));
		})
	},
	addTags: function(callback)
    {
		var date = new Date();
        connection.query(
            "INSERT INTO Trade VALUES (?, ?, ?)",
            [102, date, "VIS"],
            function(err, results, fields)
            {
                if (err) throw err;
            }
        )
        callback(JSON.stringify("101"));
    }
}

//module.exports.resp = resp;