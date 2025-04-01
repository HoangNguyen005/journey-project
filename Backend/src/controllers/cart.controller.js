const User = require('../models/user')

const get = async (req, res) => {
    const user = await User.findById(req.body.userId)
    if(!user) {
        return res.status(404).json({message: 'user not found', success: false})
    }
    const cartItems = user.cartItems
    try {
        res.json({message: 'Cart found', success: true, data: cartItems})
    } catch (error) {
        return res.status(500).json({error})
    }
}

const add = async (req, res) => {
    const user = await User.findById(req.body.userId)
    if(!user) 
        return res.status(404).json({message: 'user not found', success: false})
    
    // console.log(req.body)
    // Check if item already exists in user's cart
    // if(user.cartItems.some(item => (item.size === req.body.size && item._id === req.body._id))) 
    //     return res.status(409).json({message: 'Item already in cart', success: false})

    try {
     
        await User.findByIdAndUpdate(req.body.userId, {cartItems: [...user.cartItems, req.body.item]})
        const data = await User.findById(req.body.userId)
        res.json({message: 'cart items updated', success: true, data: data.cartItems})
    } catch (error) {
        return res.status(500).json({error, message: 'error updating', success: false})
    }
}
const remove = async (req, res) => {
    const user = await User.findById(req.body.userId)
    if(!user) 
        return res.status(404).json({message: 'user not found', success: false})
    try {
        await User.findByIdAndDelete(req.body.userId, req.params.id)
        
    } catch (error) {
        
    }
}

module.exports = {get, add, remove}