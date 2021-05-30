import User from '../../models/users';
import bcrypt from 'bcryptjs';

const updatePassword = async (req, res) => {
  const { email, password, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    const isValid = user.validatePassword(password);
    if (!isValid) {
      res.json({
        message: 'Old password is incorrect please try again later.'
      });
    } else {
      user.password = newPassword;
      await user.save();
      res.json({
        message: 'Password updated succesfully'
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default updatePassword;
