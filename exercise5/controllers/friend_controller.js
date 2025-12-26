const friends = require("../models/friends");

const getAllFriends = (req, res) => {
  res.json({ friends });
};

const filterFriendsByFirstInitial = (req, res) => {
  let queryLetter = req.query.letter.toUpperCase();
  let filteredFriends = friends.filter((friend) => {
    return friend.name[0] == queryLetter;
  });
  res.status(200).json({ filteredFriends });
};

const getInfo = (req, res) => {
  let headers = req.headers;
  res.json({
    "user-agent": headers["user-agent"],
    "content-info": headers["content-info"],
    accept: headers["accept"],
  });
};

const getFriend = (req, res) => {
  let friendId = req.params.id;
  let lostFriend = friends.find((friend) => {
    return friend.id == friendId;
  });
  res.status(200).json({ lostFriend });
};

const updateFriend = (req, res) => {
  let friendId = req.params.id;
  let update = req.body;
  let updateFriend = friends.find((friend) => {
    return friend.id == friendId;
  });
  let index = friends.indexOf(updateFriend);
  let newData = { ...updateFriend, ...update };
  friends[index] = newData;
  res.status(200).json({ newData });
};

module.exports = {
  getAllFriends,
  filterFriendsByFirstInitial,
  getInfo,
  getFriend,
  updateFriend,
};
