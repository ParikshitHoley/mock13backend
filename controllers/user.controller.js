const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const { User } = require("../modals/user.modals");

const saltRounds = 8



// user signUp
exports.signUp = async (req, res, next) => {

    try {
        const { name,email, password, } = req.body
        
        const salt = await bcrypt.genSalt(saltRounds)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            name,
            email,
            password: hashPassword,
        })
        const savedUser = await newUser.save()
        return res.status(200).send("user successfully saved");

    }
    catch (err) {
    console.log(err);
    return res.status(500).send("Error");
  }
}



// user  login

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    try {

        if (!user) {
           
              return res.status(400).send("User does not exist");

        }
        const isMatchPassword = await bcrypt.compare(password, user.password)

        if (!isMatchPassword) {
            
              return res.status(400).send("Invalid Credentials");
        }

    } catch (err) {
    console.log(err);
    return res.status(500).send("Error");
  }

    const token = jwt.sign({ id: user._id }, "adhjkadol")
    user.password = ""
   
   
    return res.status(200).send({ user, token });


}