import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async ({ name, email, password }) => {
  let user = await User.findOne({ email });
  if (user) {
    throw new Error('User already exists');
  }

  user = new User({ name, email, password });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  await user.save();
  const token = jwt.sign( { id: user.id }, 'testing', { expiresIn: '1h' });
  return {token,user};
  
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign({ id: user.id }, 'testing', { expiresIn: '1h' });
  return { token, user };
};


