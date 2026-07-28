const jwt = require("jsonwebtoken");
const User = require("../model/user");
const bcrypt = require("bcrypt");

// ================= REGISTER =================

const registerUser = async (req, res) => {
    try {

        // Check if email already exists
        const existingUser = await User.findOne({
            email: req.body.email
        });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create user
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        await user.save();

       const userData = {
    id: user._id,
    name: user.name,
    email: user.email
};

res.status(201).json({
    message: "User Registered Successfully",
    user: userData
});

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// ================= LOGIN =================

const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
    {
        id: user._id
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "1d"
    }
);

        const userData = {
    id: user._id,
    name: user.name,
    email: user.email
};

res.status(200).json({
    message: "Login Successful",
    token,
    user: userData
});

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    registerUser,
    loginUser
};