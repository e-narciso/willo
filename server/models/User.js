const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    displayName: { type: String, default: "Hinkypunk" },
    password: String,
    image: {
      type: String,
      default:
        "http://3.bp.blogspot.com/-GEpcgrulbYY/VVkljtmQlMI/AAAAAAAAAig/Nietx4sz2tI/s1600/Willow_the_wispBArrowsuch5.png"
    },
    bio: { type: String, default: "I'm a fresh flame in the wind!" },
    following: [{ type: Schema.ObjectId, ref: "User" }],
    followers: [{ type: Schema.ObjectId, ref: "User" }]
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
