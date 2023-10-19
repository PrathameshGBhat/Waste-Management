import mongoose from "mongoose";
import colors from "colors";

// connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connection to Mon goDB successfully!! ${conn.connection.host}`.bgYellow
        .white
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.white);
  }
};

export default connectDB;
