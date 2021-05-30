import express from 'express';
import passport from 'passport';
import {
  SignIn,
  SignUp,
  ForgetPassword,
  ResetPassword
} from '../controllers/auth';
import { authenticateAuthToken } from '../middlewares/auth';

const router = express.Router();

const loginCheck = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (!user) {
      req.error = info.error;
    } else req.user = user;
    next()
  })(req, res, next);
}

router.post('/signin', loginCheck, SignIn);
router.post('/signup', SignUp);
router.post('/forgetpassword', ForgetPassword);
router.put('/resetpassword', authenticateAuthToken, ResetPassword);
export default router;
