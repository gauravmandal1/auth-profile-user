import express from 'express';
import passport from 'passport';
import { renderLogin, renderRegister, register, login, renderloginWithGoogle } from '../controllers/authController.js';
const router = express.Router();


router.get('/login', renderLogin);
router.post('/login', login);

router.get('/register', renderRegister);
router.post('/register', register);

router.get('/loginWithGoogle', renderloginWithGoogle);

export default router;