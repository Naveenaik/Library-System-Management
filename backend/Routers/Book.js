const {Router} = require("express");

const conn = require("../connection");

const router = Router();

router.get("/book",async(req,res)=>{
    conn.query('select * from books',(error,result)=>{
        if(error)
            console.log(error);
        // console.log(result);
        res.send(result);
    })
})

router.post("/book/save",async(req,res)=>{
    console.log(req.body);
    const { Book_id, Title, Author,  Pname, Price, Available } = req.body;
    if (!Book_id) {
        return res.status(400).json({ error: 'Book_id is required' });
    }

    const query = `INSERT INTO books (Book_id, Title, Author,Pname, Price, Available) VALUES (?, ?, ?, ?, ?, ?)`;

    const values = [Book_id, Title, Author,Pname, Price, Available];

    conn.query(query, values, (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        console.log("Data inserted successfully");
        console.log(result);

        res.status(200).json({ success: true, message: 'Data inserted successfully' });
    });
})

router.put("/book/update/:Book_id",async(req,res)=>{
    const bookId = req.params.Book_id;
    const {Book_id,Title, Author, Pname, Price, Available} = req.body;
    const query = `update books set  Title = ?,Author = ?,Name = ?,Price = ?,Available = ? where Book_id = ?`;

    const values = [Title,Author,Pname,Price,Available,bookId];

    conn.query(query,values,(error,result)=>{
        if (error) {
            console.log(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        console.log("Data updated successfully");
        console.log(result);

        res.status(200).json({ success: true, message: 'Data updated successfully' });
    });

})


router.delete("/book/delete/:Book_id",async(req,res)=>{
    const bookId = req.params.Book_id;
    const query = `delete from books where Book_id = ?`;

    conn.query(query,bookId,(error,result)=>{
        if(error){
            console.log(error);
            return res.status(500).json({error:'Internal Server Errir'})
        }
        console.log("Data deleted successfully");
        // console.log(result);
        // res.status(200).json({ success: true, message: 'Book deleted successfully' });
    })
    
})

module.exports = router;