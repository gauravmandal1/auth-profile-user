import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const getUserProfile = async (userId) => {
  return await User.findById(userId).select('-password');
};

export const updateUserProfile = async (token, profileData) => {
  let user = await getProfileDataFromToken(token); 
  if (!user) {
    throw new Error('User not found');
  }
  const { name, password, isPublic, isAdmin } = profileData;

  console.log(name, password, isPublic, isAdmin)
  
  if (name !== undefined) {
    user.name = name;
  }
  if (password !== undefined) {
    user.password = password;
  }
  if (isPublic !== undefined) {
    user.isPublic = isPublic;
  }
  if (isAdmin !== undefined) {
    user.isAdmin = isAdmin;
  }
  await user.save();
  return user;
};

export const getProfileDataFromToken = async(token) =>{
  const decoded = jwt.verify(token, 'testing');
  const userId = decoded.id;
  return await User.findById(userId);
}

export const getAllProfileFromToken = async(token) =>{
  const decoded = jwt.verify(token, 'testing');
  const userId = decoded.id;
  let user =  await User.findById(userId);
  if(user?.isAdmin){
    return await User.find({ isAdmin: false });
  }else{
    return await User.find({ isPublic: true, isAdmin: false });
  }
}

export const getAllProfiles = async (isAdmin) => {
  if (isAdmin) {
    return await User.find().select('-password');
  } else {
    return await User.find({ isPublic: true }).select('-password');
  }
};
