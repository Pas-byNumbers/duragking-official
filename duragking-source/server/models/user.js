const mongoose = require("mongoose"),
  { Schema } = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose");

let userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

/*   userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
  });
 */

module.exports = mongoose.model("User", userSchema);
