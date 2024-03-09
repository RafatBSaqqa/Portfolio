const pool = require("../models/db");

const getAboutInformation = async (req, res) => {
  try {
    const Information = await pool.query(`SELECT * FROM about`);
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

const updateAboutInformation = async (req, res) => {
  const { about_me } = req.body;
  const placeholder = [about_me];
  
  try {
    const updateInformation = await pool.query(
      `UPDATE about SET about_me =  COALESCE($1, about_me)  RETURNING *`,
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
  getAboutInformation,
  updateAboutInformation,
};
