const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ MySQL Connection Setup
const db = mysql.createConnection({
  host: "srv877.hstgr.io",
  user: "u526606626_user",
  password: "Ustolaofficial@2003", // change this if you set a password
  database: "u526606626_contact"
});

db.connect((err) => {
  if (err) {
    console.error("DB connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

// ✅ Route to handle form submission
app.post("/u526606626_contact", (req, res) => {
  const { name, phone, city, service } = req.body;
  const sql = "INSERT INTO lead (name, phone, city, service) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, phone, city, service], (err, result) => {
    if (err) {
      console.error("❌ Error inserting data:", err);
      return res.status(500).send("Error inserting data");
    }
    return res.status(200).send("Form submitted successfully!");
  });
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
