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
  const { about_me, title, image } = req.body;
  const placeholder = [about_me, title, image];

  try {
    const updateInformation = await pool.query(
      `UPDATE projects SET ( title,about_me,image) =  (COALESCE($1, title),COALESCE($2, about_me),COALESCE($3, image) ) RETURNING *`,
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
