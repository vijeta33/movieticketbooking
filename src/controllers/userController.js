
const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')



const createUser = async function (req, res) {
    try {
        let userBody = req.body
        let { name,email,password } = userBody;
        
        const salt = await bcrypt.genSalt(10);
       password = await bcrypt.hash(password, salt)
        const userdata = {  name,email,password }
        const createddata = await userModel.create(userdata)
        return res.status(201).send({ status: true, message: 'success', data: createddata })

    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}



const userLogin = async (req, res) => {
    try {
        const myEmail = req.body.email
        const myPassword = req.body.password

        let user = await userModel.findOne({ email: myEmail , password:myPassword });
        if (user) {
           const validPassword = await bcrypt.compare(myPassword, password);
            if (!validPassword) {
                return res.status(400).send({ message: "Invalid Password" })
            }
            let payload = { userId: user._id, email: myEmail };
            const generatedToken = jwt.sign(payload, "movie");

            res.header('x-api-key', generatedToken);
            return res.status(200).send({
                //Message: fname + " " + lname + " you have logged in Succesfully",
                userId: user._id,
                token: generatedToken,
            });
        } else {
            return res.status(400).send({ status: false, message: "Invalid credentials" });
        }
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
};

module.exports ={createUser,userLogin}
