const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if(req.headers.authorization) {
        //to cut Bearer from token
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if(err){
                next(Error('Failed to uthenticate token'));
            } else {
                req.decoded = decoded;
                next();
            }
        })
    } else {
        next(Error('No token provided'));
    }
}