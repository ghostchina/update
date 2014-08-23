/**
 * Created by liuxing on 14-8-24.
 */
var http = require('http');
var data = {
    address: 'test@test.com',
    subject: "test"
};

data = require('querystring').stringify(data);
console.log(data);
var opt = {
    method: "get",
    host: "localhost",
    port: 3000,
    headers: {
        "Content-Type": 'application/x-www-form-urlencoded',
        "Content-Length": data.length
    }
};

var req = http.request(opt, function (serverFeedback) {
    if (serverFeedback.statusCode == 200) {
        var body = "";
        serverFeedback.on('data', function (data) { body += data; });
        serverFeedback.on('end', function () { });
    }

});
req.write(data + "\n");
req.end();