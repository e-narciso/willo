const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wispSchema = new Schema(
  {
    content: String,
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    // creator: { type: String }

    // expireAt: {type:Date, default: new Date.setSeconds(new Date()+10)}
    createdAt: { type: Date, expires: 86400000, default: Date.now }
  },
  // {
  //   timestamps: {
  //   }
  // }
);

const Wisp = mongoose.model("Wisp", wispSchema);

module.exports = Wisp;
