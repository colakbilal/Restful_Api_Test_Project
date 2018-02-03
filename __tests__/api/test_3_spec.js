const frisby = require('frisby');


it('should find india alpha3code and then use it on another service call ', function (done) {
  frisby
	.fetch('http://services.groupkt.com/country/get/all', {method: 'GET'})	
    .expect('status', 200)
	.then(function(response){
		const india = response.json.RestResponse.result.find(country => country.name==='India');
		const codeIndia = india.alpha3_code;
		return frisby
		          .fetch('http://services.groupkt.com/state/get/'+ codeIndia + '/all', {method: 'GET'})
			      .expect('status', 200)
			      .then(function(response){
					  const state = response.json.RestResponse.result.find(item => item.id===65);
				      expect(state.largest_city).toEqual('Srinagar Jammu')
			        })
	})
	.done(done);
});