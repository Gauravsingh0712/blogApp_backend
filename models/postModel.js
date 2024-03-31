//import moongoose
const mongoose = require("mongoose");

//route handler
// In the post schema -> title,body,likes[],comments[]
const postSchema = new mongoose.Schema({
  title: {
    type: string,
    required: true,
  },
  body: {
    type: string,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

//export
module.exports = mongoose.model("Post", postSchema);
