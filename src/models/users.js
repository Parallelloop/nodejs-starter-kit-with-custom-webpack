import mongoose, { mongo, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const schema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    userType: { type: String, default: 'owner' }
  },
  { timestamps: true }
);

schema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  user.password = bcrypt.hashSync(this.password, 10);
  return next();
});
schema.methods.validatePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password);
};
const Users = mongoose.model('users', schema);

export default Users;
