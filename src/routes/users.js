import express from 'express'
import { updatePassword } from '../controllers/users';

const router = express.Router();

router.post('/update-password', updatePassword);

export default router;
