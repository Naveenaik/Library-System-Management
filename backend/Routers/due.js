const { Router } = require("express");

const conn = require("../connection");

const router = Router();

router.get("/due1", async (req, res) => {
  const query = `select sb.USN,s.Name,sb.Book_id,b.Title, DATE_FORMAT(sb.Date_out, '%d-%m-%y') as Date_out,DATEDIFF(NOW(),sb.Date_out) as days_borrowed from stu_Borrow sb,students s,Books b where s.year = 1 and s.USN = sb.USN and sb.Book_id = b.Book_id and DATEDIFF(NOW(),sb.Date_out) > 15`;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
});
router.get("/due2", async (req, res) => {
  const query = `select sb.USN,s.Name,sb.Book_id,b.Title, DATE_FORMAT(sb.Date_out, '%d-%m-%y') as Date_out,DATEDIFF(NOW(),sb.Date_out) as days_borrowed from stu_Borrow sb,students s,Books b where s.year = 2 and s.USN = sb.USN and sb.Book_id = b.Book_id and DATEDIFF(NOW(),sb.Date_out) > 15`;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
});
router.get("/due3", async (req, res) => {
  const query = `select sb.USN,s.Name,sb.Book_id,b.Title, DATE_FORMAT(sb.Date_out, '%d-%m-%y') as Date_out,DATEDIFF(NOW(),sb.Date_out) as days_borrowed from stu_Borrow sb,students s,Books b where s.year = 3 and s.USN = sb.USN and sb.Book_id = b.Book_id and DATEDIFF(NOW(),sb.Date_out) > 15`;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
});
router.get("/due4", async (req, res) => {
  const query = `select sb.USN,s.Name,sb.Book_id,b.Title, DATE_FORMAT(sb.Date_out, '%d-%m-%y') as Date_out,DATEDIFF(NOW(),sb.Date_out) as days_borrowed from stu_Borrow sb,students s,Books b where s.year = 4 and s.USN = sb.USN and sb.Book_id = b.Book_id and DATEDIFF(NOW(),sb.Date_out) > 15`;
  conn.query(query, (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
});

module.exports = router;
