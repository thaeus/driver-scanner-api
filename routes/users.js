var express = require('express');
var router = express.Router();
const { Curl } = require('node-libcurl');
const querystring = require('querystring');

const curl = new Curl();

/* GET users listing. */
router.get('/', function(req, res, next) {

var output = "";
	const data = {
		'houseNumber': '8036',
		'birthMonth': '05',
		'birthDay': '20',
		'birthYear': '1982',
		'zipCode': '92111'
	}

	curl.setOpt('URL', 'https://www2.sdcounty.ca.gov/rov/Eng/Voters_found.asp');
	curl.setOpt('FOLLOWLOCATION', true);
	curl.setOpt(Curl.option.POSTFIELDS, querystring.stringify(data))
	curl.setOpt(Curl.option.VERBOSE, false)

	curl.on('end', function (statusCode, data, headers) {
	//	console.info(statusCode);
	//	console.info('---');
	//	console.info(data);
	res.send(data);
	//	console.info('---');
	//	console.info(this.getInfo( 'TOTAL_TIME'));
		this.close();
	});

	curl.on('error', curl.close.bind(curl));
	curl.perform();



	//	curl -d "" -H "Content-Type: application/x-www-form-urlencoded" -X POST 

});

module.exports = router;
