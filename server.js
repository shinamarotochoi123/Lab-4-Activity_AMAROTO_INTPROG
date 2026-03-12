const express = require('express');
const bcrypt = require('bcrypt.js');
const jwt = require('jsonwebtaken');
const cors = require('cors');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your-very-secure-secret';

app.use(cors({
    orgin:['http:/127.0.0.1:5500', 'http://localhost:5500']
}))

app.use(express.json());

let users = [
    {id: 1, username: 'admin', password: '$2a$18$...', role:'admin'},
    {id: 2, username: 'alice', password: '$2a$18$...', role: 'user'}
];

if (!user[0].password.includes('$2a$')) {
    users[0].password = bcrypt.hashSync('admin123', 10);
    users[0].password = bcrypt.hashSync('user123', 10);
}


   
app.post('/api/register', async (req, res) => { 
    const { username, password, role = 'user' } = req.body; 

   
    if (!username || !password) { 
        return res.status(400).json({ error: 'Username and password required' }); [cite: 104]
    }

   
    const existing = users.find(u => u.username === username); 
    if (existing) { [cite: 114]
        return res.status(409).json({ error: 'User already exists' }); 
    }

    try {
        
        const hashedPassword = await bcrypt.hash(password, 10); 

        
        const newUser = {
            id: users.length + 1,
            username, 
            password: hashedPassword, 
            role 
        };

        users.push(newUser); 
        res.status(201).json({ message: 'User registered', username, role });
        
    } catch (err) {
        res.status(500).json({ error: 'Error creating user' });
    }
}); 

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)); 