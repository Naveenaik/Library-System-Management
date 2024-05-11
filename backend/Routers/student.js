const { Router } = require("express");

const conn = require("../connection");

const router = Router();

router.get("/student1", async (req, res) => {
  const query = `select USN,Name,Dept from students where year = 1`;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    // console.log(result);
    res.send(result);
  });
});
router.get("/student2", async (req, res) => {
  const query = `select USN,Name,Dept from students where year = 2`;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    // console.log(result);
    res.send(result);
  });
});
router.get("/student3", async (req, res) => {
  const query = `select USN,Name,Dept from students where year = 3`;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    // console.log(result);
    res.send(result);
  });
});
router.get("/student4", async (req, res) => {
  const query = `select USN,Name,Dept from students where year = 4`;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    // console.log(result);
    res.send(result);
  });
});

router.post("/student/save", async (req, res) => {
  console.log(req.body);
  const { USN, Name, Year, Dept, Email} = req.body;
  const query = `INSERT INTO students (USN, Name, Year, Dept, Email) VALUES (?, ?, ?, ?, ?)`;

  const values = [USN, Name, Year, Dept, Email];

  conn.query(query, values, (error, result) => {
    if (error) {
      console.log(error);
     
      return res.status(401).json({ success: false, message: "Entered duplicate USN" });  
    }
    else{
            return res
              .status(200)
              .json({ success: true, message: "Data inserted successfully" });
        }
      }); 
});



router.put("/student/update/:USN", async (req, res) => {
  const _usn = req.params.USN;
  const { USN, Name, Year,Dept, Email} = req.body;
  const query = `update students set  Name = ?,Year = ?, Dept=?, Email = ? where USN = ?`;

  const values = [Name, Year, Dept, Email, _usn];

  conn.query(query, values, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    console.log("Data updated successfully");
    console.log(result);

    res
      .status(200)
      .json({ success: true, message: "Data updated successfully" });
  });
});

router.delete("/student/delete/:USN", async (req, res) => {
  const _usn = req.params.USN;
  const query = `delete from students where USN = ? `;
  values = [_usn];
  conn.query(query, values, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Errir" });
    }
    console.log(result);
    console.log("Data deleted successfully");
    // console.log(result);
    // res.status(200).json({ success: true, message: 'Book deleted successfully' });
  });
});

module.exports = router;
