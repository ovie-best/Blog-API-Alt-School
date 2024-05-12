require("dotenv").config();
const DATABASE_CONNECT_STRING = process.env.DATABASE_CONNECT_STRING;
const PORT = process.env.PORT || 8080;
const SECRET = process.env.SECRET;
// OZHXQ5l7tEEofItu
module.exports = {
  DATABASE_CONNECT_STRING,
  PORT,
  SECRET,
};
