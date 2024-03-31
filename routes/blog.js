const express = require("express");
const router = express.Router();

//importing controller

const { dummyLink } = require("../controllers/likeController");

//mapping controller
router.get("/dummyLink", dummyLink);

//export
module.exports = router;
