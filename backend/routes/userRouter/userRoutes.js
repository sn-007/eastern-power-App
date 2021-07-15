const express = require("express")
var router = express.Router();


//Acquireiing the routers
const login = require("./login");
const register = require("./register");



//Routes
router.use("",login );
router.use("", register);


module.exports = router;
