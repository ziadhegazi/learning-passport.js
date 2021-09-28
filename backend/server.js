const mongoose = require("mongoose"),
    express = require("express"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    passportLocal = require("passport-local").Strategy,
    cookieParser = require("cookie-parser"),
    bcrypt = require("bcryptjs"),
    expressSession = require("express-session");

const app = express();
app.listen(8000, () => {
    console.log("server is up and running on port 8000");
});

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
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

// connecting database
mongoose.connect(
    "mongodb+srv://ziadhegazi:1234@passportjs.tc5nc.mongodb.net/passportjs?retryWrites=true&w=majority",
    () => {
        console.log("Database connected");
    }
);

// routes
app.post("/login", (req, res) => {
    console.log("Login body", req.body);
});
app.post("/signup", (req, res) => {
    console.log("Signup body", req.body);
});
app.get("/user", (req, res) => {
    console.log("User body", req.body);
});
