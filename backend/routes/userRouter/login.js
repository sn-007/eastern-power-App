const express = require("express")

const User = require("../../schemas/userSchema")


//Stroring express router in router var
var router = express.Router();




const loginFunction = async (req, res) =>  {
    
    const user = await User.findOne({
        email: req.body.email
    });

    if (user) {
        user.password === req.body.password ? res.status(200).json({ message: "OK" })
            : res.status(200).json({ message: "MISMATCH" })
    }

    else {
        res.status(200).json({ message: "USER_NOT_FOUND" })
    }
}

//Register the User

router.post("/login", loginFunction);



module.exports = router;
