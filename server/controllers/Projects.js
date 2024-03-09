const pool = require("../models/db");

const getProjectInformation = async (req, res) => {
  try {
    const Information = await pool.query(`SELECT * FROM projects`);
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

const updateProjectInformation = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const placeholder = [title, description, id];

  try {
    const updateInformation = await pool.query(
      `UPDATE projects SET ( title,description) =  (COALESCE($1, title),COALESCE($2, description)) WHERE id = $3 RETURNING *`,
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

const createProjectInformation = async (req, res) => {
  const { title, description } = req.body;
  const placeholder = [title, description];
  try {
    const createInformation = await pool.query(
      `INSERT INTO
            projects (title,description)
          VALUES
            ($1,$2) RETURNING *`,
      placeholder
    );
    res.status(200).json({
      success: true,
      message: "Update information",
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
};

const deleteProjectInformation  = async(req,res) => {
  const {id} = req.params
  const placeholder = [id]
  try {
    const deleteInformation = await pool.query(`DELETE FROM projects WHERE id = $1`,placeholder)
    res.status(200).json({
      success: true,
      message: "Delete information",
      result: deleteInformation.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error
    });
  }
}
module.exports = {
  getProjectInformation,
  updateProjectInformation,
  createProjectInformation,
  deleteProjectInformation
};
