import Users from '../../models/users';

export const ResetPassword = async (req, res) => {
  try {
    const {
      user: { email },
      body: { password }
    } = req;
    return await Users.updateOne(
      { email },
      { $set: { password: password } }
    ).then((result) => res.status(200).json('password updated successfully'));
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
export default ResetPassword;
