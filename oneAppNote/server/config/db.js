import Mongoose from "mongoose";

const connectDB = async() => {
  try {
    const connect = await Mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
    //   useCreateIndex: true,
      // useNewUrlParser: true,
        // useFindAndModify: false,
    });

    console.log(`MongoDb Connected Successfully ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

export default connectDB;
