import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';
import {registerUser }from '../services/authService.js'
import dotenv from 'dotenv';
dotenv.config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID || '',
	clientSecret:process.env.GOOGLE_CLIENT_SECRET || '',
	callbackURL:process.env.GOOGLE_CALL_BACK_URL || '', 
},
async (token, tokenSecret, profile, done) => {
    try {
        console.log(12,profile)
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          return done(null, user);
        }
        const { token, newUser } = await registerUser({
          name: profile.displayName,
          email: profile.emails[0].value,
          password:'',
        });
        done(token, newUser);
    } catch (err) {
      done(err, false);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

export default passport;