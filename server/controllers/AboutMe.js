const pool = require("../models/db");

const getAboutMeInformation = async (req, res) => {
  try {
    const Information = await pool.query(`SELECT * FROM aboutme`);
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

const updateAboutMeInformation = async (req, res) => {
  const { aboutMe, title } = req.body;
  const placeholder = [aboutMe, title];
  console.log(placeholder);
  try {
    const updateInformation = await pool.query(
      `UPDATE aboutme SET ( aboutMe,title) = (COALESCE($1, aboutMe),COALESCE($2, title)) WHERE id =1 RETURNING *`,
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
  getAboutMeInformation,
  updateAboutMeInformation,
};
