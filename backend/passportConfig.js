const User = require("./model/user"),
    bcrypt = require("bcryptjs"),
    localStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
    passport.use(
        new localStrategy(async (username, password, done) => {
            User.findOne({ username: username }, (err, user) => {
                if (err) done(err);
                if (!user) {
                    return done(null, false);
                }
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) done(err);
                    result === true ? done(null, user) : done(null, false);
                });
            });
        })
    );

    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });
    passport.deserializeUser((id, cb) => {
        User.findById({ _id: id }, (err, user) => {
            cb(err, user);
        });
    });
};
