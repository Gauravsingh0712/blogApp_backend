//import moongoose
const mongoose = require("mongoose");

//route handler
// In the like schema -> post,user
const likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  user: {
    type: string,
    required: true,
  },
});

//export
module.exports = mongoose.model("Like", likeSchema);
