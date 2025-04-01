// const userRoute = require('./userRoute')
const topTrending = require('./topTrending')
const product = require('./product')
const userRoute = require('./userRoute')
const cartRoute = require('./cartRoute')
// const {authenticateToken} = require('../middleware/authenticateToken.js')

const router = (app) => {
    // app.use('/', userRoute);
    app.use('/api/trending', topTrending);
    app.use('/api/product', product);
    app.use('/api/user',  userRoute);
    app.use('/api/cart',  cartRoute);
};
module.exports = router;
