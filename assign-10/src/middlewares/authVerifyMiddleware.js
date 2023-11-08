const jwt = require('jsonwebtoken');
exports.authVerification = (req, res, next) => {

    const token =req.headers.token;
    jwt.verify(token, 'pass123', (err, decoded) => {
        if(err){
            res.status(401).json({status: "fail", message: "Invalid token"})
        }
        else{
         let email = decoded.data;
         req.headers['email'] = email;
         next();
        }
    });
};