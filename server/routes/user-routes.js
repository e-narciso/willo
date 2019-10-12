const express = require("express");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    res
      .status(400)
      .json({ message: "Please provide both username and password." });
    return;
  }

  if (password.length < 7) {
    res.status(400).json({
      message:
        "Please make your password at least 8 characters long for security purposes."
    });
    return;
  }

  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "Username check went bad." });
      return;
    }

    if (foundUser) {
      res.status(400).json({ message: "Username taken. Choose another one." });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    const aNewUser = new User({
      username: username,
      password: hashPass
    });

    aNewUser.save(err => {
      if (err) {
        res
          .status(400)
          .json({ message: "Saving user to database went wrong." });
        return;
      }
      req.login(aNewUser, err => {
        if (err) {
          res.status(500).json({ message: "Login after signup went bad." });
          return;
        }
        res.status(200).json(aNewUser);
      });
    });
  });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }
    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad :(" });
        return;
      }
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

router.post("/logout", (req, res, next) => {
  req.logout();
  res.status(200).json({ message: "Logout successful!" });
});

router.get("/loggedin", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});

router.get("/users", (req, res, next) => {
  User.find()
    .then(allUsers => {
      res.json(allUsers);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/follow", (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (user.followers.includes(req.user._id)) {
      res.status(500).json({ message: "You are already following this user" });
    } else {
      user.followers.push(req.user._id);
      let followedUser = user._id;
      user.save(err => {
        if (err) {
          res
            .status(500)
            .json({ message: "Something went wrong following user" });
          return;
        } else {
          User.findOne({ username: req.user.username }, (err, user) => {
            user.following.push(followedUser);
            user.save(err => {
              if (err) {
                res
                  .status(500)
                  .json({ message: "Something went wrong unfollowing user" });
                return;
              } else {
                res.status(200).json({ message: "Successfully followed user" });
              }
            });
          });
        }
      });
    }
  });
});

router.post("/unfollow", (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (!user.followers.includes(req.user._id)) {
      res.status(500).json({ message: "You are not following this user" });
    } else {
      user.followers.splice(user.followers.indexOf(req.user._id), 1);
      let unfollowedUser = user._id;
      user.save(err => {
        if (err) {
          res
            .status(500)
            .json({ message: "Something went wrong unfollowing user" });
          return;
        } else {
          User.findOne({ username: req.user.username }, (err, user) => {
            user.following.splice(user.following.indexOf(unfollowedUser), 1);
            user.save(err => {
              if (err) {
                res
                  .status(500)
                  .json({ message: "Something went wrong unfollowing user" });
                return;
              } else {
                res
                  .status(200)
                  .json({ message: "Successfully unfollowed user" });
              }
            });
          });
        }
      });
    }
  });
});

module.exports = router;
