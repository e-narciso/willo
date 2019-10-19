const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wispSchema = new Schema(
  {
    content: String,
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: { type: Date, expires: 86400, default: Date.now }
  },
);

const Wisp = mongoose.model("Wisp", wispSchema);

module.exports = Wisp;
