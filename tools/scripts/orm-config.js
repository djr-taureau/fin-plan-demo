var fs = require('fs');
var fileName = '../../ormconfig.json';
var config = require(fileName);

var connectionString =
	process.env.TYPEORM_HOST ||
	'mssql://sa:Password123!\@localhost:1433/lifeworks';

config.url = connectionString;

console.log('updating typeorm configuration file.');
fs.writeFile('./ormconfig.json', JSON.stringify(config, null, 2), function(err) {
  if (err) return console.err(err);
  
	console.log(JSON.stringify(config));
	console.log('writing to ' + fileName);
});
