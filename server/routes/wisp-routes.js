const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Wisp = require("../models/Wisp");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).json({ message: "not logged in" });
  }
}

router.post("/", (req, res, next) => {
  console.log('this is crazy', req.body.content, req.user, '09090')
  // Wisp.create({
  //   content: req.body.content,
  //   creator: req.user._id
  // })

let w = {
    content: req.body.content,
    creator: req.user._id,
  }

  Wisp.create(w)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});


router.get("/populate", isLoggedIn, (req, res, next) => {
  console.log("user", req.user);
  Wisp.find({
    $or: [{ creator: { $in: req.user.following } }, { creator: req.user._id }]
  })
    .populate("creator")
    .then(allTheWisps => {
      console.log("allTheWisps", allTheWisps);
      res.json(allTheWisps);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/wisp/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Wisp.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Wisp with ${req.params.id} is removed successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
