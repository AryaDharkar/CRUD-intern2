const express = require("express");
const app = express();
const multer = require("multer");
const sql = require("mysql2");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());

//create connection to local sql database
const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "abc123",
  database: "internTask3",
});

//configure storing of uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.use("/uploads", express.static("uploads"));

app.post("/create", upload.single("file"), (req, res) => {
  let data = [req.body.name, req.body.roll, req.body.marks, req.file.filename];
  console.log(data);
  let query =
    "insert into internTask3(name, roll, marks, file) values(?, ?, ?, ?)";
  db.query(query, data, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/read", (req, res) => {
  let query = "select * from internTask3";
  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:roll", (req, res) => {
  const roll = req.params.roll;
  db.query(
    "SELECT file FROM internTask3 WHERE roll = ?",
    [roll],
    (err, result) => {
      if (err) {
        return res.send(err);
      }
      const fileName = result[0].file;
      fs.unlink(`uploads/${fileName}`, (err) => {
        if (err) {
          return res.send(err);
        }
        db.query(
          "DELETE FROM internTask3 WHERE roll = ?",
          [roll],
          (err, result) => {
            if (err) {
              res.send(err);
            } else {
              res.send(result);
            }
          }
        );
      });
    }
  );
});

app.get("/download/:file", (req, res) => {
  const fileName = req.params.file;
  const filePath = path.join(__dirname, "uploads", fileName);

  res.download(filePath, fileName, (err) => {
    if (err) {
      console.log("Error downloading file: ", err);
      res.status(500).send("Error downloading file.");
    }
  });
});

app.listen(9000, () => {
  console.log("Server running on port 9000");
});
