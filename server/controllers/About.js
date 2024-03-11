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
  const { aboutMe, title, image } = req.body;
  const placeholder = [aboutMe, title, image];
  console.log(placeholder);
  try {
    const updateInformation = await pool.query(
      `UPDATE about SET ( aboutMe,title,image) = (COALESCE($1, aboutMe),COALESCE($2, title),COALESCE($3, image) ) WHERE id =1 RETURNING *`,
      placeholder
    );
    res.status(200).json({
      success: true,
      message: "Update information",
      result: updateInformation.rows,
    });
  } catch (error) {
    console.log(error.message);
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
