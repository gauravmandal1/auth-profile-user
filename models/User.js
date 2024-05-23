import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    type: String
  },
  bio: {
    type: String
  },
  phone: {
    type: String
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  googleId:{
    type:String,
    default:null
  }
});

const User = mongoose.model('User', UserSchema);

export default User;
