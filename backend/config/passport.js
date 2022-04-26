const passport = require("passport")
const User = require("../models/user")
const jwtStrategy = require("passport-jwt").Strategy
const extractJwt = require("passport-jwt").ExtractJwt

module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "mykeyprueba123"
}, (jwt_payload, done) => {
    // console.log(process.env.SECRETKEY)
    User.findOne({ _id: jwt_payload.id })
        .then(user => {
            if (user) {
                return done(null, user)
            }
            else if (error) {
                return done(error, false)
            }
            else {
                return done(null, false)
            }
        })
        .catch(error => {
            return done(error, false)
        })
}))
