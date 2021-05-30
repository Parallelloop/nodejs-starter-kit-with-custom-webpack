import { credentialsSyncedTemplated } from '../../utils/email-template';
import { sendEmail } from '../../utils/send-email';
import Users from '../../models/users';
import { generateTokenResponse } from '../../middlewares/auth';

const ForgetPassword = async (req, res) => {
  try {
    const {
      body: { email }
    } = req;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json('email not found');
    }
    let token = generateTokenResponse(user);
    return sendEmail(
      user.email,
      user.name,
      'Password Recovery',
      credentialsSyncedTemplated('hamza', token.token)
    )
      .then(() => res.status(200).json('email sent'))
      .catch((err) => {
        res.status(404).json(err.message);
      });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
export default ForgetPassword;
