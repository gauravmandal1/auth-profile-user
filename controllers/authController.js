import {
    registerUser,
    loginUser,
  } from '../services/authService.js';
  

  // Render login page
export const renderLogin = (req, res) => {
  res.render('auth/login');
};

export const renderloginWithGoogle = (req, res) => {
  res.render('auth/loginWithGoogle');
};
  
  // Render register page
export const renderRegister = (req, res) => {
  res.render('auth/register');
};
  
  // Register a new user
export const register = async (req, res) => {
  try {
    const response = await registerUser(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json({ errors: [{ msg: err.message }] });
  }
};
  
  // Login a user
export const login = async (req, res) => {
  try {
    const response = await loginUser(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ errors: [{ msg: err.message }] });
  }
};
  
  

   
  
 
  
  
  
  