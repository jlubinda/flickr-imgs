var express = require('express');
var router = express.Router();

// import https module
const https = require('https');

//var Flickr = require('flickr-sdk');

//var feeds = new Flickr.Feeds();


https.globalAgent.maxSockets = 100;




/* GET request to Flickr. */
router.get('', function(req, res, next) {
	
	res.setHeader('Access-Control-Allow-Origin', '*');

    var mytags = ''
    //var res = feeds.publicPhotos([{args}])
    //https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=3f9cd16877be4163af942c68a64a4bd1&text=rockets
    var options = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags='+mytags
    
    https.get(options, (resp) => {
        let data = '';
      
        // A chunk of data has been received.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
			var output = JSON.parse(data);
			res.send(output.items);
        });
      
      }).on("error", (err) => {
        res.send("Error: " + err.message);
    });
});


/* make GET request to Flickr, with tags. */
router.get('/:tags', function(req, res, next) {
    var mytags = req.params.tags;
	
	res.setHeader('Access-Control-Allow-Origin', '*'); //disable blocking Cross Origin  Domain Blocking for this API.
    
    var options = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags='+mytags;
    
    https.get(options, (resp) => {
        let data = '';
      
        // A chunk of data has been received.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            var output = JSON.parse(data)
			res.send(output.items);
        });
      
      }).on("error", (err) => {
        res.send("Error: " + err.message);
    });
});

module.exports = router;
