const express = require("express");
const userController = require("../controller/user");

const router = express.Router();

router.get("/", userController.getAllUser);
router.get("/:id", userController.getUser);
router.post("/", userController.createUser);
router.put("/:id", userController.replaceUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

exports.router = router;