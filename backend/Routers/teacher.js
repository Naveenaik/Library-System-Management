const { Router } = require("express");

const conn = require("../connection");

const router = Router();

router.get("/teacher1", async (req, res) => {
  const query = `select * from teachers where Dept = 'CSE' `;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    // console.log(result);
    res.send(result);
  });
});
router.get("/teacher2", async (req, res) => {
    const query = `select * from teachers where Dept = 'ISE' `;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    // console.log(result);
    res.send(result);
  });
});
router.get("/teacher3", async (req, res) => {
    const query = `select * from teachers where Dept = 'ECE' `;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    // console.log(result);
    res.send(result);
  });
});
router.get("/teacher4", async (req, res) => {
    const query = `select * from teachers where Dept = 'ME' `;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    // console.log(result);
    res.send(result);
  });
});
router.get("/teacher5", async (req, res) => {
    const query = `select * from teachers where Dept = 'CV' `;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    // console.log(result);
    res.send(result);
  });
});

router.post("/teacher/save", async (req, res) => {
  console.log(req.body);
  const { TeachId, Name,Dept, Email} = req.body;
  const query = `INSERT INTO teachers (TeachId, Name, Dept, Email) VALUES (?, ?, ?, ?)`;

  const values = [TeachId, Name, Dept, Email];

  conn.query(query, values, (error, result) => {
    if (error) {
     
      return res.status(401).json({ success: false, message: "Entered duplicate TeachId" });  
    }
    else{
            return res
              .status(200)
              .json({ success: true, message: "Data inserted successfully" });
        }
      }); 
});



router.put("/teacher/update/:TeachId", async (req, res) => {
  const _teachid = req.params.TeachId;
  const { TeachId, Name, Dept, Email} = req.body;
  const query = `update teachers set  Name = ?,Dept= ?, Email = ? where TeachId = ?`;

  const values = [Name, Dept, Email, _teachid];

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

router.delete("/teacher/delete/:TeachId", async (req, res) => {
  const _teachid = req.params.TeachId;
  const query = `delete from teachers where TeachId = ? `;
  values = [_teachid];
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
