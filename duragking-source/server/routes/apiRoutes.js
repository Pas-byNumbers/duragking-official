const router = require("express").Router(),
    usersController = require("../controllers/usersController")

router.get("/users", usersController.index)
router.post("/users/new", usersController.create)
router.get("/users/:id", usersController.show)
router.post("/users/delete/:id", usersController.delete)
router.patch("/users/update/:id", usersController.update)

module.exports = router