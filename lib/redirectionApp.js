var express = require("express");

var RedirectionMiddleware = require("./RedirectionMiddleware/RedirectionMiddleware.js");
var ClientApp = require("./ClientApp/ClientApp.js");
var ServerApp = require("./ServerApp/ServerApp.js");

module.exports = function start() {
    var app = express();

    var redirectionMiddleware = new RedirectionMiddleware();
    var clientApp = new ClientApp();
    var serverApp = new ServerApp();

    app.use(redirectionMiddleware);
    app.use("/", clientApp);
    app.use("/apiv0/", serverApp);

    app.listen(3000);
};
