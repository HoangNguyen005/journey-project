// const userRoute = require('./userRoute')
const topTrending = require('./topTrending')
const product = require('./product')
const userRoute = require('./userRoute')
const cartRoute = require('./cartRoute')
// const {authenticateToken} = require('../middleware/authenticateToken.js')

const router = (app) => {
    // app.use('/', userRoute);
    app.use('/trending', topTrending);
    app.use('/product', product);
    app.use('/user',  userRoute);
    app.use('/cart',  cartRoute);
};
module.exports = router;
