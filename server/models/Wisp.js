const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wispSchema = new Schema(
  {
    content: String,
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    // expireAt: {type:Date, default: new Date.setSeconds(new Date()+10)}

  },
  {
    timestamps: { createdAt: "created_at" }
  },
);

const Wisp = mongoose.model("Wisp", wispSchema);

module.exports = Wisp;
