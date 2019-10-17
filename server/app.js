require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const nocache = require("nocache");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

require("./configs/database");

// require("./configs/passport");

mongoose
  .connect("mongodb://localhost/willo", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

app.use(nocache());

// Set "Access-Control-Allow-Origin" header
app.use(
  cors({
    origin: (origin, cb) => {
      cb(null, origin && origin.startsWith("http://localhost:"));
    },
    optionsSuccessStatus: 200,
    credentials: true
  })
);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
app.use(express.static(path.join(__dirname, "../client/build")));


app.use(
  session({
    secret: process.env.SESSION_SECRET || "irongenerator",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

require("./passport")(app);

// app.use(passport.initialize());
// app.use(passport.session());

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

const index = require("./routes/index");
app.use("/", index);

const userRoutes = require("./routes/user-routes");
app.use("/api", userRoutes);

const wispRoutes = require("./routes/wisp-routes");
app.use("/api", wispRoutes);

// // For any routes that starts with "/api", catch 404 and forward to error handler
// app.use("/api/*", (req, res, next) => {
//   let err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// // For any other routes, redirect to the index.html file of React
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// // Error handler
// app.use((err, req, res, next) => {
//   console.error("----- An error happened -----");
//   console.error(err);

//   // only render if the error ocurred before sending the response
//   if (!res.headersSent) {
//     res.status(err.status || 500);

//     // A limited amount of information sent in production
//     if (process.env.NODE_ENV === "production") res.json(err);
//     else
//       res.json(
//         JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)))
//       );
//   }
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = app;
