const router = require("express").Router(),
    usersController = require("../controllers/usersController")

router.get("/users", usersController.index)
router.post("/users/new", usersController.create)
router.get("/users/:id", usersController.show)

module.exports = router