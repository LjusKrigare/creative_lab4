var express = require('express');
fs = require('express');
var fs = require('fs');
var https = require('https');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
     res.sendFile('home-page.html', { root:  'public' }); 
});

router.get('/getcity',function(req,res,next) {


	fs.readFile(__dirname + '/cities.dat.txt', function(err,data) {
	  if(err) throw err;
	  var jsonresult = [];
	  var cities = data.toString().split("\n");
	  var myRe = new RegExp("^" + req.query.q);
	  for(var i = 0; i < cities.length; i++) {
 		 var result = cities[i].search(myRe); 
 		 if(result != -1) {
 		   console.log(cities[i]);
 		   jsonresult.push({city:cities[i]});
 		 } 
	}   
console.log(jsonresult);
res.status(200).json(jsonresult);

 
})

  });

module.exports = router;
