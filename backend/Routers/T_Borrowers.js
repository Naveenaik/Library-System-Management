const { Router } = require("express");

const conn = require("../connection");

const router = Router();

router.get("/getteacher/:Dept", async (req, res) => {
  console.log("called");
  const dept = req.params.Dept;
  console.log(dept);
  const query = `select TeachId from teachers  where Dept = ?`;
  const values = [dept];
  conn.query(query, values, (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
});

router.get("/t-borrowed1", async (req, res) => {
  const query = `select tb.*, b.Title from teachers t,books b,teach_Borrow tb where tb.Dept ='CSE' and t.TeachId = tb.TeachId and tb.Book_id = b.Book_id `;

  conn.query(query, (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
});
router.get("/t-borrowed2", async (req, res) => {
    const query = `select tb.*, b.Title from teachers t,books b,teach_Borrow tb where tb.Dept ='ISE' and t.TeachId = tb.TeachId and tb.Book_id = b.Book_id `;
  
    conn.query(query, (error, result) => {
      if (error) console.log(error);
      res.send(result);
    });
  });
  router.get("/t-borrowed3", async (req, res) => {
    const query = `select tb.*, b.Title from teachers t,books b,teach_Borrow tb where tb.Dept ='ECE' and t.TeachId = tb.TeachId and tb.Book_id = b.Book_id `;
  
    conn.query(query, (error, result) => {
      if (error) console.log(error);
      res.send(result);
    });
  });
  router.get("/t-borrowed4", async (req, res) => {
    const query = `select tb.*, b.Title from teachers t,books b,teach_Borrow tb where tb.Dept ='ME' and t.TeachId = tb.TeachId and tb.Book_id = b.Book_id `;
  
    conn.query(query, (error, result) => {
      if (error) console.log(error);
      res.send(result);
    });
  });
  router.get("/t-borrowed5", async (req, res) => {
    const query = `select tb.*, b.Title from teachers t,books b,teach_Borrow tb where tb.Dept ='CV' and t.TeachId = tb.TeachId and tb.Book_id = b.Book_id `;
  
    conn.query(query, (error, result) => {
      if (error) console.log(error);
      res.send(result);
    });
  });

router.post("/t-borrowed/save", async (req, res) => {
  console.log(req.body);
  const { TeachId, Dept, Book_id } = req.body;

  const query = `INSERT INTO teach_Borrow (TeachId, Dept, Book_id, Date_out) VALUES (?, ?, ?, ?)`;

  const currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear();

  const Date_out = `${year}-${month}-${day}`;

  const values = [TeachId, Dept, Book_id, Date_out];

  conn.query(query, values, (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    else
     {
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

router.put("/t-borrowed/update/:TecahId/:Book_id", async (req, res) => {
  const _tecahId = req.params.TecahId;
  const _bookId = req.params.Book_id;
  const { Book_id } = req.body;
  console.log(_bookId);
  const query = `update teach_Borrow set Book_id = ? where TeachId = ? and Book_id = ?`;

  const values = [Book_id, _tecahId,_bookId];

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

router.delete("/t-borrowed/delete/:TeachId/:Book_id", async (req, res) => {
  const _tecahId = req.params.TeachId;
  const _bookId = req.params.Book_id;
  const query = `delete from teach_Borrow where TeachId = ? and Book_id = ?`;
  values = [_tecahId, _bookId];
  conn.query(query, values, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Errir" });
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
