// ------------------- Imports -----------------
const mongoose = require("mongoose"),
    express = require("express"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    cookieParser = require("cookie-parser"),
    bcrypt = require("bcryptjs"),
    expressSession = require("express-session");
const User = require("./model/user");
// ------------------- End of Imports -----------------

const app = express();
app.listen(8000, () => {
    console.log("server is up and running on port 8000");
});

// ------------------- Middleware -----------------
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(
    expressSession({
        secret: "secret-key",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(cookieParser("secret-key"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);
// ------------------- End of Middleware -----------------

// connecting database
mongoose.connect(
    "mongodb+srv://ziadhegazi:1234@passportjs.tc5nc.mongodb.net/passportjs?retryWrites=true&w=majority",
    () => {
        console.log("Database connected");
    }
);

// ------------------- Routes -----------------
app.post("/login", (req, res, next) => {
    // console.log("Signup body", req.body);
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        console.log(user);
        if (!user) {
            res.send("No user exists");
        } else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                console.log(req.user);
            });
        }
    })(req, res, next);
});
app.post("/signup", async (req, res) => {
    // console.log("Signup body", req.body);
    const userSearch = await User.findOne({ username: req.body.username });
    if (userSearch) {
        res.send("User already exists");
    } else {
        const { username, password } = req.body;

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            password: hashPassword,
        });
        // console.log("new User", newUser);
        console.log("new User created");
        User.create(newUser);
    }
});
app.get("/user", (req, res) => {
    res.send(req.user);
});
app.get("/logout", (req, res) => {
    req.logOut();
    res.send(req.user);
});
