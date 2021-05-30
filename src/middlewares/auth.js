import passport from 'passport';
import jwt from 'jsonwebtoken';
import LocalStrategy from 'passport-local';
import { Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt';
import Users from '../models/users';
const { JWT_SECRET } = process.env;

export const generateTokenResponse = ({ _id, email, name }, verify = false) => {
  let expiryTime = '365d';
  return {
    token: jwt.sign({ _id, email, name }, JWT_SECRET, {
      expiresIn: expiryTime
    }),
    userId: _id
  };
};

export const authenticateAuthToken = passport.authenticate('jwt', {
  session: false
});

// ============================ Local Login Strategy ============================ //

export const LocalLoginStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passReqToCallback: true
  },
  async (req, email, password, done) => {
    try {
      const user = await Users.findOne({ email });
      if (!user) {
        return done(null, false, {
          error: 'Your login details could not be verified. Please try again.'
        });
      }
      const isValid = user.validatePassword(password);
      if (!isValid) {
        return done(null, false, {
          error: 'Your login details could not be verified. Please try again.'
        });
      }
      return done(null, user);
    } catch (err) {
      done(err);
    }
  }
);

// ============================ JWT Strategy ============================ //

export const AuthenticationStrategy = new JWTstrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
  },
  async (jwtPayload, done) => {
    try {
      const user = await Users.findById(jwtPayload._id);
      if (!user) return done(null, false);

      return done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
);
