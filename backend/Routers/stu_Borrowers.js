const { Router } = require("express");

const conn = require("../connection");

const router = Router();

router.get("/getstudent/:Year/:Dept", async (req, res) => {
  console.log("called");
  const year = req.params.Year;
  const dept = req.params.Dept;
  console.log(year, dept);
  const query = `select USN from students  where Year = ? and Dept = ?`;
  const values = [year, dept];
  conn.query(query, values, (error, result) => {
    if (error) console.log(error);
    // console.log(result);
    res.send(result);
  });
});

router.get("/getbooks", async (req, res) => {
  const query = `select Book_id,Title from books;`;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
});

router.get("/borrowed1", async (req, res) => {
  const query = `select s.USN,s.Dept, b.Title,sb.Book_id from students s, books b,stu_borrow sb where s.Year = 1 and s.USN = sb.USN and sb.Book_id= b.Book_id`;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    // console.log(result);
    res.send(result);
  });
});
router.get("/borrowed2", async (req, res) => {
  const query = `select s.USN,s.Dept, b.Title,sb.Book_id from students s, books b,stu_borrow sb where s.Year = 2 and s.USN = sb.USN and sb.Book_id= b.Book_id`;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    // console.log(result);
    res.send(result);
  });
});
router.get("/borrowed3", async (req, res) => {
  const query = `select s.USN,s.Dept, b.Title,sb.Book_id from students s, books b,stu_borrow sb where s.Year = 3 and s.USN = sb.USN and sb.Book_id= b.Book_id`;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    // console.log(result);
    res.send(result);
  });
});
router.get("/borrowed4", async (req, res) => {
  const query = `select s.USN,s.Dept, b.Title,sb.Book_id from students s, books b,stu_borrow sb where s.Year = 4 and s.USN = sb.USN and sb.Book_id= b.Book_id`;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    // console.log(result);
    res.send(result);
  });
});

router.post("/borrowed/save", async (req, res) => {
  console.log(req.body);
  const { Year, Dept, USN, Book_id } = req.body;
  const query = `INSERT INTO stu_borrow (USN,Year,Dept, Book_id, Date_out) VALUES (?, ?, ?, ?, ?)`;

  const currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear();

  const Date_out = `${year}-${month}-${day}`;

  const values = [USN, Year, Dept, Book_id, Date_out];

  conn.query(query, values, (error, result) => {
    if (error) {
      return res
        .status(401)
        .json({ success: false, message: "Entered duplicate USN" });
    } else {
      const availQuery = `select Available from books where Book_id = ?`;

      conn.query(availQuery, [Book_id], (error, result) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const available = result[0].Available;
        if (available === 0) {
          return res.status(400).json({ error: "No more books available" });
        } else {
          const updateQuery = `update books SET Available = ? where Book_id = ?`;

          conn.query(updateQuery, [available - 1, Book_id], (error, result) => {
            if (error) {
              console.log(error);
              return res.status(500).json({ error: "Internal Server Error" });
            }
            console.log("Available books updated successfully");
            return res
              .status(200)
              .json({ success: true, message: "Data inserted successfully" });
          });
        }
      });
    }
  });
});

router.put("/borrowed/update/:USN/:Book_id", async (req, res) => {
  const _usn = req.params.USN;
  const _bookId = req.params.Book_id;
  const { Book_id } = req.body;
  const query = `update stu_borrow set Book_id = ? where USN = ? and Book_id = ?`;

  const values = [Book_id, _usn, _bookId];

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

router.delete("/borrowed/delete/:USN/:Book_id", async (req, res) => {
  const _usn = req.params.USN;
  const _bookId = req.params.Book_id;
  // console.log(_bookId);
  const query = `delete from stu_borrow where USN = ? AND Book_id = ?`;
  values = [_usn, _bookId];
  conn.query(query, values, (error, result) => {
    if (error) {
      console.log("Hp");
      console.log(error);
      return res.status(500).json({ error: "Internal Server Err0r" });
    }
    else
    {
      const availQuery = `select Available from books where Book_id = ?`;

      conn.query(availQuery, _bookId, (error, result) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

          const available = result[0].Available;

          const updateQuery = `update books SET Available = ? where Book_id = ?`;

          conn.query(updateQuery, [available + 1, _bookId], (error, result) => {
            if (error) {
              console.log(error);
              return res.status(500).json({ error: "Internal Server Error" });
            }
            console.log("Available books updated successfully");
            return res
              .status(200)
              .json({ success: true, message: "Data deleted successfully" });
          });
      });
    }
  });
});

module.exports = router;
