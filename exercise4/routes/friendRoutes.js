const express = require("express");
const router = express.Router();
const friends = require("../models/friends");

// friends
router.get("/", (req, res) => {
  res.json(friends);
});

router.get("/filter", (req, res) => {
  let letter = req.query.letter.toUpperCase();
  let newFriendsArray = [...friends];

  if (letter) {
    newFriendsArray = newFriendsArray.filter((friend) => {
      return friend.name[0] === letter;
    });
  }

  res.status(200).json(newFriendsArray);
});

router.get("/info", (req, res) => {
  res.json({
    "user-agent": req.headers["user-agent"],
    "content-type": req.headers["content-type"],
    accept: req.headers["accept"],
  });
});

router.get("/:id", (req, res) => {
  // set id
  let friendId = req.params.id;
  // find friend
  let rqdFriend = friends.find((friend) => {
    return friend.id == friendId;
  });
  res.status(200).json(rqdFriend);
});

router.put("/:id", (req, res) => {
  let friendId = req.params.id;

  let friendNewData = req.body;

  let foundFriend = friends.find((friend) => {
    return friend.id == friendId;
  });

  let index = friends.indexOf(foundFriend);
  // merge friends
  let updatedFriend = { ...foundFriend, ...friendNewData };

  friends[index] = updatedFriend;

  res.status(200).json(updatedFriend);
});

// PUT - localhost:3000/friends/1
// Body - {"name": "Ali", "gender": "male"}
// response - {"id":1,"name":"Ali","gender":"male"}

module.exports = router;
