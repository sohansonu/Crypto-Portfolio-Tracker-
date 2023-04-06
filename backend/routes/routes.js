const express = require("express");
const router = express.Router();
//import controllers
const {login,signUp} = require("../controllers/handler")


//API routes
router.get('/login',login);
router.post('/signup',signUp);

module.exports = router;