const {Router} = require("express");

const conn = require("../connection");

const router = Router();

router.get("/publisher",async(req,res)=>{
    conn.query('select * from publisher',(error,result)=>{
        if(error)
            console.log(error);
        res.send(result);
    })
})

router.post("/publisher/save",async(req,res)=>{
    console.log(req.body);
    const { Pname,Email } = req.body;
    if(Pname == '' || Email =='')
    {
        return res.status(500).json({ success: false, message: 'Enter proper details' });
    }

    const query = `INSERT INTO publisher (Pname,Email) VALUES (?, ?)`;

    const values = [Pname,Email];

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

router.put("/publisher/update/:Pname",async(req,res)=>{
    const _Name = req.params.Pname;
    const {Pname,Email} = req.body;

    if(Pname == '' || Email =='')
    {
        return res.status(500).json({ success: false, message: 'Enter proper details' });
    }

    const query = `update publisher set Pname = ?,Email = ? where Pname = ?`
    const values = [Pname,Email,_Name];

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

router.delete("/publisher/delete/:Pname",async(req,res)=>{
    const _Pname = req.params.Pname;
    const query = `delete from publisher where Pname = ?`;
    const values=[_Pname];
    conn.query(query,values,(error,result)=>{
        if(error){
            console.log(error);
            return res.status(500).json({error:'Internal Server Error'});
        }
        console.log("Data deleted successfully");
        
    })
    
})

module.exports=router;