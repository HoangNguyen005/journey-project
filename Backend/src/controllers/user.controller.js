const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const authenticateToken = require('../middleware/authenticateToken.js')

// Create token
const createToken = (user) => {
    return jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY);
};

const getUser = async (req, res) => {
    const user = await User.findById(req.body.userId)
    try {
        if(!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        return res.json({data: user, success: true, message: 'Get user successfully'})
        
    } catch (error) {
        return res.status(500).json({error, message: error.message});
    }
};

// User register
const register = async (req, res) => {
    console.log('SECRET_KEY:', process.env.JWT_SECRET_KEY);
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const exist = await User.findOne({ email }).exec();

        if (exist) {
            return res
                .status(404)
                .json({ success: false, message: 'User already exists' });
        } else {
            // Salt and Hash password
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password, salt);

            // Create new user and save to database
            const newUser = new User({ name, email, password: hashPassword });
            const user = await newUser.save();
            const token = createToken(user);
            res.json({
                success: true,
                message: 'User registered successfully',
                token,
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Registration failed!' + err,
        });
    }
};

// User login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).exec();
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: 'User not found' });
        }

        // Compare password
        const isMatch = await bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res
                .status(400)
                .json({ success: false, message: 'Invalid password' });
        }

        const token = createToken(user);
        return res.json({
            user,
            token,
            success: true,
            message: 'login successfully',
        });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};

const edit = async (req, res) => {
    if(req.body.data.firstName && req.body.data.lastName){
        var name = req.body.data?.firstName +' '+ req.body.data?.lastName;
    }
    
    const userId = req.body.userId

    try {
        const data = await User.findByIdAndUpdate(userId, {...req.body.data, name} , {
            new: true
        });
        if(!data) {
            return res.status(404).json({success: false, message: 'User not found'})
        } else {
            res.json({data, success: true, message: 'updated successfully'})
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
};

const changePassword = async (req, res) => {
    const user = User.findById(req.body.userId)
    if (!user) {
        return res.status(404).json({ success: false, message:'user not found'})
    }

    const isMatch = bcrypt.compare(req.body.password, user.password)

    if(!isMatch) {
        return res.status(404).json({ success: false, message: 'invalid password'})
    }

    await User.findByIdAndUpdate(req.body.userId, {password: req.body.newPassword})
    return res.json({success: true, message:'Update password successfully'})
}

module.exports = { register, login, getUser, edit, changePassword };
