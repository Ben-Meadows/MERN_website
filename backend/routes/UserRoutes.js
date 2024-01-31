import express from 'express';
import { User } from 'file:///C:/Ben/Programming/MERN_stack_website/backend/models/userModels.js';
import bcrypt from 'bcrypt';

const router = express.Router();


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

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
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
            // Here, you can also generate a token or set up a session
            res.json({ success: true });
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