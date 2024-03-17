const pool = require("../models/db");

const getBlogInformation = async (req, res) => {
  try {
    const Information = await pool.query(`SELECT * FROM blog`);
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

const updateBlogInformation = async (req, res) => {
  const {id} = req.params
  const { aboutme, title, image } = req.body;
  const placeholder = [aboutme, title, image,id];
  console.log(placeholder);
  try {
    const updateInformation = await pool.query(
      `UPDATE blog SET ( aboutme,title,image,id) = (COALESCE($1, aboutMe),COALESCE($2, title),COALESCE($3, image) ) WHERE id =$4 RETURNING *`,
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

const createBlogInformation = async (req,res) => {
  const { title, aboutme,image } = req.body;
  const placeholder = [title, aboutme,image];
  try {
    const createInformation = await pool.query(
      `INSERT INTO
            blog (title, aboutme,image)
          VALUES
            ($1,$2,$3) RETURNING *`,
      placeholder
    );
    res.status(200).json({
      success: true,
      message: "Created information",
      result: createInformation.rows,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
}
module.exports = {
  getBlogInformation,
  updateBlogInformation,
  createBlogInformation,
};
