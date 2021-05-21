const mongoose = require("mongoose"),
  { Schema } = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose");

let userSchema = new Schema(
  {
    name: { 
      first: {
        type: String,
        required: true,
        trim: true
      },
      last: {
        type: String,
        required: true,
        trim: true
      }
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
    address: {
      firstLine: {
        type: String,
        required: true,
        trim: true
      },
      secondLine: {
        type: String,
        trim: true
      },
      thirdLine: {
        type: String,
        trim: true
      },
      fourthLine: {
        type: String,
        trim: true
      },
      postcode: {
        type: String,
        required: true,
        trim: true
      },
      city: {
        type: String,
        required: true,
        trim: true
      }

    },
    paymentMethods: [],
    basket: [],
    wishlist: [],
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("fullName").get(function () {
  return `${this.name.first} ${this.name.last}`;
});

/*   userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
  });
 */

module.exports = mongoose.model("User", userSchema);
