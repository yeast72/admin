const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const dotenv = require("dotenv");
dotenv.config();

const User = require("../database").users;

const secret = process.env.JWT_SECRET;
const opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secret;

const jwtAuth = new JWTStrategy(opts, async (jwtPayload, done) => {
  try {
    const userId = jwtPayload.sub;
    const user = await User.findByPk(userId);
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    return done(err, false);
  }
});

passport.use(jwtAuth);

module.exports = passport.authenticate("jwt", { session: false });
