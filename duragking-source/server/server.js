const express = require("express"),
  cors = require("cors"),
  app = express(),
  router = require("./routes/index"),
  mongoose = require("mongoose"),
  cookieParser = require("cookie-parser"),
  expressSession = require("express-session"),
  passport = require("passport"),
  User = require("./models/user");

app.use("*", cors());

// Database Init
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/official_duragking", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set("useCreateIndex", true);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

// Server Init
app.set("token", process.env.TOKEN || "S3cr3tdUrAgT0k3n");
app.set("port", process.env.PORT || 3001);

router.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(cookieParser("s3cr3t_duragCookie"));
app.use(
  expressSession({
    secret: "s3cr3t_duragCookie",
    cookie: {
      maxAge: 4000000,
    },
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.loggedIn = req.isAuthenticated();
  res.locals.currentUser = req.user;
  next();
});

app.use("/", router);

const server = app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
