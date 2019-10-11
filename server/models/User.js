const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    image: String,
    following: [{ type: Schema.ObjectId, ref: 'User' }],
    followers: [{ type: Schema.ObjectId, ref: 'User' }],
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
