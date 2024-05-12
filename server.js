const http = require("http");
const app = require("./index");
const { PORT, DATABASE_CONNECT_STRING } = require("./config/config");
const { default: mongoose } = require("mongoose");

const server = http.createServer(app);
mongoose
  .connect(DATABASE_CONNECT_STRING, { dbName: "blog" })
  .then(() => {
    console.log("Connection to MongoDB successful");
    server.listen(PORT, () =>
      console.log(`Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.log("Connection to MongoDB failed", err.message);
  });
