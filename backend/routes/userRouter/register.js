const express = require("express")

const User = require("../../schemas/userSchema")


//Stroring express router in router var
var router = express.Router();


const registerFunction = async (req, res) => {

    console.log("/user/register")

    let verification=""
    try {
        verification = await User.findOne({ email: req.body.email });
    }
    catch (e) {
        res.status(200).json({ message: "ERROR" })
    }


    if (!verification) {
        const newUser = new User({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email

        });

        newUser.save()
            .then(user => res.status(200).json({ message: "OK" }))
            .catch(err => res.status(200).json({ message: err }));

    }

    else {
        res.status(200).json({ message: "USER_ALREADY_EXISTED" });
    }


}






router.post("/register", registerFunction);
module.exports = router;
