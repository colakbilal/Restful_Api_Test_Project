const frisby = require('frisby');
const _ = require("lodash");


it('should fetch successfully and the response should contains "RestResponse" object', function (done) {
  frisby
    .fetch('http://services.groupkt.com/country/get/all', {method: 'GET'})
    .expect('status', 200)
    .expect('json', "RestResponse")
    .expect('header', 'content-type', /application\/json/)
    .done(done);
}); 


it('should has a result array property with 249 length', function (done) {
  frisby
    .fetch('http://services.groupkt.com/country/get/all', {method: 'GET'})
    .expect('json', "RestResponse.result")
    .then(function(response) {
	  expect(response.json.RestResponse.result instanceof Array).toBe(true);
      expect(response.json.RestResponse.result.length).toBe(249);  
    })
    .done(done);
});


it ('should has an object with correct "Turkey" data', function (done) {
  frisby
    .fetch('http://services.groupkt.com/country/get/all', {method: 'GET'})   
    .then(function (response) {     
      expect(response.json.RestResponse.result.find(country => country.name === 'Turkey')).toEqual({"alpha2_code": "TR", "alpha3_code": "TUR", "name": "Turkey"});
    })
    .done(done);
});


it ('should be sorted alphabetically', function (done) {
  frisby
    .fetch('http://services.groupkt.com/country/get/all', {method: 'GET'}) 
    .then(function (response) {
      const correctVersion = _.orderBy(response.json.RestResponse.result, country => country.name);
      response.json.RestResponse.result.forEach((value, i) => {
        expect(value).toEqual(correctVersion[i]);
      });
    })
    .done(done);
});
