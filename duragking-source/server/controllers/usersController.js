const User = require("../models/user"),
  passport = require("passport"),
  jsonWebToken = require("jsonwebtoken"),
  httpStatus = require("http-status-codes"),
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
    let newUser = new User(getUserParams(req.body));
    User.register(newUser, req.body.password, (error, user) => {
      if (user) {
        res.json(user)
        next();
      } else {
        console.log(error);
        next(error);
      }
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
  },
  update: (req, res, next) => {
    let userId = req.params.id,
    userParams = req.body;
    User.findByIdAndUpdate(userId, 
      { $set: userParams },
      { new: true }
      )
      .then(user => {
        res.json(user)
      }
      )
      .catch(error => {
        console.log(`Error updating user by ID: ${error.message}`);
        next(error);
      });
  },
  delete: (req, res, next) => {
    let userId = req.params.id;
    User.findByIdAndRemove(userId)
      .then(() => {
        res.json({ message: "User account successfully deleted" });
        next();
      })
      .catch(error => {
        console.log(`Error deleting user by ID: ${error.message}`);
        next();
      });
  },
  apiAuthenticate: (req, res, next) => {
    passport.authenticate("local", (errors, user) => {
      if (user) {
        let signedToken = jsonWebToken.sign(
          {
            data: user._id,
            exp: new Date().setDate(new Date().getDate() + 1)
          },
          "S3cr3tdUrAgT0k3n"
        );
        res.json({
          success: true,
          token: signedToken
        });
      } else
        res.json({
          success: false,
          message: "Could not authenticate user."
        });
    })(req, res, next);
  },
  verifyJWT: (req, res, next) => {
    console.log(req.headers)
    let token = req.headers.token;
    if (token) {
      jsonWebToken.verify(token, "S3cr3tdUrAgT0k3n", (errors, payload) => {
        if (payload) {
          User.findById(payload.data).then(user => {
            if (user) {
              next();
            } else {
              res.status(httpStatus.FORBIDDEN).json({
                error: true,
                message: "No User account found."
              });
            }
          });
        } else {
          res.status(httpStatus.UNAUTHORIZED).json({
            error: true,
            message: "Cannot verify API token."
          });
          next();
        }
      });
    } else {
      res.status(httpStatus.UNAUTHORIZED).json({
        error: true,
        message: "Provide Token"
      });
    }
  }
};
