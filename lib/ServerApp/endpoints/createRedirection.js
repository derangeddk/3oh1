module.exports = function(storage) {
    return createRedirection.bind(null, storage);
};

function createRedirection(storage, req, res) {
    // lookup user

    var newRedirection = {
        userId: req.body.userId,
        entry: req.body.entry,
        destination: req.body.destination
    };

    storage.set("redirections/" + req.body.entry, newRedirection, (error) => {
        if(error) {
            return res.sendStatus(500);
        }
        res.send(newRedirection);
    });
}
