const express = require("express");
const router = express.Router();
const friends = require("../models/friends");

// friends
router.get("/", (req, res) => {
  res.json(friends);
});

// **********************************************************
// TODO - #1: Add support to the 'filter' endpoint for a new
// query parameter 'letter' which filters friends by starting letter

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

// http://localhost:3000/friends/filter?letter=r
// [{"id":5,"name":"Ross","gender":"male"},{"id":6,"name":"Rachael","gender":"female"}]

// **********************************************************
// TODO - #2: Modify the 'info' route to only return
// the user-agent, content-type and accept header data

router.get("/info", (req, res) => {
  res.json({
    "user-agent": req.headers["user-agent"],
    "content-type": req.headers["content-type"],
    accept: req.headers["accept"],
  });
});

router.get("/:id", (req, res) => {
  // set id to dynamic parameter
  let friendId = req.params.id;
  // find friend with set id
  let rqdFriend = friends.find((friend) => {
    return friend.id == friendId;
  });
  res.status(200).json(rqdFriend);
});

router.put("/:id", (req, res) => {
  // get set friend id from req.params
  let friendId = req.params.id;
  // get set update to friends data from req.body
  let friendNewData = req.body;
  // find friend in friends by id
  let foundFriend = friends.find((friend) => {
    return friend.id == friendId;
  });
  // find index of friend in friends
  let index = friends.indexOf(foundFriend);
  // merge friends data with updated data
  let updatedFriend = { ...foundFriend, ...friendNewData };
  // replace friend data in friends by index
  friends[index] = updatedFriend;
  // response - status - json
  res.status(200).json(updatedFriend);
});

// PUT - localhost:3000/friends/1
// Body - {"name": "Ali", "gender": "male"}
// response - {"id":1,"name":"Ali","gender":"male"}

module.exports = router;
