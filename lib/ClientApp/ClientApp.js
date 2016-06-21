var express = require("express");
var fs = require("fs");
var path = require("path");
var mustache = require("mustache");

module.exports = function start() {
    var app = express();
    
    app.use("/assets", express.static(path.join(__dirname, "assets")));

    app.get("/", (req, res) => {
        var layout = fs.readFileSync(path.join(__dirname, "layout.html")).toString();
        var content = fs.readFileSync(path.join(__dirname, "home.html")).toString();
        res.send(mustache.render(layout, { content: content }));
    });
    app.get("/dashboard-preview", (req, res) => {
        var viewModel = {
            redirects: [
                { id: "1234123", entry: "example.com", destination: "new-cool-web.site" }
            ]
        }
        var layout = fs.readFileSync(path.join(__dirname, "layout.html")).toString();
        var view = fs.readFileSync(path.join(__dirname, "dashboard.html")).toString();
        var content = mustache.render(view, viewModel);
        res.send(mustache.render(layout, { content: content }));
    });

    return app;
}
