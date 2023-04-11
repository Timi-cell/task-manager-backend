const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Successfully Connected!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

// Use this function in server.js to connect to mongoDB and start the server

/*
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () =>
      console.log(`Server currently listening on port ${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();

*/
