import {
    getUserProfile,
    updateUserProfile,
    getAllProfiles,
    getProfileDataFromToken,
    getAllProfileFromToken
  } from '../services/profileService.js';
  
  // Render profile page
  export const renderProfile = async (req, res) => {
    try {
      res.render('profile/profile',);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };

  export const getProfileData = async (req, res) => {
    let token = req.body?.token;
    console.log('Received token on server:', token); 

    try {
      let user = await getProfileDataFromToken(token); 
      res.status(200).json({ user });
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  
  // Render profiles page for admin
  export const renderProfiles = async (req, res) => {
    try {
      res.render('viewProfile');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  export const updateProfile = async (req, res) => {
    let token = req.body?.token;
    let updatedProfile = req.body?.updatedProfile;
    console.log(56)
    try {
    let updatedUser = await updateUserProfile(token,updatedProfile);
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(400).json({ errors: [{ msg: err.message }] });
    }
  };

  export const getAllProfile = async (req,res)=>{
    let token = req.body?.token;
    console.log('Received token on server:', token); // Clearer console message

    try {
      let users = await getAllProfileFromToken(token); 
      console.log(users)
      res.status(200).json({ users });
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  