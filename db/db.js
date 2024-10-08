const mongoDB = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

exports.connectToDB = async () => {
  try {
    await mongoDB.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Could not connect to MongoDB...", err);
  }
};
