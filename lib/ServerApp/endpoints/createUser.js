var uuid = require("uuid");

module.exports = function(storage) {
    return createUser.bind(null, storage);
};

function createUser(storage, req, res) {
    var userId = uuid.v4();
    var newUser = {
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    };

    storage.set("users/" + userId, newUser, (error) => {
        if(error) {
            return res.sendStatus(500);
        }
        delete newUser.password;
        newUser.userId = userId;
        res.send(newUser);
    });
}
