const database = include('/databaseConnection');


function getAllUsers(callback) {
	let sqlQuery = "SELECT * FROM epyvfbg6yj8cbpkc.web_user;";
	database.query(sqlQuery, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});
}


module.exports = {getAllUsers}
