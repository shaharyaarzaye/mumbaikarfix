const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const app = express();
const path = require('path');
const User = require('./models/user')

mongoose.connect('mongodb://localhost:27017/users', {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }));

//for adding html file as a view
// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.get('/', (req , res) => {
    res.render('login')
})

app.get('/login' , (req , res) => {
    res.render('login')
})
app.post('/login' , (req , res) => {
    
})


app.get('/signup' , (req , res) => {
    res.render('signup')
})
app.post('/', async (req, res) => {
    console.log('Username', req.body.username);   // Log the request body
    console.log("password : " , req.body.password);
    const { username, password } = req.body;
    // Log the current status code

       // Check if both fields are provided
       if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Check if the username already exists
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Create a new user with the plain-text password
        const newUser = new User({
            username,
            password,  // Storing plain-text password (not recommended for production)
        });

        // Save the user to the database
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }



    // You can also send a response back to the client if you want
    res.send('Request received');
});




app.listen(3000 , () => {
    console.log("Hyyyy  listening on port 3000")
})
