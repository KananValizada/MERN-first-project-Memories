import mongoose from "mongoose";

const postScheme = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: {
    type: String,
  },
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postScheme);

export default PostMessage;
