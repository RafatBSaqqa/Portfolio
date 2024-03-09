const pool = require("../models/db");

const authorization = (string) => {
  return function (req, res, next) {
    const role = req.token.userId;
    console.log(role);
    const data = [string, role];
    const query = `SELECT id,permission FROM admins WHERE id=$2 AND permission = $1`;
    pool
      .query(query, data)
      .then((result) => {
        if (result.rows.length) {
          next();
        } else {
          throw Error;
        }
      })
      .catch((err) => {
        res.status(400).json({ message: "unauthorized" });
      });
  };
};

module.exports = authorization;
