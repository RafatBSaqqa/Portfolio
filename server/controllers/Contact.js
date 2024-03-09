const pool = require("../models/db");

const getContactInformation = async (req, res) => {
  try {
    const Information = await pool.query(`SELECT * FROM contact`);
    res.status(200).json({
      success: true,
      message: "All information",
      result: Information.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
};

const updateContactInformation = async (req, res) => {
  const { phone, mail } = req.body;
  const placeholder = [phone, mail];
  try {
    const updateInformation = await pool.query(
      `UPDATE contact SET (phone, mail) = ( COALESCE($1, phone), COALESCE($2, mail) ) RETURNING *`,
      placeholder
    );
    res.status(200).json({
      success: true,
      message: "Update information",
      result: updateInformation.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
};
module.exports = {
  getContactInformation,
  updateContactInformation,
};
