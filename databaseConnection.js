const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

//mysql://dm43nenf038xtz5v:hgn39hisp3a0ypex@bmlx3df4ma7r1yh4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/epyvfbg6yj8cbpkc
const dbConfigHeroku = {
	host: "bmlx3df4ma7r1yh4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "dm43nenf038xtz5v",
	password: "hgn39hisp3a0ypex",
	database: "epyvfbg6yj8cbpkc",
	multipleStatements: false
};

const dbConfigLocal = {
	host: "bmlx3df4ma7r1yh4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "dm43nenf038xtz5v",
	password: "hgn39hisp3a0ypex",
	database: "epyvfbg6yj8cbpkc",
	multipleStatements: false
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		