var https = require('https');
var http = require('http');
var printer = require('./printer.js');


function getProfile(username, topic) {
  
    https.get('https://teamtreehouse.com/' + username + '.json', function(response) {
      
        if (response.statusCode === 200) {       
            var body = ""; 
            
            response.on('data', function(chunk) {
                body += chunk;
            });
            
            response.on('end', function() {          
                try {
                    var profile = JSON.parse(body);
                    printer.printMessage(profile.name, profile.badges.length, profile.points[topic], topic);
                } catch (e) {
                    printer.printError(e);
                }
              });

        } else {
          //error 
            printer.printError({'message': "there was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
        };
    }).on('error', printer.printError);
}


module.exports.get = getProfile;


