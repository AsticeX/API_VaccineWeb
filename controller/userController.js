const user = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getUser = async (req, res, next) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const usedEmail = await user.findOne({ email: req.body.email });
    if (usedEmail) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const existingUsername = await user.findOne({ user_id: req.body.user_id });
    if (existingUsername) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const newUser = await user.create({
      email: req.body.email,
      user_id: req.body.user_id,
      password: hashedPassword,
      name: req.body.name,
      lastname: req.body.lastname,
      nation_id: req.body.nation_id,
      gender: req.body.gender,
      phone_no: req.body.phone_no
    });
    res.json(newUser);
  } catch (err) {
    next(err);
  }
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const foundUser = await user.findOne({ email });
    // Check if user exists
    if (!foundUser) {
      return res.status(401).json({ message: 'User not found' });
    }
    // Validate password
    const validPassword = await bcrypt.compare(password.trim(), foundUser.password.trim());
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create token
    const token = jwt.sign(
      { userId: foundUser._id, email: foundUser.email },
      'your_secret_key',
      { expiresIn: '1h' } // Token expiration time
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
