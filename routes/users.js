const express = require("express");
const {
  createUser,
  getAllUsers

} = require("../controllers/userController");


const router = express.Router();


// POST /api/users - Create a new user
router.post("/node", createUser);
router.get("/", getAllUsers);





module.exports = router;
