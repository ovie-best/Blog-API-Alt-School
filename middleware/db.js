const mongoose = require("mongoose");

module.exports = (URI) => {
  mongoose
    .connect(URI, { dbName: "blog" })
    .then(() => {
      console.log("Connection to MongoDB successful");
    })
    .catch((err) => {
      console.log("Connection to MongoDB failed", err.message);
    });
};
