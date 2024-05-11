const { Router } = require("express");

const conn = require("../connection");

const router = Router();

router.get("/admin", async (req, res) => {
  conn.query(
    "select username,password from admins where admin_id = 1",
    (error, result) => {
      if (error) console.log(error);
      // console.log(result);
      res.send(result);
    }
  );
});

router.post("/admin/save", async (req, res) => {
  console.log(req.body);
  const { userName, Password } = req.body;

  const query = `INSERT INTO admins (username, password) VALUES (?, ?)`;

  const values = [userName, Password];

  conn.query(query, values, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    console.log("Data inserted successfully");
    console.log(result);

    res
      .status(200)
      .json({ success: true, message: "Data inserted successfully" });
  });
});


router.post("/admin/login", async (req, res) => {
  const { userName, Password } = req.body;
  // if(userName && Password)
  //     res.status(500).json({ success: false, message: 'User name or password is wrong' });

  const query = `select * from admins where username = ? and password = ? `;

  const values = [userName, Password];

  conn.query(query, values, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (result.length === 0) {
      return res.status(401).json({ success: false, message: "Invalid username or password" });
    }
    console.log("Login successfully");
    console.log(result);

    res.status(200).json({ success: true, message: "Login successfully" });
  });
});


router.put("/admin/update", async (req, res) => {
  const { userName, Password } = req.body;
  const query = `update admins set username = ?,password = ? where admin_id = 1`;

  const values = [userName, Password];

  conn.query(query, values, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    console.log("Data updated successfully");
    console.log(result);

    res.status(200).json({ success: true, message: "Username or password changed successfully" });
  });
});

module.exports = router;
