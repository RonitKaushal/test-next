import UserModel from "./models";
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'

export const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if all fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const existUser = await UserModel.findOne({ email });
        if (existUser) {
            return res.status(401).json({ success: false, message: "User already exists" });
        }

        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(200).json({ message: "User registered successfully", newUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
        console.log(error);
    }
};