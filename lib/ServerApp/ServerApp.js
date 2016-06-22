var express = require("express");
var bodyParser = require("body-parser");

var kvfs = require("kvfs")(".data");

var createUser = require("./endpoints/createUser.js");
var getUser = require("./endpoints/getUser.js");

var createRedirection = require("./endpoints/createRedirection.js");

module.exports = function start() {
    var app = express();

    app.use(bodyParser.json());

    app.get("/", (req, res) => { res.send("Hello Server"); });

    app.post("/users", createUser(kvfs));
    app.get("/users/:userId", getUser(kvfs));

    app.post("/redirections", createRedirection(kvfs));
    app.get("/redirections/:redirectionId", (req, res) => { res.send("this is redirection: " + req.params.redirectionId); });

    return app;
};
