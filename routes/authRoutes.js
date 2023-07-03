const { registerController, loginController, currentUserController } = require("../controllers/authController");

const express = require('express');
const authmiddelware = require("../middlewares/authMiddelware");

const router = express.Router();

//routes
// register || post
router.post('/register',registerController)

// login || post
router.post('/login', loginController)

// get current user || get
router.get('/current-user',authmiddelware,currentUserController)

module.exports = router;

