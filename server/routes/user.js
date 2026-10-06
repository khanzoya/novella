import express from 'express';
import { User } from '../models/User.js'
import bcrypt from 'bcrypt';
// import { verifyAdmin } from './auth.js';

const router = express.Router();

router.post('/register',  async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please enter all fields' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || 'Server error' });
  }
});

export { router as UserRouter };
