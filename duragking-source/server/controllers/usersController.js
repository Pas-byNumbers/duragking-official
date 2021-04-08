const User = require("../models/user"),
  passport = require("passport"),
  jsonWebToken = require("jsonwebtoken"),
  getUserParams = (body) => {
    return {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
    };
  };

module.exports = {
  index: (req, res, next) => {
    User.find()
      .then((users) => {
        res.json(users);
        next();
      })
      .catch((error) => {
        console.log(`Error fetching users: ${error.message}`);
        next(error);
      });
  },
  create: (req, res, next) => {
    if (req.skip) next();
    let userParams = getUserParams(req.body);
    User.create(userParams)
      .then((user) => {
        res.json(user);
        next();
      })
      .catch((error) => {
        console.log(`Error creating user: ${error.message}`);
        next(error);
      });
  },
};
