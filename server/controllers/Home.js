const pool = require("../models/db");

const getPersonalInformation = async (req, res) => {
  try {
    const Information = await pool.query(`SELECT * FROM personal_information`);
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

const updatePersonalInformation = async (req, res) => {
  const { position, bio, image } = req.body;
  const placeholder = [position, bio, image];
  try {
    const updateInformation = await pool.query(
      `UPDATE personal_information SET (position,bio,image) = ( COALESCE($1, position), COALESCE($2, bio), COALESCE($3, image) ) RETURNING *`,
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
  getPersonalInformation,
  updatePersonalInformation,
};
