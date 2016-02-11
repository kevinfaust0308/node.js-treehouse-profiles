function printMessage(username, badgeCount, points, topic) {
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in " + topic;
    console.log(message);
}


function printError(e) {
    console.error(e.message);
}

module.exports.printMessage = printMessage;
module.exports.printError = printError;
