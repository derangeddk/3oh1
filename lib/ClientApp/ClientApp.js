var express = require("express");
var fs = require("fs");
var path = require("path");
var mustache = require("mustache");

module.exports = function start() {
    var app = express();

    app.get("/", (req, res) => {
        var layout = fs.readFileSync(path.join(__dirname, "layout.html")).toString();
        var content = fs.readFileSync(path.join(__dirname, "home.html")).toString();
        res.send(mustache.render(layout, { content: content }));
    });
    app.get("/dashboard-preview", (req, res) => {
        var layout = fs.readFileSync(path.join(__dirname, "layout.html")).toString();
        var content = fs.readFileSync(path.join(__dirname, "dashboard.html")).toString();
        res.send(mustache.render(layout, { content: content }));
    });

    return app;
}
