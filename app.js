var profile = require('./profile.js');

var topic = process.argv[2];
var users = process.argv.slice(3);

users.forEach(function(user) {
    profile.get(user, topic);
});
