# Frisby_API_Test Project
 
## About This Project

- In this Project, tests have been written for http://services.groupkt.com/country/get/all and http://services.groupkt.com/state/get/{country_code}/all Restful API services by using Frisby test automation tool

-	There are 3 total test requirements. The scope of the tests is specified in the 'Test Otomasyon Proje Ödevleri' file.

-	In general, tests have been written as follows:
       -	Verification of the objects in the response message,
       -	Verification of the presence and types of the keys in the array 
       -	Verification of some values by using chain method




## Required Software Installations 
 
 - NodeJS required to start.

 -	To get started with Frisby.js, add it to your project as a dev dependency:
        
     `npm install  frisby --save-dev`
        
 -	Frisby.js uses Jasmine style assertion syntax, and uses Jest to run tests. Install it:
     
     `npm install  --save-dev jest`
 
 -	To run your tests, open a Terminal or console window, and type jest from the root folder of your project:
    
     `Jest`
 
 - If you need to do something custom like send requests through a **proxy**, you can also use fetch method directly 
   with custom options from the fetch spec.                                                                                    
            You can  install  HttpProxyAgent (HttpsProxyAgent)   and use in fetch method.
   
   `npm install https-proxy-agent`
   
## Test-1
  Test Folder: test_1_spec.js  

  **Run Test with following command:**
   `jest test_1_spec.js` 
   
   
## Test-2
  Test Folder: test_2_spec.js  

  **Run Test with following command:**
   `jest test_2_spec.js` 


## Test-3
  Test Folder: test_3_spec.js  

  **Run Test with following command:**
   `jest test_3_spec.js` 



## References
  - https://github.com/vlucas/frisby
  - https://www.frisbyjs.com/http.html
  - https://www.npmjs.com/package/frisby
  - https://ian_lin.gitbooks.io/javascript-testing/content/chapter6.html
  - https://ptmccarthy.github.io/2014/06/28/rest-testing-with-frisby/
  - http://www.brendanconnolly.net/testing-with-frisby/
  - https://jasmine.github.io/2.4/introduction.html
  - https://facebook.github.io/jest/docs/en/api.html
  - https://github.com/vlucas/frisby/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aall
  - https://github.com/iangemtek/SimpleFrisbyExample/blob/master/node_modules/frisby/spec/frisby_global_spec.js
  - https://itmastermindblog.wordpress.com/2016/02/18/frisby-js-commands/
  - https://github.com/verdverm/frisby
  - https://lodash.com/docs/4.17.4#orderBy 
  - https://www.npmjs.com/package/https-proxy-agent
  

 
