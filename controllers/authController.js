import userModel from "../models/userModel";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;

    // validation
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!password) {
      return res.send({ error: "Password is required" });
    }
    if (!address) {
      return res.send({ error: "Address is required" });
    }

    // Check user
    const existingUser = await userModel.findOne({ email });
    // existing user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "User already registered",
      });
    }
  } catch (error) {
    console.log(error);
    req.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};
