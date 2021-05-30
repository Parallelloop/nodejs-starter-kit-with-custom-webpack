import Users from '../../models/users';
import { generateTokenResponse } from '../../middlewares/auth';

const SignUp = async (req, res) => {
  try {
    const {
      body: { name, email, password }
    } = req;
    if (!name || !email || !password)
      return res.status(400).json('email, password required');

    let user = await Users.findOne({ email });
    if (user) {
      return res.status(400).json('email already exist');
    }

    user = new Users({
      name,
      email,
      password: password
    });
    const result = await user.save();
    const token = generateTokenResponse(result);
    return res.status(200).json({
      token,
      user: result
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
export default SignUp;
