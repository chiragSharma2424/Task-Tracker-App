import dotenv from 'dotenv'
dotenv.config()
import userModel from "../models/user-model.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            res.json(404).json({
                msg: "Please enter your credentials"
            })
        }

        const userAlreadyExists = await userModel.findOne({ email });
        if(userAlreadyExists) {
            res.status(400).json({
                msg: "user already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        const newUser = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword
        })

        const token = jwt.sign({
            id: newUser._id
        }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.cookie("token", token);

        res.status(201).json({
            msg: "user signup successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                token: token
            }
        })
    } catch(err) {
        console.log(`error in signup controller ${err}`);
        return res.status(501).json({
            msg: "Internal server error"
        })
    }
}



const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            res.status(404).json({
                msg: "Enter email and password"
            })
        }

        const isUserExists = await userModel.findOne({ email });

        if(!isUserExists) {
            res.status(400).json({
                msg: "user not found"
            })
        }

        const isPasswordValid = bcrypt.compare(password, isUserExists.password);

        if(!isPasswordValid) {
        return res.status(400).json({
            msg: "Invalid password"
         })
       }

        const token = jwt.sign({
            id: isUserExists._id
        }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.cookie('token', token);

        res.status(200).json({
            msg: "user signin successfully",
            user: {
                id: isUserExists._id,
                name: isUserExists.name,
                email: isUserExists.name,
                token: token
            }
        });
    } catch(err) {
        console.log(`error in signin controller ${err}`)
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({
            msg: "user logout successfully"
        });
    } catch(err) {
        console.log(`error in logout controller ${err}`);
    }
}

export { signup, signin, logout };