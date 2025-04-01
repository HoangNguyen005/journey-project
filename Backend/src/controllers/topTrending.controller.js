const Trending = require('../models/topTrending')

const get = async (req, res) => {

    // const product = {
    //     items: [
    //         {
    //             name: 'Nike Pegasus Premium1',
    //             price: 149.99,
    //             image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/15695fb5-c271-4f01-b05f-54a46835ffba/NIKE+PEGASUS+PREMIUM.png',
    //         },
    //         {
    //             name: 'Nike Pegasus Premium2',
    //             price: 149.99,
    //             image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f4571b9-bbb9-4343-96d3-6467cb217bff/NIKE+ZOOMX+INVINCIBLE+RUN+FK+3.png',
    //         },
    //         {
    //             name: 'Nike Pegasus Premium3',
    //             price: 149.99,
    //             image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/15695fb5-c271-4f01-b05f-54a46835ffba/NIKE+PEGASUS+PREMIUM.png',
    //         },
    //         {
    //             name: 'Nike Pegasus Premium4',
    //             price: 149.99,
    //             image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/15695fb5-c271-4f01-b05f-54a46835ffba/NIKE+PEGASUS+PREMIUM.png',
    //         },
    //         {
    //             name: 'Nike Pegasus Premium5',
    //             price: 149.99,
    //             image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/15695fb5-c271-4f01-b05f-54a46835ffba/NIKE+PEGASUS+PREMIUM.png',
    //         },
    //         {
    //             name: 'Nike Pegasus Premium6',
    //             price: 149.99,
    //             image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/15695fb5-c271-4f01-b05f-54a46835ffba/NIKE+PEGASUS+PREMIUM.png',
    //         }
    //     ]
    // }
        const data = await Trending.find({})
        res.json(data)

}

module.exports = {get}