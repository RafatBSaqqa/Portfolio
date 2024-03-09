const pool = require("../models/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const adminLoging = async(req,res) => {
    const {email, password} = req.body
    // const encryptedPassword = await bcrypt.hash(password, 7);
    const placeholder = [email]
    try {
        const result = await pool.query(`SELECT * FROM admins WHERE email = $1`,placeholder)
        if (result.rows.length) {
            bcrypt.compare(password, result.rows[0].password, (err, response) => {
              if (err) res.json(err);
              if (response) {
                const payload = {
                  userId: result.rows[0].id,
                  role: result.rows[0].permission,
                };
                const options = { expiresIn: "1d" };
                const secret = process.env.SECRET;
                const token = jwt.sign(payload, secret, options);
                if (token) {
                  return res.status(200).json({
                    token,
                    success: true,
                    message: `Valid login credentials`,
                    userId: result.rows[0].id,
                  });
                } else {
                  throw Error;
                }
              } else {
                res.status(403).json({
                  success: false,
                  message: `The email doesn’t exist or the password you’ve entered is incorrect`,
                });
              }
            });
          } else throw Error;
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Server error",
            error
        })
    }
}

module.exports = {
    adminLoging
}