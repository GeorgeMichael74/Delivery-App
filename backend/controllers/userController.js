import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"; //authentiction
import bcrypt from "bcrypt"; // encrypt the user data and store
import validator from "validator"; // check the password or email id valid or not.


// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({ success: false, message: "Benutzer existiert nicht" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "ungültige Anmeldedaten" });
        }

        const token = createToken(user._id);
        res.json({success: true, token})
    } catch (error) {
        console.log(error);
        res.json({success: false, message:"Fahler"})
    }
}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

// register user
const registerUser = async (req, res) => {
    const {name, password, email} = req.body;
    try {
        // checking is user already exists
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success: false, message: "Benutzer existiert bereits"});
        }

        // validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Geben Sie bitte eine gültige E-Mail-Adresse ein" });
        }

        // checking password
        if(password.length<8) {
            return res.json({ success: false, message: "Geben Sie bitte ein sicheres Passwort ein" });
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success:true, token });

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Fahler"});
    }
}

export {loginUser, registerUser};