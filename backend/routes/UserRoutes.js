import express from 'express';
import { User } from 'file:///C:/Ben/Programming/MERN_stack_website/backend/models/userModels.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';


const router = express.Router();

const createToken = (_id) => {
    try {
        return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
    } catch (error) {
        console.error("Error creating token:", error);
        // Handle the error appropriately
    }
}


router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash password
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Create new user
        const newUser = new User({ username, password: hashedPassword });

        // Save user to database
        await newUser.save();

        
        const token = createToken(newUser._id);

        console.log('Token generated:', token);
        res.status(201).json({username,token, message: 'User created successfully' });
    } catch (error) {
        console.error('Error in registration:', error);
        res.status(500).send('Server error');
    }
});


router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ username });
        if (user && bcrypt.compareSync(password, user.password)) {
            // Authentication successful
            // Generate a token
            
            const token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: '3d' });
            
            console.log('Token generated:', token);
            
            // Send token back to client
            res.json({ success: true, token });
        } else {
            // Authentication failed
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});


router.get('/login', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;