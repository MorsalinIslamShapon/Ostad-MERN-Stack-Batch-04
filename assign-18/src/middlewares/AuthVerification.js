const { DecodeToken } = require("../utility/TokenHelper");

module.exports = async (req, res, next) => {
    let token = req.headers.token;

    if (!token) {
        token = req.cookies.token;
    }

    // console.log("Token:", token);

    try {
        let decoded = await DecodeToken(token);

        if (decoded === null) {
            return res.status(401).json({
                status: "Fail",
                message: "Unauthorized"
            });
        } else {
            req.decodedToken = {
                email: decoded['email'],
                user_id: decoded['user_id']
            };
            next();
        }
    } catch (error) {
        console.error("Error decoding token:", error);
        return res.status(500).json({
            status: "Error",
            message: "Internal Server Error"
        });
    }
};
