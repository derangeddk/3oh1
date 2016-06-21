module.exports = function(storage) {
    return getUser.bind(null, storage);
};

function getUser(storage, req, res) {
    storage.get("users/" + req.params.userId, (error, user) => {
        if(user) {
            return res.send(user);
        }
        res.sendStatus(404);
    });
}
