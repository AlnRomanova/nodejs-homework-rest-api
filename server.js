const mongoose = require("mongoose");
const app = require("./app");

const { MONGO_CONNECTION_STRING: mongoConnectionString, PORT = 3000 } = process.env;
run();
async function run() {
  try {
    await mongoose
      .connect(mongoConnectionString)
      .then(() => console.log("Database connection successful"));
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  } catch (err) {
    console.error("err");
    process.exit(1);
  }
}
