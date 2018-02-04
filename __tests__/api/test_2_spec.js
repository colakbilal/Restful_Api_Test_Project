const frisby = require('frisby');
const Joi = frisby.Joi;


it('should response contains "result" object and type of it is Array ', function (done) {
  frisby
	.fetch('http://services.groupkt.com/state/get/USA/all', {method: 'GET'})
	.expect('status', 200)
	.expect('json','RestResponse.result')
        .then(function(response){
	   expect(response.json.RestResponse.result instanceof Array).toBe(true)
	})
	.done(done);
});


it ('should result elements has correct keys and verify types of some key value ', function (done) {
  frisby
        .fetch('http://services.groupkt.com/state/get/USA/all', {method: 'GET'}) 
	.expect('jsonTypes', 'RestResponse.result.*', {
		id: Joi.number(),
		country: Joi.string()
	})
	.then(function(response){
		const array = response.json.RestResponse.result;		
		array.forEach(item =>{
			expect(Object.keys(item)).toEqual(['id','country','name','abbr','area','largest_city','capital'])
		});					
	})
	.done(done);
});

