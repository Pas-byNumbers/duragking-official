const router = require("express").Router(),
    usersController = require("../controllers/usersController")

router.get("/users", usersController.index)
router.post("/users", usersController.create)

module.exports = router