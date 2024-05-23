import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import bodyParser from 'body-parser';
import connectDB from './config/mongodb.js';
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import dotenv from 'dotenv';
import passport from './config/passport.js';
import session from 'express-session';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());


app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/profile/me' }),
(req, res) => {
    res.redirect('/profile/me');
});

app.engine('.hbs', engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', '.hbs');
app.set('views', path.join(path.resolve(), 'views'));

// Static folder
app.use(express.static(path.join(path.resolve(), 'public')));

// Routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
