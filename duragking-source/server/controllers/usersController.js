const User = require("../models/user"),
  passport = require("passport"),
  jsonWebToken = require("jsonwebtoken"),
  getUserParams = (body) => {
    return {
      name: {
        first: body.name.first,
        last: body.name.last
      },
      email: body.email,
      password: body.password,
      address: {
        firstLine: body.address.firstLine,
        secondLine: body.address.secondLine,
        thirdLine: body.address.thirdLine,
        fourthLine: body.address.fourthLine,
        postcode: body.address.postcode,
        city: body.address.city
      }
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
      .catch(error => {
        console.log(`Error creating user: ${error.message}`);
        next(error);
      });
  },
  show: (req, res, next) => {
    let userId = req.params.id;
    User.findById(userId)
      .then(user => {
        res.json(user);
        next();
      })
      .catch(error => {
        console.log(`Error fetching user by ID: ${error.message}`);
        next(error);
      });
  }
};
