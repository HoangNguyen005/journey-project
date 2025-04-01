// Middleware xác thực token
const jwt = require('jsonwebtoken')

const authenticateToken = async (req, res, next) => {
    const Auth = req.headers.authorization;
    const token = Auth && Auth.split(' ')[1];

    // console.log(req.headers)
    if (!token) return res.status(404).json({success: false, message: 'Token not found'});

    // Xác thực token và lưu dữ liệu người dùng vào request
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.body.userId = token_decode.id
        next()
    } catch (error) {
        return res.status(403).json({success: false, message: 'Token invalid'});
    }


};

module.exports = {authenticateToken};
