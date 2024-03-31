//import moongoose
const mongoose = require("mongoose");

//route handler
// In the comment schema -> post,user,body
const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  user: {
    type: string,
    required: true,
  },
  body: {
    type: string,
    required: true,
  },
});

//export
module.exports = mongoose.model("Comment", commentSchema);
