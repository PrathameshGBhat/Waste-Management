import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelpers.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, address, answer } = req.body;

    // validation
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    if (!address) {
      return res.send({ message: "Address is required" });
    }
    if (!answer) {
      return res.send({ message: "Answer is required" });
    }

    // Check user
    const existingUser = await userModel.findOne({ email });
    // existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already registered",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    req.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};

//POST LOGIN

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfull",
      user: {
        name: user.name,
        email: user.email,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//forgotPasswordController

export const forgotPasswordController = async (req,res) => {
  try{
    const {email, answer, newPassword} = req.body
    if(!error){
      res.status(400).send({message:'Email is Required'})
    }
    if(!answer){
      res.status(400).send({message:'Answer is Required'})
    }
    if(!newPassword){
      res.status(400).send({message:'New Password is Required'})
    }
    //check
    const user = await userModel.findOne({email,answer})
    //validation
    if(!user){
      return res.status(404).send({
        success:false,
        message:"Wrong Email Or Answer"
      })
    }
    const hashed = await hashedPassword(newPassword)
    await userModel.findByIdAndUpdate(user._id,{password:hashed})
    res.status(200).send({
      success:true,
      message:"Password Reset Successfully",
    })
  }catch(error){
    console.log(error);
    res.status(500).send({
      success:false,
      message:'Something Went Worng',
      error,
    });
  }
};


//test Controller
export const testController = (req, res) => {
  res.send("Protected Routes");
};
