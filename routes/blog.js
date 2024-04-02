const express = require("express");
const router = express.Router();

//importing controller

const { createComment } = require("../controllers/commentController");
const { createPost } = require("../controllers/postController");
const { getAllPosts } = require("../controllers/postController");
const { likePost, unlikePost } = require("../controllers/likeController");

//mapping controller
router.get("/dummyLink", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

//export
module.exports = router;
