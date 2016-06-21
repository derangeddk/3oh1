var express = require("express");

module.exports = function start() {
    var app = express();

    app.get("/", (req, res) => { res.send("Hello Client"); });

    return app
}
