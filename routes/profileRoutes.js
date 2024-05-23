import express from 'express';
import { renderProfile, updateProfile, renderProfiles , getProfileData, getAllProfile} from '../controllers/profileController.js';

const router = express.Router();


router.get('/me', renderProfile);

router.post('/getData', getProfileData);
router.post('/update', updateProfile)


router.get('/viewProfile', renderProfiles);
router.post('/getAllProfile', getAllProfile)

export default router;
