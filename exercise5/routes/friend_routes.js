const express = require("express");
const router = express.Router();

const friendController = require("../controllers/friendController");

router.route("/").get(friendController.getAllFriends);
router.route("/filter").get(friendController.filterFriendsByFirstInitial);
router.route("/info").get(friendController.getInfo);
router.route("/:id").get(friendController.getFriend);
router.route("/:id").put(friendController.updateFriend);

module.exports = router;
