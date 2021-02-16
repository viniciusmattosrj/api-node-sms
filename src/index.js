require('dotenv').config(); 
const axios = require('axios');
const { 
	url, 
	method, 
	smsTokenApi, 
	smsNumberReceiver 
} = require('./config/credentials.js');

(async function () {
	const sms = await axios({
		url,
		method,
		headers: {
			'Access-Token': smsTokenApi
		},
		data: {
			'numero_destino': smsNumberReceiver,
			'mensagem': 'Aê, faz um PIX pro geladão namoral 3!' 
		}
	});
	console.log(sms.data);
})();