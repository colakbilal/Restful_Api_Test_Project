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
        
     `npm insall  frisby --save-dev`
        
 -	Frisby.js uses Jasmine style assertion syntax, and uses Jest to run tests. Install it:
     
     `npm insall  --save-dev jest`
 
 -	To run your tests, open a Terminal or console window, and type jest from the root folder of your project:
    
     `Jest`
