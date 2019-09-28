module.exports = function (error, req, res, next) {
    if (error) {
        console.error(error);

        return res.status(500).send({
            error: 'Internal server error',
            name: error.name,
            stack: error.stack
        })
    }
}
