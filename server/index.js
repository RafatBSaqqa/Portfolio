require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./models/db");
const app = express();
//built-in middleware

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;


// Home router
const homeRouter = require("./routes/Home");
app.use("/home", homeRouter);
// Contact router
const contactRouter = require("./routes/Contact");
app.use("/contact", contactRouter);
// About router
const aboutRouter = require("./routes/About");
app.use("/about", aboutRouter);
// Projects router
const projectRouter = require("./routes/Projects");
app.use("/projects", projectRouter);

// Admin router
const adminRouter = require("./routes/Admin");
app.use("/admin", adminRouter);
// Handles any other endpoints [unassigned - endpoints]

app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
